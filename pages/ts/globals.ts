const increment: number = 1.3;

const increase: Function = (price: number, count: number): number => {
	return price * increment + count / increment
}

const wipe = document.getElementById("wipe")
const saveBtn = document.getElementById("save")
const loadBtn = document.getElementById("load")
const file = document.querySelector('#file') as HTMLInputElement

const formatter = new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 })

const bunBuyable: string = "./Can-Buy-Bun-Button.svg"
const bunUnBuyable: string = "./Cant-Buy-Bun-Button.svg"

const dadBuyable: string = "./Can-Buy-Dad-Button.svg"
const dadUnBuyable: string = "./Cant-Buy-Dad-Button.svg"

const grillBuyable: string = "./Can-Buy-Grill-Button.svg"
const grillUnBuyable: string = "./Cant-Buy-Grill-Button.svg"

const farmBuyable: string = "./Can-Buy-Farm-Button.svg"
const farmUnBuyable: string = "./Cant-Buy-Farm-Button.svg"

const facBuyable: string = "./Can-Buy-Fac-Button.svg"
const facUnBuyable: string = "./Cant-Buy-Fac-Button.svg"

const bankBuyable: string = "./Can-Buy-Bank-Button.svg"
const bankUnBuyable: string = "./Cant-Buy-Bank-Button.svg"

const freezerBuyable: string = './Can-Buy-Freezer-Button.svg'
const freezerUnBuyable: string = './Cant-Buy-Freezer-Button.svg'

let passiveClicks: number = 0;
let clickCount: number = 0;
let bunCount: number = 0;
let dadCount: number = 0;
let grillCount: number = 0;
let farmCount: number = 0;
let facCount: number = 0;
let bankCount: number = 0;
let freezerCount: number = 0;

let bunCost: number = 10;
let bunRate: number = 0.2;

let dadCost: number = 100;
let dadRate: number = 2;

let grillCost: number = 500;
let grillRate: number = 10;

let farmCost: number = 5000;
let farmRate: number = 50;

let facCost: number = 50000;
let facRate: number = 500;

let bankCost: number = 250000;
let bankRate: number = 2500;

let freezerCost: number = 1000000
let freezerRate: number = 15000

const passiveClicksElement: HTMLElement | null = document.getElementById("passive");
const clickCountElement: HTMLElement | null = document.getElementById("clickCount");

const grillCountElement: HTMLElement | null = document.getElementById("grillCount");
const bunCountElement: HTMLElement | null = document.getElementById("bunCount");
const dadCountElement: HTMLElement | null = document.getElementById("dadCount");
const farmCountElement: HTMLElement | null = document.getElementById("farmCount");
const facCountElement: HTMLElement | null = document.getElementById("dogFacCount");
const bankCountElement: HTMLElement | null = document.getElementById("dogBankCount");
const freezerCountElement: HTMLElement | null = document.getElementById("freezerCount");

const hotdogButton: HTMLElement | null = document.getElementById("hotdogButton");
const bunButton: HTMLElement | null = document.getElementById("bunButton");
const dadButton: HTMLElement | null = document.getElementById("dadButton");
const grillButton: HTMLElement | null = document.getElementById("grillButton");
const farmButton: HTMLElement | null = document.getElementById("farmButton");
const facButton: HTMLElement | null = document.getElementById("dogFacButton");
const bankButton: HTMLElement | null = document.getElementById("dogBankButton");
const freezerButton: HTMLElement | null = document.getElementById("freezerButton");

const bunPriceElement: HTMLElement | null = document.getElementById("bunPrice")
const dadPriceElement: HTMLElement | null = document.getElementById("dadPrice")
const grillPriceElement: HTMLElement | null = document.getElementById("grillPrice")
const farmPriceElement: HTMLElement | null = document.getElementById("farmPrice")
const facPriceElement: HTMLElement | null = document.getElementById("facPrice")
const bankPriceElement: HTMLElement | null = document.getElementById("bankPrice")
const freezerPriceElement: HTMLElement | null = document.getElementById("freezerPrice")

const bunImage: HTMLImageElement = document.getElementById("bunImg") as HTMLImageElement
const dadImage: HTMLImageElement = document.getElementById("dadImg") as HTMLImageElement
const grillImage: HTMLImageElement = document.getElementById("grillImg") as HTMLImageElement
const farmImage: HTMLImageElement = document.getElementById("farmImg") as HTMLImageElement
const facImage: HTMLImageElement = document.getElementById("facImg") as HTMLImageElement
const bankImage: HTMLImageElement = document.getElementById("bankImg") as HTMLImageElement
const freezerImage: HTMLImageElement = document.getElementById("freezerImg") as HTMLImageElement

const update = (): void => {
	checkBuyables()

	clickCountElement != null ? clickCountElement.innerText = formatter.format(Number(clickCount.toFixed(2))) : null
	passiveClicksElement != null ? passiveClicksElement.innerText = formatter.format(Number(passiveClicks.toFixed(2))) : null

	bunCountElement != null ? bunCountElement.innerText = formatter.format(bunCount) : null
	bunPriceElement != null ? bunPriceElement.innerText = formatter.format(bunCost) : null

	dadCountElement != null ? dadCountElement.innerText = formatter.format(dadCount) : null
	dadPriceElement != null ? dadPriceElement.innerText = formatter.format(dadCost) : null

	grillCountElement != null ? grillCountElement.innerText = formatter.format(grillCount) : null
	grillPriceElement != null ? grillPriceElement.innerText = formatter.format(grillCost) : null

	farmCountElement != null ? farmCountElement.innerText = formatter.format(farmCount) : null
	farmPriceElement != null ? farmPriceElement.innerText = formatter.format(farmCost) : null

	facCountElement != null ? facCountElement.innerText = formatter.format(facCount) : null
	facPriceElement != null ? facPriceElement.innerText = formatter.format(facCost) : null

	bankCountElement != null ? bankCountElement.innerText = formatter.format(bankCount) : null
	bankPriceElement != null ? bankPriceElement.innerText = formatter.format(bankCost) : null

	freezerCountElement != null ? freezerCountElement.innerText = formatter.format(freezerCount) : null
	freezerPriceElement != null ? freezerPriceElement.innerText = formatter.format(freezerCost) : null
}

const checkBuyables = () => {
	const worker = new Worker('./dist/check.js')

	// We need to know which items we can buy
	worker.postMessage([
		clickCount
	]);

	worker.onmessage = e => {
		const buyables: string[] = e.data;

		bunImage.src = buyables[0];
		dadImage.src = buyables[1];
		grillImage.src = buyables[2];
		farmImage.src = buyables[3];
		facImage.src = buyables[4];
		bankImage.src = buyables[5];
		freezerImage.src = buyables[6];
	}

	worker.terminate();
}