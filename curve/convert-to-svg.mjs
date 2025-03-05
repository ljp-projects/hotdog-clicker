import { readFile, writeFile } from "fs/promises"
import * as bplist from "bplist"
import { DOMImplementation, XMLSerializer } from "xmldom"
import rough from "roughjs"

const arrayEqual = (array1, array2) => array1.length === array2.length && array1.every((value, index) => value === array2[index])
const arrayInequal = (array1, array2) => array1.length !== array2.length || array1.every((value, index) => value !== array2[index])
const arrayEqualNz = (array1, array2) => arrayEqual(array1, array2) && array1.every(v => v !== 0) && array2.every(v => v !== 0)
const arrayInequalNz = (array1, array2) => arrayInequal(array1, array2) && array1.every(v => v !== 0) && array2.every(v => v !== 0)

const hsv2hsl = (h, s, v, d) => {
    if (d || d == null) {
        console.log("L", h, s, v)
        h /= 360;
        s /= 100;
        v /= 100;
    }

    // both hsv and hsl values are in [0, 1]
    const l = (2 - s) * v / 2;

    console.log("B", h, s, v, l)

    if (l !== 0) {
        if (l === 1) {
            s = 0;
        } else if (l < 0.5) {
            s = s * v / (l * 2);
        } else {
            s = s * v / (2 - l * 2);
        }
    }

    console.log("A", h, s, v, l)

    return [h * 360, s * 100, l * 100];
}

const content = (await readFile(process.argv[2])).toString()
const json = JSON.parse(content)

/**
 * @type {{
 *  content: string,
 *  font: string,
 *  fillColour: string,
 *  dimensions: [number, number],
 *  fontSize: number,
 *  position: [number, number],
 *  stylable: { _0: number },
 * }}
 */
const text =  {
    content: await (async () => {
        return new Promise((res, rej) => {
            bplist.parseBuffer(Buffer.from(json.abstractTexts[0].attributedText, 'base64'), (err, result) => {
                if (err) rej(err.reason)

                res(result[0]["$objects"][2])
            })
        })
    })(),

    fillColour: (() => {
        let [h, s, l] = hsv2hsl(json.abstractTexts[0].fillColor.h, json.abstractTexts[0].fillColor.s, json.abstractTexts[0].fillColor.b, false);

        return `hsl(${h.toFixed(2)}, ${s.toFixed(2)}%, ${l.toFixed(2)}%)`
    })(),
    font: json.texts[0].fontName,
    dimensions: [json.texts[0].width, json.texts[0].height],
    fontSize: json.texts[0].fontSize,
    stylable: json.elements.filter(o => o.elementDescription === "(text)")[0].subElement.stylable,
    position: [json.texts[0].transform[4], json.texts[0].transform[5]]
}

/**
 * @type {{
 *  dimensions: [number, number],
 *  title: string,
 * }}
 */
const artboard = {
    dimensions: [json.artboards[0].frame.width, json.artboards[0].frame.height],
    title: json.artboards[0].title,
}

/**
 * @type {{
 *  name: string,
 *  h: number,
 *  s: number,
 *  l: number,
 * }[]}
 */
const colours = json.fills.map(fill => {
    const name =  Object.keys(fill.color)[0];

    const [h, s, l] = hsv2hsl(fill.color[name].h * 360, fill.color[name].s * 100, fill.color[name].b * 100)

    return {
        name,
        h,
        s,
        l
    }
})

/**
 * @type {{
 *  name: string,
 *  stylable: {
 *    [key: string]: number
 *  },
 *  opacity: number,
 *  blur: number,
 *  dimensions: [number, number],
 *  position: [number, number],
 *  cornerRadius: number,
 * }[]}
 */
const rectangles = json.elements.filter(e => !e.isHidden && e.elementDescription === "(rectangle)").map((e, i) => {
    return {
        name: e.name,
        opacity: e.opacity,
        blur: e.blur,
        stylable: e.subElement.stylable,
        dimensions: json.localTransforms[i].scale.map((n, i) => n * (i == 0 ? artboard.dimensions[0] : artboard.dimensions[1])),
        position: json.localTransforms[i].translation,
        cornerRadius: json.paths[i].inputParams.shape ? json.paths[i].inputParams.shape._0.additionalValue.rectangle.cornerRadius : 0
    }
})

