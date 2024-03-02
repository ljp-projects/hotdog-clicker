import { check } from "./check.js";
export const increment = 1.3;
export const increase = (price, count) => {
    return price * increment + count / increment;
};
export const wipe = document.getElementById("wipe");
export const saveBtn = document.getElementById("save");
export const loadBtn = document.getElementById("load");
export const file = document.querySelector('#file');
export const formatter = new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 });
export const bunBuyable = "./Can-Buy-Bun-Button.svg";
export const bunUnBuyable = "./Cant-Buy-Bun-Button.svg";
export const dadBuyable = "./Can-Buy-Dad-Button.svg";
export const dadUnBuyable = "./Cant-Buy-Dad-Button.svg";
export const grillBuyable = "./Can-Buy-Grill-Button.svg";
export const grillUnBuyable = "./Cant-Buy-Grill-Button.svg";
export const farmBuyable = "./Can-Buy-Farm-Button.svg";
export const farmUnBuyable = "./Cant-Buy-Farm-Button.svg";
export const facBuyable = "./Can-Buy-Fac-Button.svg";
export const facUnBuyable = "./Cant-Buy-Fac-Button.svg";
export const bankBuyable = "./Can-Buy-Bank-Button.svg";
export const bankUnBuyable = "./Cant-Buy-Bank-Button.svg";
export const freezerBuyable = './Can-Buy-Freezer-Button.svg';
export const freezerUnBuyable = './Cant-Buy-Freezer-Button.svg';
export let passiveClicks = 0;
export let clickCount = 0;
export let bunCount = 0;
export let dadCount = 0;
export let grillCount = 0;
export let farmCount = 0;
export let facCount = 0;
export let bankCount = 0;
export let freezerCount = 0;
export let bunCost = 10;
export let bunRate = 0.2;
export let dadCost = 100;
export let dadRate = 2;
export let grillCost = 500;
export let grillRate = 10;
export let farmCost = 5000;
export let farmRate = 50;
export let facCost = 50000;
export let facRate = 500;
export let bankCost = 250000;
export let bankRate = 2500;
export let freezerCost = 1000000;
export let freezerRate = 15000;
export const passiveClicksElement = document.getElementById("passive");
export const clickCountElement = document.getElementById("clickCount");
export const grillCountElement = document.getElementById("grillCount");
export const bunCountElement = document.getElementById("bunCount");
export const dadCountElement = document.getElementById("dadCount");
export const farmCountElement = document.getElementById("farmCount");
export const facCountElement = document.getElementById("dogFacCount");
export const bankCountElement = document.getElementById("dogBankCount");
export const freezerCountElement = document.getElementById("freezerCount");
export const hotdogButton = document.getElementById("hotdogButton");
export const bunButton = document.getElementById("bunButton");
export const dadButton = document.getElementById("dadButton");
export const grillButton = document.getElementById("grillButton");
export const farmButton = document.getElementById("farmButton");
export const facButton = document.getElementById("dogFacButton");
export const bankButton = document.getElementById("dogBankButton");
export const freezerButton = document.getElementById("freezerButton");
export const bunPriceElement = document.getElementById("bunPrice");
export const dadPriceElement = document.getElementById("dadPrice");
export const grillPriceElement = document.getElementById("grillPrice");
export const farmPriceElement = document.getElementById("farmPrice");
export const facPriceElement = document.getElementById("facPrice");
export const bankPriceElement = document.getElementById("bankPrice");
export const freezerPriceElement = document.getElementById("freezerPrice");
export const bunImage = document.getElementById("bunImg");
export const dadImage = document.getElementById("dadImg");
export const grillImage = document.getElementById("grillImg");
export const farmImage = document.getElementById("farmImg");
export const facImage = document.getElementById("facImg");
export const bankImage = document.getElementById("bankImg");
export const freezerImage = document.getElementById("freezerImg");
export const update = () => {
    checkBuyables();
    clickCountElement != null ? clickCountElement.innerText = formatter.format(Number(clickCount.toFixed(2))) : null;
    passiveClicksElement != null ? passiveClicksElement.innerText = formatter.format(Number(passiveClicks.toFixed(2))) : null;
    bunCountElement != null ? bunCountElement.innerText = formatter.format(bunCount) : null;
    bunPriceElement != null ? bunPriceElement.innerText = formatter.format(bunCost) : null;
    dadCountElement != null ? dadCountElement.innerText = formatter.format(dadCount) : null;
    dadPriceElement != null ? dadPriceElement.innerText = formatter.format(dadCost) : null;
    grillCountElement != null ? grillCountElement.innerText = formatter.format(grillCount) : null;
    grillPriceElement != null ? grillPriceElement.innerText = formatter.format(grillCost) : null;
    farmCountElement != null ? farmCountElement.innerText = formatter.format(farmCount) : null;
    farmPriceElement != null ? farmPriceElement.innerText = formatter.format(farmCost) : null;
    facCountElement != null ? facCountElement.innerText = formatter.format(facCount) : null;
    facPriceElement != null ? facPriceElement.innerText = formatter.format(facCost) : null;
    bankCountElement != null ? bankCountElement.innerText = formatter.format(bankCount) : null;
    bankPriceElement != null ? bankPriceElement.innerText = formatter.format(bankCost) : null;
    freezerCountElement != null ? freezerCountElement.innerText = formatter.format(freezerCount) : null;
    freezerPriceElement != null ? freezerPriceElement.innerText = formatter.format(freezerCost) : null;
};
const checkBuyables = check;
hotdogButton === null || hotdogButton === void 0 ? void 0 : hotdogButton.addEventListener("click", function () {
    if (clickCountElement != null) {
        clickCount++;
        update();
    }
    else {
        alert('Hotdog Clicker has encountered a fatal error.');
    }
});
bunButton === null || bunButton === void 0 ? void 0 : bunButton.addEventListener("click", function () {
    if (clickCount >= bunCost && bunPriceElement != null && clickCountElement != null && bunCountElement != null && passiveClicksElement != null) {
        clickCount -= bunCost;
        bunCost = increase(bunCost, bunCount);
        bunCount++;
        passiveClicks += bunRate;
        update();
    }
});
dadButton === null || dadButton === void 0 ? void 0 : dadButton.addEventListener("click", function () {
    if (clickCount >= dadCost && dadPriceElement != null && clickCountElement != null && dadCountElement != null && passiveClicksElement != null) {
        clickCount -= dadCost;
        dadCost = increase(dadCost, dadCount);
        dadCount++;
        passiveClicks += dadRate;
        update();
    }
});
grillButton === null || grillButton === void 0 ? void 0 : grillButton.addEventListener("click", function () {
    if (clickCount >= grillCost && grillPriceElement != null && clickCountElement != null && grillCountElement != null && passiveClicksElement != null) {
        clickCount -= grillCost;
        grillCost = increase(grillCost, grillCount);
        grillCount++;
        passiveClicks += grillRate;
        update();
    }
});
farmButton === null || farmButton === void 0 ? void 0 : farmButton.addEventListener("click", function () {
    if (clickCount >= farmCost && farmPriceElement != null && clickCountElement != null && farmCountElement != null && passiveClicksElement != null) {
        clickCount -= farmCost;
        farmCost = increase(farmCost, farmCount);
        farmCount++;
        passiveClicks += farmRate;
        update();
    }
});
facButton === null || facButton === void 0 ? void 0 : facButton.addEventListener("click", function () {
    if (clickCount >= facCost && facPriceElement != null && clickCountElement != null && facCountElement != null && passiveClicksElement != null) {
        clickCount -= facCost;
        facCost = increase(facCost, facCount);
        facCount++;
        passiveClicks += facRate;
        update();
    }
});
bankButton === null || bankButton === void 0 ? void 0 : bankButton.addEventListener("click", function () {
    if (clickCount >= bankCost && bankPriceElement != null && clickCountElement != null && bankCountElement != null && passiveClicksElement != null) {
        clickCount -= bankCost;
        bankCost = increase(bankCost, bankCount);
        bankCount++;
        passiveClicks += bankRate;
        update();
    }
});
freezerButton === null || freezerButton === void 0 ? void 0 : freezerButton.addEventListener("click", function () {
    if (clickCount >= freezerCost && freezerPriceElement != null && freezerCountElement != null && clickCountElement != null && passiveClicksElement != null) {
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
tSauceButton === null || tSauceButton === void 0 ? void 0 : tSauceButton.addEventListener("click", function () {
    if (clickCount >= tSauceCost && clickCountElement != null && passiveClicksElement != null) {
        clickCount -= tSauceCost;
        tSauceButton.style.display = "none";
        passiveClicks += 25;
        update();
    }
});
mustardButton === null || mustardButton === void 0 ? void 0 : mustardButton.addEventListener("click", function () {
    if (clickCount >= mustardCost && clickCountElement != null && passiveClicksElement != null) {
        clickCount -= mustardCost;
        clickCountElement.textContent = clickCount.toFixed(2);
        mustardButton.style.display = "none";
        passiveClicks += 50;
        update();
    }
});
crispButton === null || crispButton === void 0 ? void 0 : crispButton.addEventListener("click", function () {
    if (clickCount >= crispCost && clickCountElement != null) {
        clickCount -= crispCost;
        crispButton.style.display = "none";
        bunRate *= 2;
        update();
    }
});
setInterval(() => {
    if (clickCountElement != null) {
        clickCount += passiveClicks / 10;
        update();
    }
}, 100);
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
