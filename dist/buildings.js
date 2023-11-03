"use strict";
/*
kotlinc
MIT LICENSE
2023
*/
// The formula for calculating the new price of an item:
// P + (C * (M + C)
// where P is the item's price previously
// C is the amount of the item owned
// M is the increment constant.
const increment = 1.3;
const increase = (price, count) => {
    return price + Math.cosh(increment + count);
};
const wipe = document.getElementById("wipe");
const formatter = new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 });
const bunBuyable = "./Can-Buy-Bun-Button.svg";
const bunUnBuyable = "./Cant-Buy-Bun-Button.svg";
const dadBuyable = "./Can-Buy-Dad-Button.svg";
const dadUnBuyable = "./Cant-Buy-Dad-Button.svg";
const grillBuyable = "./Can-Buy-Grill-Button.svg";
const grillUnBuyable = "./Cant-Buy-Grill-Button.svg";
const farmBuyable = "./Can-Buy-Farm-Button.svg";
const farmUnBuyable = "./Cant-Buy-Farm-Button.svg";
const facBuyable = "./Can-Buy-Fac-Button.svg";
const facUnBuyable = "./Cant-Buy-Fac-Button.svg";
const bankBuyable = "./Can-Buy-Bank-Button.svg";
const bankUnBuyable = "./Cant-Buy-Bank-Button.svg";
const freezerBuyable = './Can-Buy-Freezer-Button.svg';
const freezerUnBuyable = './Cant-Buy-Freezer-Button.svg';
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
const update = () => {
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
const save = () => {
    const set = (key, value) => {
        localStorage.setItem(key, value);
    };
    set('hotdogs', `${clickCount.toFixed(2)}`);
    set('hotdogs-sec', `${passiveClicks.toFixed(2)}`);
    set('bun', `${bunCount.toFixed(2)},${bunRate.toFixed(2)},${bunCost.toFixed(2)}`);
    set('dad', `${dadCount.toFixed(2)},${dadRate.toFixed(2)},${dadCost.toFixed(2)}`);
    set('grill', `${grillCount.toFixed(2)},${grillRate.toFixed(2)},${grillCost.toFixed(2)}`);
    set('farm', `${farmCount.toFixed(2)},${farmRate.toFixed(2)},${farmCost.toFixed(2)}`);
    set('factory', `${facCount.toFixed(2)},${facRate.toFixed(2)},${facCost.toFixed(2)}`);
    set('bank', `${bankCount.toFixed(2)},${bankRate.toFixed(2)},${bankCost.toFixed(2)}`);
    set('freezer', `${freezerCount.toFixed(2)},${freezerRate.toFixed(2)},${freezerCost.toFixed(2)}`);
};
/*
* First param is price, next is count
*/
const load = () => {
    const get = (key) => {
        return localStorage.getItem(key) || "";
    };
    clickCount = Number(get('hotdogs')) || 0;
    passiveClicks = Number(get('hotdogs-sec')) || 0;
    const bunInfo = get('bun').split(',');
    const dadInfo = get('dad').split(',');
    const grillInfo = get('grill').split(',');
    const farmInfo = get('farm').split(',');
    const facInfo = get('factory').split(',');
    const bankInfo = get('bank').split(',');
    const freezerInfo = get('freezer').split(',');
    bunCount = Number(bunInfo[0]) || 0;
    bunRate = Number(bunInfo[1]) || 0.2;
    bunCost = Number(bunInfo[2]) || 10;
    dadCount = Number(dadInfo[0]) || 0;
    dadRate = Number(dadInfo[1]) || 2;
    dadCost = Number(dadInfo[2]) || 100;
    grillCount = Number(grillInfo[0]) || 0;
    grillRate = Number(grillInfo[1]) || 10;
    grillCost = Number(grillInfo[2]) || 500;
    farmCount = Number(farmInfo[0]) || 0;
    farmRate = Number(farmInfo[1]) || 50;
    farmCost = Number(farmInfo[2]) || 5000;
    facCount = Number(facInfo[0]) || 0;
    facRate = Number(facInfo[1]) || 500;
    facCost = Number(facInfo[2]) || 50000;
    bankCount = Number(bankInfo[0]) || 0;
    bankRate = Number(bankInfo[1]) || 2500;
    bankCost = Number(bankInfo[2]) || 250000;
    freezerCount = Number(freezerInfo[0]) || 0;
    freezerRate = Number(freezerInfo[1]) || 15000;
    freezerCost = Number(freezerInfo[2]) || 1000000;
    update();
};
const checkBuyables = () => {
    if (clickCount >= bunCost) {
        bunImage.src = bunBuyable;
    }
    else {
        bunImage.src = bunUnBuyable;
    }
    if (clickCount >= dadCost) {
        dadImage.src = dadBuyable;
    }
    else {
        dadImage.src = dadUnBuyable;
    }
    if (clickCount >= grillCost) {
        grillImage.src = grillBuyable;
    }
    else {
        grillImage.src = grillUnBuyable;
    }
    if (clickCount >= farmCost) {
        farmImage.src = farmBuyable;
    }
    else {
        farmImage.src = farmUnBuyable;
    }
    if (clickCount >= facCost) {
        facImage.src = facBuyable;
    }
    else {
        facImage.src = facUnBuyable;
    }
    if (clickCount >= bankCost) {
        bankImage.src = bankBuyable;
    }
    else {
        bankImage.src = bankUnBuyable;
    }
    if (clickCount >= freezerCost) {
        freezerImage.src = freezerBuyable;
    }
    else {
        freezerImage.src = freezerUnBuyable;
    }
};
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
const ID = setInterval(() => {
    if (clickCountElement != null) {
        clickCount += passiveClicks / 10;
        update();
        save();
    }
}, 100);
load();
document.oncontextmenu = () => {
    return false;
};
if (wipe)
    wipe.onclick = () => {
        clearInterval(ID);
        localStorage.clear();
    };