/**
 * @type {{
 *  nodes: {
 *    outPoint: [number, number],
 *    anchorPoint: [number, number],
 *    inPoint: [number, number],
 *    prevPoint: [number, number] | null,
 *    nextPoint: [number, number] | null,
 *    cornerRadius: number,
 *  }[],
 *  isClosed: boolean,
 * }[]}
 */
const geometries = json.pathGeometries.map(g => {
    return {
        isClosed: g.closed,
        nodes: g.nodes.map(n => {
            return {
                outPoint: n.outPoint,
                anchorPoint: n.anchorPoint,
                inPoint: n.inPoint,
                prevPoint: n.prevPoint.filter(n => n === 0).length >= 2 ? null : n.prevPoint,
                nextPoint: n.nextPoint.filter(n => n === 0).length >= 2 ? null : n.nextPoint,
                cornerRadius: n.cornerRadius
            }
        })
    }
})

const xmlSerializer = new XMLSerializer();
const document = new DOMImplementation(null).createDocument('http://www.w3.org/1999/xhtml', 'html', null);

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const rc = rough.svg(svg);

geometries.forEach((g, i) => {
    const instructions = []

    const colour = `hsl(${(colours[i] || {h: 0, s: 0, l: 0}).h.toFixed(0)}, ${(colours[i] || {h: 0, s: 0, l: 0}).s.toFixed(2)}%, ${(colours[i] || {h: 0, s: 0, l: 0}).l.toFixed(2)}%)`;

    g.nodes.forEach((node, idx) => {
        const isBezier = node.cornerRadius > 0 && node.prevPoint !== null && node.nextPoint !== null

        const isLine = node.cornerRadius === 0 && node.prevPoint !== null

        if (isBezier) {
            console.log("BEZIER")

            instructions.push(`M ${node.prevPoint[0].toFixed(2)} ${node.prevPoint[1].toFixed(2)}`)

            const [x1, y1] = node.prevPoint
            const [x2, y2] = [x1 - node.nextPoint[0], y1 - node.nextPoint[1]]

            instructions.push(`Q ${x1.toFixed(2)} ${y1.toFixed(2)}, ${x2.toFixed(2)} ${y2.toFixed(2)}`)
        } else if (isLine) {
            console.log("LINE")

            instructions.push(`M ${node.prevPoint[0].toFixed(2)} ${node.prevPoint[1].toFixed(2)}`)

            const [x2, y2] = [(node.prevPoint[0] - node.inPoint[0]).toFixed(2), (node.prevPoint[1] - node.inPoint[1]).toFixed(2)]

            //instructions.push(`L ${x2} ${y2}`)
        } else {
            console.log("N/A")

            instructions.push(`M ${node.inPoint[0].toFixed(2)} ${node.inPoint[1].toFixed(2)}`)
        }

        console.log(node)
    })

    svg.appendChild(rc.path(instructions.join(" "), {
        fill: `hsl(${(colours[i] || {h: 0, s: 0, l: 0}).h.toFixed(0)}, ${(colours[i] || {h: 0, s: 0, l: 0}).s.toFixed(2)}%, ${(colours[i] || {h: 0, s: 0, l: 0}).l.toFixed(2)}%)`,
        roughness: 0,
        fillStyle: `solid`,
    }))
})

const textElement = document.createElement("text");

textElement.setAttribute("x", text.position[0])
textElement.setAttribute("y", text.position[1])
textElement.setAttribute("style", `font-family: ${text.font}; font-size: ${text.fontSize}; fill: ${text.fillColour}`)

textElement.textContent = text.content

svg.appendChild(textElement)

let xml = xmlSerializer.serializeToString(svg);

await writeFile("output.svg", xml)

/*console.log(text)
console.log(artboard)
console.log(colours)
console.log(rectangles)*/

console.log(colours)