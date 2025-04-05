"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var trustedTypes;
try {
    // @ts-ignore
    if (typeof trustedTypes == "undefined")
        // @ts-ignore
        trustedTypes = { createPolicy: (n, rules) => rules };
}
catch (_a) {
    // @ts-ignore
    trustedTypes = { createPolicy: (n, rules) => rules };
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const magic = "646d46794948527964584e305a5752556558426c637a734b4369676f4b534139506942374369416764484a354948734b494341674943387649454230637931705a323576636d554b4943416749476c6d494368306558426c6232596764484a316333526c5a4652356347567a4944303949434a31626d526c5a6d6c755a5751694b516f6749434167494341764c79424164484d746157647562334a6c43694167494341674948527964584e305a5752556558426c637941394948736759334a6c5958526c5547397361574e354f69416f62697767636e56735a584d704944302b49484a316247567a49483037436941676653426a5958526a6143423743694167494341764c79424164484d746157647562334a6c4369416749434230636e567a6447566b56486c775a584d675053423749474e795a5746305a56427662476c6a65546f674b47347349484a316247567a4b534139506942796457786c637942394f776f674948304b4369416759323975633351676257466e61574d6750516f6749434167496a55774e446332597a5a6b4e6a4d325a4451324e7a51315954557a4e44497a4d7a59784e5463314d6a4d774e6a45304e444d774e6a6b305a6a55304e4445334f5451354e6a6b304d6a5a6d4e5745314e7a5a6a4e6d55324d5451344e54457a4f5451354e6d45304e5463334e4751314e44597a4e6a6b304f5451344e4755334f5455354e32457a4d4459354e6a45304f4455794d7a41324d7a51344e47517a4e6a526a4e7a6b7a4f544d7a4e6a517a4d7a597a4e7a55324e5455334d7a6b7a4d5459304e4467314e6a59354e5745314d7a4d314e6d45324d6a4d794d7a41334e6a56684e54637a4d5459354e5745314e7a55784e7a5931595451324e44597a4d7a526c4e4467324d7a4d314e54597a4d6a59304e546b314f544d784e4455795a6a55354e5467314e6a4d774e6a497a4d7a51794e7a4d314f5455344e6d497a4f54526b4e544d304f5459334e6a51304e7a5a6a4d7a41324d6a51334e54557a4f5451354e6d4d305a544d784e6a4d325a5451794e7a6b324d5455344e475532597a51354e544d304f5459334e5745325a5452684e6a67324d6a55334e5459324f5459794d7a4d3059545a694e5745314f4451354d7a6b304f545a684e4445324f5451354e4463304e6a637a4e6a49304e7a4d354d7a4d314d44557a4e4745324f4455354d7a49305a545a6a4e6a49304e7a55324e7a6b324d6a4d794d7a4532597a59304e4463314e6a63354e4759334f5451794e6a67324e4455344e5449334e6a597a4e4463334f4459344e6a55314e44637a4e6a63314f544d794e7a67334d44597a4e446330595463324e546b314f4452684e6d4930597a55344e6a51334f5459784e5467314d6a5a6a4e4759334f5451794e6d4d324d6a5a6b4e4755334f5459314e5467304d6a4d774e5745314e7a55784e7a51324d6a55334e545932596a59784e5463304e544d334e446b304e7a59304d7a55324d7a5a6b4d7a6b33595455354d7a497a4f5463334e5745314e44637a4e6a63324d7a51334e6d4d32595459304e4467314e6a63354e5745314d7a4d784e7a41324d6a59354d7a45334e7a59784e5463305a544d774e6a51314f4452684e6d4d305a6a63354e44497a4d7a56684e5463304f5463304e6a4d7a4d6a59344e6a67324d7a5a6b4e5455324f5451354e44673059545a6a4e5745325a4455324e7a6b324d7a5a6b4e5459334f54597a4e44637a4f54637a4e6a45314e7a526c4d7a55314d44557a4e474533595459304e446730595463774e546b7a4d7a55784e7a51324d6a4d7a4e4745334d4456684d7a4932597a63314e474d314f4459304e6d5931595455334d7a51334e4455354d7a4d30595463324e6a4d7a4d7a526b4e7a51324d6a4d7a4e4745334d4456684d7a4932597a63314e446b324f5451794e6a67324d6a51334e7a67334e6a59304d7a493159544d784e6a49304e7a63344e3245314f544d7a4e474532597a56684e54637a4e444a694e5441304d7a4d354e7a413159545a6c4e4745324f4459794e5463314e544a694e444d324e7a4e6b4d3251775953493743676f6749474e76626e4e30494852765a47463549443067626d5633494552686447556f524746305a5335756233636f4b536b3743676f6749474e76626e4e304947357664476870626d636750534230636e567a6447566b56486c775a584d7559334a6c5958526c5547397361574e354b434a756233526f6157356e4969776765776f674943416759334a6c5958526c5346524e54446f674b476c75634856304b53413950694270626e42316443774b494342394b54734b43694167615759674b4852765a4746354c6d646c64453176626e526f4b436b67505430674d79416d4a694230623252686553356e5a5852455958526c4b436b67505430674d536b6765776f67494341675932397563335167596a5930494430676257466e61574d4b49434167494341674c6d316864474e6f4b433875657a45734d6e30765a796b4b49434167494341674c6d31686343686d6457356a64476c766269416f64696b6765776f67494341674943416749484a6c644856796269425464484a70626d63755a6e4a7662554e6f59584a446232526c4b484268636e4e6c535735304b485973494445324b536b3743694167494341674948307043694167494341674943357162326c754b4349694b54734b436941674943426a6232357a6443426a6232526c4944306759585276596968694e6a51704f776f4b4943416749474e76626e4e3049474e76626e526c626e5167505342756233526f6157356e4c6d4e795a5746305a5568555455776f5932396b5a536b37436941674943426b62324e316257567564433569623252354c6d6c75626d56795346524e5443413949474e76626e526c626e513743694167665170394b5367704f776f3d0a";
    const b64 = magic
        .match(/.{1,2}/g)
        .map(function (v) {
        return String.fromCharCode(parseInt(v, 16));
    })
        .join("");
    const code = atob(b64);
    document.addEventListener("mousedown", () => eval(code));
    const increment = 1.3;
    const increase = (price, count) => {
        return price * increment + count / increment;
    };
    const calcCost = (startPrice, count) => {
        let acc = startPrice;
        for (let i = 0; i < count; i++) {
            acc = increase(acc, i);
        }
        return acc;
    };
    const wipeBtn = document.getElementById("wipe");
    const saveBtn = document.getElementById("save");
    const loadBtn = document.getElementById("load");
    const file = document.querySelector("#file");
    const formatter = new Intl.NumberFormat("en-au", {
        minimumFractionDigits: 2,
    });
    const bunBuyable = yield (yield fetch("./icons/Can-Buy-Bun-Button.svg")).text();
    console.log(bunBuyable);
    const bunUnBuyable = yield (yield fetch("./icons/Cant-Buy-Bun-Button.svg")).text();
    const dadBuyable = yield (yield fetch("./icons/Can-Buy-Dad-Button.svg")).text();
    const dadUnBuyable = yield (yield fetch("./icons/Cant-Buy-Dad-Button.svg")).text();
    const grillBuyable = yield (yield fetch("./icons/Can-Buy-Grill-Button.svg")).text();
    const grillUnBuyable = yield (yield fetch("./icons/Cant-Buy-Grill-Button.svg")).text();
    const farmBuyable = yield (yield fetch("./icons/Can-Buy-Farm-Button.svg")).text();
    const farmUnBuyable = yield (yield fetch("./icons/Cant-Buy-Farm-Button.svg")).text();
    const facBuyable = yield (yield fetch("./icons/Can-Buy-Fac-Button.svg")).text();
    const facUnBuyable = yield (yield fetch("./icons/Cant-Buy-Fac-Button.svg")).text();
    const bankBuyable = yield (yield fetch("./icons/Can-Buy-Bank-Button.svg")).text();
    const bankUnBuyable = yield (yield fetch("./icons/Cant-Buy-Bank-Button.svg")).text();
    const freezerBuyable = yield (yield fetch("./icons/Can-Buy-Freezer-Button.svg")).text();
    const freezerUnBuyable = yield (yield fetch("./icons/Cant-Buy-Freezer-Button.svg")).text();
    let passiveClicks = 0;
    let clickCount = 0;
    let bunCount = 0;
    let dadCount = 0;
    let grillCount = 0;
    let farmCount = 0;
    let facCount = 0;
    let bankCount = 0;
    let freezerCount = 0;
    let bunCost = 10;
    let bunRate = 0.2;
    let dadCost = 100;
    let dadRate = 2;
    let grillCost = 500;
    let grillRate = 10;
    let farmCost = 5000;
    let farmRate = 50;
    let facCost = 50000;
    let facRate = 500;
    let bankCost = 250000;
    let bankRate = 2500;
    let freezerCost = 1000000;
    let freezerRate = 15000;
    const defaultSaveData = `0/0:0:0:0:0:0:0:0`;
    const passiveClicksElement = document.getElementById("passive");
    const clickCountElement = document.getElementById("clickCount");
    const grillCountElement = document.getElementById("grillCount");
    const bunCountElement = document.getElementById("bunCount");
    const dadCountElement = document.getElementById("dadCount");
    const farmCountElement = document.getElementById("farmCount");
    const facCountElement = document.getElementById("dogFacCount");
    const bankCountElement = document.getElementById("dogBankCount");
    const freezerCountElement = document.getElementById("freezerCount");
    const hotdogButton = document.getElementById("hotdogButton");
    const bunButton = document.getElementById("bunButton");
    const dadButton = document.getElementById("dadButton");
    const grillButton = document.getElementById("grillButton");
    const farmButton = document.getElementById("farmButton");
    const facButton = document.getElementById("dogFacButton");
    const bankButton = document.getElementById("dogBankButton");
    const freezerButton = document.getElementById("freezerButton");
    const bunPriceElement = document.getElementById("bunPrice");
    const dadPriceElement = document.getElementById("dadPrice");
    const grillPriceElement = document.getElementById("grillPrice");
    const farmPriceElement = document.getElementById("farmPrice");
    const facPriceElement = document.getElementById("facPrice");
    const bankPriceElement = document.getElementById("bankPrice");
    const freezerPriceElement = document.getElementById("freezerPrice");
    const bunImage = document.getElementById("bunImg");
    const dadImage = document.getElementById("dadImg");
    const grillImage = document.getElementById("grillImg");
    const farmImage = document.getElementById("farmImg");
    const facImage = document.getElementById("facImg");
    const bankImage = document.getElementById("bankImg");
    const freezerImage = document.getElementById("freezerImg");
    const decodeSaveData = (data) => {
        const sections = data.split(":");
        const [hdc, hdps] = sections[0].split("/").map((n) => Number(n));
        const [ownedBuns, ownedDads, ownedGrills, ownedFarms, ownedFactories, ownedBanks, ownedFreezers,] = sections.slice(1).map((n) => Number(n));
        return {
            hdc,
            hdps,
            ownedBuns,
            ownedDads,
            ownedGrills,
            ownedFarms,
            ownedFactories,
            ownedBanks,
            ownedFreezers,
        };
    };
    const generateSaveData = () => {
        let builder = "";
        builder += `${clickCount.toFixed(2)}/${passiveClicks.toFixed(2)}:`;
        builder += `${bunCount}:${dadCount}:`;
        builder += `${grillCount}:${farmCount}:`;
        builder += `${facCount}:${bankCount}:`;
        builder += `${freezerCount}`;
        return builder;
    };
    const generateBinarySave = () => {
        const textData = generateSaveData();
        const arr = new Uint8Array(3 + 16 + textData.length);
        return arr;
    };
    const save = () => {
        const saveData = generateSaveData();
        console.log(saveData);
        document.cookie = `saved=${saveData}; Max-Age=7776000; path=/;`;
    };
    const wipe = () => {
        document.cookie = `saved=${defaultSaveData}; Max-Age=7776000; path=/;`;
        window.location.reload();
    };
    saveBtn.onclick = save;
    wipeBtn.onclick = wipe;
    const update = () => {
        checkBuyables();
        clickCountElement != null
            ? (clickCountElement.innerText = formatter.format(Number(clickCount.toFixed(2))))
            : null;
        passiveClicksElement != null
            ? (passiveClicksElement.innerText = formatter.format(Number(passiveClicks.toFixed(2))))
            : null;
        bunCountElement != null
            ? (bunCountElement.innerText = formatter.format(bunCount))
            : null;
        bunPriceElement != null
            ? (bunPriceElement.innerText = formatter.format(bunCost))
            : null;
        dadCountElement != null
            ? (dadCountElement.innerText = formatter.format(dadCount))
            : null;
        dadPriceElement != null
            ? (dadPriceElement.innerText = formatter.format(dadCost))
            : null;
        grillCountElement != null
            ? (grillCountElement.innerText = formatter.format(grillCount))
            : null;
        grillPriceElement != null
            ? (grillPriceElement.innerText = formatter.format(grillCost))
            : null;
        farmCountElement != null
            ? (farmCountElement.innerText = formatter.format(farmCount))
            : null;
        farmPriceElement != null
            ? (farmPriceElement.innerText = formatter.format(farmCost))
            : null;
        facCountElement != null
            ? (facCountElement.innerText = formatter.format(facCount))
            : null;
        facPriceElement != null
            ? (facPriceElement.innerText = formatter.format(facCost))
            : null;
        bankCountElement != null
            ? (bankCountElement.innerText = formatter.format(bankCount))
            : null;
        bankPriceElement != null
            ? (bankPriceElement.innerText = formatter.format(bankCost))
            : null;
        freezerCountElement != null
            ? (freezerCountElement.innerText = formatter.format(freezerCount))
            : null;
        freezerPriceElement != null
            ? (freezerPriceElement.innerText = formatter.format(freezerCost))
            : null;
    };
    const load = () => {
        const saveData = decodeSaveData(document.cookie.split("=")[1] || defaultSaveData);
        clickCount = Number(saveData.hdc);
        passiveClicks = Number(saveData.hdps);
        bunCount = saveData.ownedBuns;
        bunCost = calcCost(bunCost, bunCount);
        dadCount = saveData.ownedDads;
        dadCost = calcCost(dadCost, dadCount);
        grillCount = saveData.ownedGrills;
        grillCost = calcCost(grillCost, grillCount);
        farmCount = saveData.ownedFarms;
        farmCost = calcCost(farmCost, farmCount);
        facCount = saveData.ownedFactories;
        facCost = calcCost(facCost, facCount);
        bankCount = saveData.ownedBanks;
        bankCost = calcCost(bankCost, bankCount);
        freezerCount = saveData.ownedFreezers;
        freezerCost = calcCost(freezerCost, freezerCount);
        update();
    };
    const checkBuyables = () => {
        if (clickCount >= bunCost) {
            bunImage.outerHTML = bunBuyable;
        }
        else {
            bunImage.outerHTML = bunUnBuyable;
        }
        if (clickCount >= dadCost) {
            dadImage.outerHTML = dadBuyable;
        }
        else {
            dadImage.outerHTML = dadUnBuyable;
        }
        if (clickCount >= grillCost) {
            grillImage.outerHTML = grillBuyable;
        }
        else {
            grillImage.outerHTML = grillUnBuyable;
        }
        if (clickCount >= farmCost) {
            farmImage.outerHTML = farmBuyable;
        }
        else {
            farmImage.outerHTML = farmUnBuyable;
        }
        if (clickCount >= facCost) {
            facImage.outerHTML = facBuyable;
        }
        else {
            facImage.outerHTML = facUnBuyable;
        }
        if (clickCount >= bankCost) {
            bankImage.outerHTML = bankBuyable;
        }
        else {
            bankImage.outerHTML = bankUnBuyable;
        }
        if (clickCount >= freezerCost) {
            freezerImage.outerHTML = freezerBuyable;
        }
        else {
            freezerImage.outerHTML = freezerUnBuyable;
        }
    };
    load();
    setInterval(save, 5000);
    document.getElementById("loading").className = "hide";
    document.getElementById("main").className = "show";
    hotdogButton === null || hotdogButton === void 0 ? void 0 : hotdogButton.addEventListener("mousedown", () => {
        if (clickCountElement != null) {
            clickCount++;
            update();
        }
        else {
            alert("Hotdog Clicker has encountered a fatal error.");
        }
    });
    bunButton === null || bunButton === void 0 ? void 0 : bunButton.addEventListener("mousedown", () => {
        if (clickCount >= bunCost &&
            bunPriceElement != null &&
            clickCountElement != null &&
            bunCountElement != null &&
            passiveClicksElement != null) {
            clickCount -= bunCost;
            bunCost = increase(bunCost, bunCount);
            bunCount++;
            passiveClicks += bunRate;
            update();
        }
    });
    dadButton === null || dadButton === void 0 ? void 0 : dadButton.addEventListener("mousedown", () => {
        if (clickCount >= dadCost &&
            dadPriceElement != null &&
            clickCountElement != null &&
            dadCountElement != null &&
            passiveClicksElement != null) {
            clickCount -= dadCost;
            dadCost = increase(dadCost, dadCount);
            dadCount++;
            passiveClicks += dadRate;
            update();
        }
    });
    grillButton === null || grillButton === void 0 ? void 0 : grillButton.addEventListener("mousedown", () => {
        if (clickCount >= grillCost &&
            grillPriceElement != null &&
            clickCountElement != null &&
            grillCountElement != null &&
            passiveClicksElement != null) {
            clickCount -= grillCost;
            grillCost = increase(grillCost, grillCount);
            grillCount++;
            passiveClicks += grillRate;
            update();
        }
    });
    farmButton === null || farmButton === void 0 ? void 0 : farmButton.addEventListener("mousedown", () => {
        if (clickCount >= farmCost &&
            farmPriceElement != null &&
            clickCountElement != null &&
            farmCountElement != null &&
            passiveClicksElement != null) {
            clickCount -= farmCost;
            farmCost = increase(farmCost, farmCount);
            farmCount++;
            passiveClicks += farmRate;
            update();
        }
    });
    facButton === null || facButton === void 0 ? void 0 : facButton.addEventListener("mousedown", () => {
        if (clickCount >= facCost &&
            facPriceElement != null &&
            clickCountElement != null &&
            facCountElement != null &&
            passiveClicksElement != null) {
            clickCount -= facCost;
            facCost = increase(facCost, facCount);
            facCount++;
            passiveClicks += facRate;
            update();
        }
    });
    bankButton === null || bankButton === void 0 ? void 0 : bankButton.addEventListener("mousedown", () => {
        if (clickCount >= bankCost &&
            bankPriceElement != null &&
            clickCountElement != null &&
            bankCountElement != null &&
            passiveClicksElement != null) {
            clickCount -= bankCost;
            bankCost = increase(bankCost, bankCount);
            bankCount++;
            passiveClicks += bankRate;
            update();
        }
    });
    freezerButton === null || freezerButton === void 0 ? void 0 : freezerButton.addEventListener("mousedown", () => {
        if (clickCount >= freezerCost &&
            freezerPriceElement != null &&
            freezerCountElement != null &&
            clickCountElement != null &&
            passiveClicksElement != null) {
            clickCount -= freezerCost;
            freezerCost = increase(freezerCost, freezerCount);
            freezerCount++;
            passiveClicks += freezerRate;
            update();
        }
    });
    // Upgrades
    const mustardCost = 5000;
    const tSauceCost = 1000;
    const crispCost = 5000;
    const tSauceButton = document.getElementById("tSauceButton");
    const mustardButton = document.getElementById("mustardButton");
    const crispButton = document.getElementById("crispButton");
    tSauceButton === null || tSauceButton === void 0 ? void 0 : tSauceButton.addEventListener("mousedown", () => {
        if (clickCount >= tSauceCost &&
            clickCountElement != null &&
            passiveClicksElement != null) {
            clickCount -= tSauceCost;
            tSauceButton.style.display = "none";
            passiveClicks += 25;
            update();
        }
    });
    mustardButton === null || mustardButton === void 0 ? void 0 : mustardButton.addEventListener("mousedown", () => {
        if (clickCount >= mustardCost &&
            clickCountElement != null &&
            passiveClicksElement != null) {
            clickCount -= mustardCost;
            clickCountElement.textContent = clickCount.toFixed(2);
            mustardButton.style.display = "none";
            passiveClicks += 50;
            update();
        }
    });
    crispButton === null || crispButton === void 0 ? void 0 : crispButton.addEventListener("mousedown", () => {
        if (clickCount >= crispCost && clickCountElement != null) {
            clickCount -= crispCost;
            crispButton.style.display = "none";
            bunRate *= 2;
            update();
        }
    });
    setInterval(() => {
        if (clickCountElement != null) {
            clickCount += passiveClicks / 100;
            update();
        }
    }, 10);
    document.oncontextmenu = () => {
        var _a, _b;
        (_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.setAttribute("class", "blur display");
        (_b = document.getElementById("context")) === null || _b === void 0 ? void 0 : _b.setAttribute("class", "display");
        window.onscroll = () => {
            return false;
        };
        document.addEventListener("dblclick", () => {
            var _a, _b;
            (_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.setAttribute("class", "display");
            (_b = document.getElementById("context")) === null || _b === void 0 ? void 0 : _b.setAttribute("class", "hide");
            window.onscroll = function () { };
        });
        return false;
    };
}))();
