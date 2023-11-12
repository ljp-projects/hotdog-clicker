const increment: number = 1.3;

const increase: Function = (price: number, count: number): number => {
	return price * increment + count / increment
}

const wipe = document.getElementById("wipe")
const saveBtn = document.getElementById("save")
const loadBtn = document.getElementById("load")
const file = document.querySelector('#file') as HTMLInputElement

const formatter = new Intl.NumberFormat('en-us', {minimumFractionDigits: 2})

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

const bunImage: HTMLImageElement | null = document.getElementById("bunImg") as HTMLImageElement
const dadImage: HTMLImageElement | null = document.getElementById("dadImg") as HTMLImageElement
const grillImage: HTMLImageElement | null = document.getElementById("grillImg") as HTMLImageElement
const farmImage: HTMLImageElement | null = document.getElementById("farmImg") as HTMLImageElement
const facImage: HTMLImageElement | null = document.getElementById("facImg") as HTMLImageElement
const bankImage: HTMLImageElement | null = document.getElementById("bankImg") as HTMLImageElement
const freezerImage: HTMLImageElement | null = document.getElementById("freezerImg") as HTMLImageElement

const update = (): void => {
	checkBuyables()

	clickCountElement != null ? clickCountElement.innerText = formatter.format(Number(clickCount.toFixed(2))) : null
	passiveClicksElement != null ? passiveClicksElement.innerText = formatter.format(Number(passiveClicks.toFixed(2))) : null

	bunCountElement != null ? bunCountElement.innerText = formatter.format(bunCount) : null
	bunPriceElement != null ? bunPriceElement.innerText = formatter.format(bunCost) : null

	dadCountElement != null ? dadCountElement.innerText =formatter.format(dadCount) : null
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

const save = (): void => {
	const save = `{"Hotdogs":${clickCount},"HotdogsPerSecond":${passiveClicks},"Bun":{"Owned":${bunCount},"Rate":${bunRate},"Price": ${bunCost}},"Dad":{"Owned":${dadCount},"Rate":${dadRate},"Price":${dadCost}},"Grill":{"Owned": ${grillCount},"Rate": ${grillRate},"Price":${grillCost}},"Farm":{"Owned":${farmCost},"Rate":${farmRate},"Price":${farmCost}},"Factory":{"Owned":${facCount},"Rate":${facRate},"Price":${facCost}},"Bank":{"Owned":${bankCount},"Rate":${bankRate},"Price":${bankCost}},"Freezer":{"Owned":${freezerCount},"Rate":${freezerRate},"Price":${freezerCost}}}`
	const file = new File([`${save}`], "hotdog-clicker-save.json", {type: "application/json"})
	const url = window.URL.createObjectURL(file)
	const a = document.createElement("a")
	a.setAttribute("style", "display: none")
	a.href = url
	a.download = file.name
	a.click();
	window.URL.revokeObjectURL(url);
}

/*
* First param is price, next is count
*/
const load: Function = (file: File): void => {
	console.log(file.text().then(res => res))
	update()
}

const checkBuyables = () => {
	if (clickCount >= bunCost) {
		bunImage.src = bunBuyable
	} else {
		bunImage.src = bunUnBuyable
	}
	if (clickCount >= dadCost) {
		dadImage.src = dadBuyable
	} else {
		dadImage.src = dadUnBuyable
	}
	if (clickCount >= grillCost) {
		grillImage.src = grillBuyable
	} else {
		grillImage.src = grillUnBuyable
	}
	if (clickCount >= farmCost) {
		farmImage.src = farmBuyable
	} else {
		farmImage.src = farmUnBuyable
	}
	if (clickCount >= facCost) {
		facImage.src = facBuyable
	} else {
		facImage.src = facUnBuyable
	}
	if (clickCount >= bankCost) {
		bankImage.src = bankBuyable
	} else {
		bankImage.src = bankUnBuyable
	}
	if (clickCount >= freezerCost) {
		freezerImage.src = freezerBuyable
	} else {
		freezerImage.src = freezerUnBuyable
	}
}

hotdogButton?.addEventListener("click", function() {
	if (clickCountElement != null) {
		clickCount++
		update()
	} else {
		alert('Hotdog Clicker has encountered a fatal error.')
	}
});

bunButton?.addEventListener("click", function() {
	if (clickCount >= bunCost && bunPriceElement != null && clickCountElement != null && bunCountElement != null && passiveClicksElement != null) {
		clickCount -= bunCost;
		bunCost = increase(bunCost, bunCount)
		bunCount++;
		passiveClicks += bunRate;
		update()
	}
});
dadButton?.addEventListener("click", function() {
	if (clickCount >= dadCost && dadPriceElement != null && clickCountElement != null && dadCountElement != null && passiveClicksElement != null) {
		clickCount -= dadCost;
		dadCost = increase(dadCost, dadCount)
		dadCount++;
		passiveClicks += dadRate;
		update()
	}
});
grillButton?.addEventListener("click", function() {
	if (clickCount >= grillCost && grillPriceElement != null && clickCountElement != null && grillCountElement != null && passiveClicksElement != null) {
		clickCount -= grillCost;
		grillCost = increase(grillCost, grillCount)
		grillCount++;
		passiveClicks += grillRate;
		update()
	}
});
farmButton?.addEventListener("click", function() {
	if (clickCount >= farmCost && farmPriceElement != null && clickCountElement != null && farmCountElement != null && passiveClicksElement != null) {
		clickCount -= farmCost;
		farmCost = increase(farmCost, farmCount)
		farmCount++;
		passiveClicks += farmRate;
		update()
	}
});
facButton?.addEventListener("click", function() {
	if (clickCount >= facCost && facPriceElement != null && clickCountElement != null && facCountElement != null && passiveClicksElement != null) {
		clickCount -= facCost;
		facCost = increase(facCost, facCount)
		facCount++;
		passiveClicks += facRate;
		update()
	}
});
bankButton?.addEventListener("click", function() {
	if (clickCount >= bankCost && bankPriceElement != null && clickCountElement != null && bankCountElement != null && passiveClicksElement != null) {
		clickCount -= bankCost;
		bankCost = increase(bankCost, bankCount)
		bankCount++;
		passiveClicks += bankRate;
		update()
	}
});

freezerButton?.addEventListener("click", function() {
	if (clickCount >= freezerCost && freezerPriceElement != null && freezerCountElement != null && clickCountElement != null && passiveClicksElement != null) {
		clickCount -= freezerCost;
		freezerCost = increase(freezerCost, freezerCount)
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

tSauceButton?.addEventListener("click", function() {
	if (clickCount >= tSauceCost && clickCountElement != null && passiveClicksElement != null) {
		clickCount -= tSauceCost;
		tSauceButton.style.display = "none";
		passiveClicks += 25;
		update()
	}
});

mustardButton?.addEventListener("click", function() {
	if (clickCount >= mustardCost && clickCountElement != null && passiveClicksElement != null) {
		clickCount -= mustardCost;
		clickCountElement.textContent = clickCount.toFixed(2);
		mustardButton.style.display = "none";
		passiveClicks += 50;
		update()
	}
});

crispButton?.addEventListener("click", function() {
	if (clickCount >= crispCost && clickCountElement != null) {
		clickCount -= crispCost;
		crispButton.style.display = "none";
		bunRate *= 2;
		update()
	}
});

let ID = setInterval(() => {
	if (clickCountElement != null) {
		clickCount += passiveClicks / 10;
		update();
	}
}, 100)

document.oncontextmenu = () => {
	return false;
}

if (wipe) wipe.onclick = () => {
	const willing = prompt("This action cannot be undone. You will lose all of your progress. Type 'wipe' to continue.")
	if (willing === "wipe") {
		clearInterval(ID)
		localStorage.clear();
		load()
		ID = setInterval(() => {
			if (clickCountElement != null) {
				clickCount += passiveClicks / 10;
				update();
			}
		}, 100)
	}
}

if (saveBtn) saveBtn.onclick = () => {
	clearInterval(ID)
	save()
	ID = setInterval(() => {
		if (clickCountElement != null) {
			clickCount += passiveClicks / 10;
			update();
		}
	}, 100)
}
if (file != null && file.files != null) file.addEventListener('input', () => {
	clearInterval(ID)
	load(file?.files?.item(0))
	ID = setInterval(() => {
		if (clickCountElement != null) {
			clickCount += passiveClicks / 10;
			update();
		}
	}, 100)
})