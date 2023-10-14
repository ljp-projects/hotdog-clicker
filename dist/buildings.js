"use strict";
const grill = new Audio("designed-fire-winds-swoosh-04-116788.mp3");
const bun = new Audio("crunch-crispy-breadbun-41340.mp3");
const dad = new Audio("dad-says-yummy-113126.mp3");
const farm = new Audio("zapsplat_impacts_hit_loose_ground_dirt_impact_collapse_fall_013_102682.mp3");
const factory = new Audio("some-kind-of-machine-103152.mp3");
const bank = new Audio("cash-register-purchase-87313.mp3");
const ambience = new Audio("./Hotdog-Clicker-Ambience.m4a");
ambience.loop = true;
const bunBuyable = "./Can-Buy-Bun-Button.svg";
const bunUnBuyable = "./Cant-Buy-Bun-Button.svg";
const bunBuying = "./Buying-Bun-Button.svg";
const dadBuyable = "./Can-Buy-Dad-Button.svg";
const dadUnBuyable = "./Cant-Buy-Dad-Button.svg";
const dadBuying = "./Buying-Dad-Button.svg";
const grillBuyable = "./Can-Buy-Grill-Button.svg";
const grillUnBuyable = "./Cant-Buy-Grill-Button.svg";
const grillBuying = "./Buying-Grill-Button.svg";
const farmBuyable = "./Can-Buy-Farm-Button.svg";
const farmUnBuyable = "./Cant-Buy-Farm-Button.svg";
const farmBuying = "./Buying-Farm-Button.svg";
const facBuyable = "./Can-Buy-Fac-Button.svg";
const facUnBuyable = "./Cant-Buy-Fac-Button.svg";
const facBuying = "./Buying-Fac-Button.svg";
const bankBuyable = "./Can-Buy-Bank-Button.svg";
const bankUnBuyable = "./Cant-Buy-Bank-Button.svg";
const bankBuying = "./Buying-Bank-Button.svg";
let passiveClicks = 0;
let clickCount = 0;
let bunCount = 0;
let dadCount = 0;
let grillCount = 0;
let farmCount = 0;
let facCount = 0;
let bankCount = 0;
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
const increment = 1.3;
const passiveClicksElement = document.getElementById("passive");
const clickCountElement = document.getElementById("clickCount");
const grillCountElement = document.getElementById("grillCount");
const bunCountElement = document.getElementById("bunCount");
const dadCountElement = document.getElementById("dadCount");
const farmCountElement = document.getElementById("farmCount");
const facCountElement = document.getElementById("dogFacCount");
const bankCountElement = document.getElementById("dogBankCount");
const hotdogButton = document.getElementById("hotdogButton");
const bunButton = document.getElementById("bunButton");
const dadButton = document.getElementById("dadButton");
const grillButton = document.getElementById("grillButton");
const farmButton = document.getElementById("farmButton");
const facButton = document.getElementById("dogFacButton");
const bankButton = document.getElementById("dogBankButton");
const bunPriceElement = document.getElementById("bunPrice");
const dadPriceElement = document.getElementById("dadPrice");
const grillPriceElement = document.getElementById("grillPrice");
const farmPriceElement = document.getElementById("farmPrice");
const facPriceElement = document.getElementById("facPrice");
const bankPriceElement = document.getElementById("bankPrice");
const bunImage = document.getElementById("bunImg");
const dadImage = document.getElementById("dadImg");
const grillImage = document.getElementById("grillImg");
const farmImage = document.getElementById("farmImg");
const facImage = document.getElementById("facImg");
const bankImage = document.getElementById("bankImg");
const update = () => {
    clickCountElement != null ? clickCountElement.innerText = clickCount.toFixed(1) : null;
    passiveClicksElement != null ? passiveClicksElement.innerText = passiveClicks.toFixed(1) : null;
    bunCountElement != null ? bunCountElement.innerText = String(bunCount) : null;
    bunPriceElement != null ? bunPriceElement.innerText = String(bunCost) : null;
    dadCountElement != null ? dadCountElement.innerText = String(dadCount) : null;
    dadPriceElement != null ? dadPriceElement.innerText = String(dadCost) : null;
    grillCountElement != null ? grillCountElement.innerText = String(grillCount) : null;
    grillPriceElement != null ? grillPriceElement.innerText = String(grillCost) : null;
};
const save = () => {
    const set = (key, value) => {
        localStorage.setItem(key, value);
    };
    set('hotdogs', `${clickCount.toFixed(1)}`);
    set('hotdogs-sec', `${passiveClicks.toFixed(1)}`);
    set('bun', `${bunCount.toFixed(1)},${bunRate.toFixed(1)},${bunCost.toFixed(1)}`);
    set('dad', `${dadCount.toFixed(1)},${dadRate.toFixed(1)},${dadCost.toFixed(1)}`);
    set('grill', `${grillCount.toFixed(1)},${grillRate.toFixed(1)},${grillCost.toFixed(1)}`);
    set('farm', `${farmCount.toFixed(1)},${farmRate.toFixed(1)},${farmCost.toFixed(1)}`);
    set('factory', `${facCount.toFixed(1)},${facRate.toFixed(1)},${facCost.toFixed(1)}`);
    set('bank', `${bankCount.toFixed(1)},${bankRate.toFixed(1)},${bankCost.toFixed(1)}`);
};
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
    bunCount = Number(bunInfo[0]) || 0;
    bunRate = Number(bunInfo[1]) || 0.2;
    bunCost = Number(bunInfo[2]) || 10;
    dadCount = Number(dadInfo[0]) || 0;
    dadRate = Number(dadInfo[1]) || 2;
    dadCost = Number(dadInfo[2]) || 100;
    grillCount = Number(grillInfo[0]) || 0;
    grillRate = Number(grillInfo[1]) || 10;
    grillCost = Number(grillInfo[2]) || 500;
    checkBuyables();
    update();
};
const checkBuyables = () => {
    if (clickCount >= bunCost) {
        bunImage.src = bunBuyable;
    }
    else {
        bunImage.src = bunUnBuyable;
        dadImage.src = dadUnBuyable;
        grillImage.src = grillUnBuyable;
        farmImage.src = farmUnBuyable;
        facImage.src = facUnBuyable;
        bankImage.src = bankUnBuyable;
        return;
    }
    if (clickCount >= dadCost) {
        dadImage.src = dadBuyable;
    }
    else {
        dadImage.src = dadUnBuyable;
        grillImage.src = grillUnBuyable;
        farmImage.src = farmUnBuyable;
        facImage.src = facUnBuyable;
        bankImage.src = bankUnBuyable;
        return;
    }
    if (clickCount >= grillCost) {
        grillImage.src = grillBuyable;
    }
    else {
        grillImage.src = grillUnBuyable;
        farmImage.src = farmUnBuyable;
        facImage.src = facUnBuyable;
        bankImage.src = bankUnBuyable;
        return;
    }
    if (clickCount >= farmCost) {
        farmImage.src = farmBuyable;
    }
    else {
        farmImage.src = farmUnBuyable;
        facImage.src = facUnBuyable;
        bankImage.src = bankUnBuyable;
        return;
    }
    if (clickCount >= facCost) {
        facImage.src = facBuyable;
    }
    else {
        facImage.src = facUnBuyable;
        bankImage.src = bankUnBuyable;
        return;
    }
    if (clickCount >= bankCost) {
        bankImage.src = bankBuyable;
    }
    else {
        bankImage.src = bankUnBuyable;
        return;
    }
};
hotdogButton === null || hotdogButton === void 0 ? void 0 : hotdogButton.addEventListener("click", function () {
    if (clickCount == 0.0) {
        ambience === null || ambience === void 0 ? void 0 : ambience.play();
    }
    if (clickCountElement != null) {
        clickCount++;
        clickCountElement.textContent = clickCount.toFixed(1);
        checkBuyables();
    }
    else {
        alert('Hotdog Clicker has encountered a fatal error.');
    }
});
bunButton === null || bunButton === void 0 ? void 0 : bunButton.addEventListener("click", function () {
    if (clickCount >= bunCost && bunPriceElement != null && clickCountElement != null && bunCountElement != null && passiveClicksElement != null) {
        clickCount -= bunCost;
        bunCost *= increment;
        checkBuyables();
        bunImage.src = bunBuying;
        bunPriceElement.textContent = String(bunCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        bunCount++;
        bunCountElement.textContent = String(bunCount);
        passiveClicks += bunRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        bun === null || bun === void 0 ? void 0 : bun.play();
    }
});
dadButton === null || dadButton === void 0 ? void 0 : dadButton.addEventListener("click", function () {
    if (clickCount >= dadCost && dadPriceElement != null && clickCountElement != null && dadCountElement != null && passiveClicksElement != null) {
        clickCount -= dadCost;
        dadCost *= increment;
        checkBuyables();
        dadImage.src = dadBuying;
        dadPriceElement.textContent = String(dadCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        dadCount++;
        dadCountElement.textContent = String(dadCount);
        passiveClicks += dadRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        dad === null || dad === void 0 ? void 0 : dad.play();
    }
});
grillButton === null || grillButton === void 0 ? void 0 : grillButton.addEventListener("click", function () {
    if (clickCount >= grillCost && grillPriceElement != null && clickCountElement != null && grillCountElement != null && passiveClicksElement != null) {
        clickCount -= grillCost;
        grillCost *= increment;
        checkBuyables();
        grillImage.src = grillBuying;
        grillPriceElement.textContent = String(grillCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        grillCount++;
        grillCountElement.textContent = String(grillCount);
        passiveClicks += grillRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        grill === null || grill === void 0 ? void 0 : grill.play();
    }
});
farmButton === null || farmButton === void 0 ? void 0 : farmButton.addEventListener("click", function () {
    if (clickCount >= farmCost && farmPriceElement != null && clickCountElement != null && farmCountElement != null && passiveClicksElement != null) {
        clickCount -= farmCost;
        farmCost *= increment;
        checkBuyables();
        farmImage.src = farmBuying;
        farmPriceElement.textContent = String(farmCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        farmCount++;
        farmCountElement.textContent = String(farmCount);
        passiveClicks += farmRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        farm === null || farm === void 0 ? void 0 : farm.play();
    }
});
facButton === null || facButton === void 0 ? void 0 : facButton.addEventListener("click", function () {
    if (clickCount >= facCost && facPriceElement != null && clickCountElement != null && facCountElement != null && passiveClicksElement != null) {
        clickCount -= facCost;
        facCost *= increment;
        checkBuyables();
        facImage.src = facBuying;
        facPriceElement.textContent = String(facCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        facCount++;
        facCountElement.textContent = String(facCount.toFixed(1));
        passiveClicks += facRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        factory === null || factory === void 0 ? void 0 : factory.play();
    }
});
bankButton === null || bankButton === void 0 ? void 0 : bankButton.addEventListener("click", function () {
    if (clickCount >= bankCost && bankPriceElement != null && clickCountElement != null && bankCountElement != null && passiveClicksElement != null) {
        clickCount -= bankCost;
        bankCost *= increment;
        checkBuyables();
        bankImage.src = bankBuying;
        bankPriceElement.textContent = String(bankCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        bankCount++;
        bankCountElement.textContent = String(bankCount.toFixed(1));
        passiveClicks += bankRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        bank === null || bank === void 0 ? void 0 : bank.play();
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
        checkBuyables();
        clickCountElement.textContent = clickCount.toFixed(1);
        tSauceButton.style.display = "none";
        passiveClicks += 25;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});
mustardButton === null || mustardButton === void 0 ? void 0 : mustardButton.addEventListener("click", function () {
    if (clickCount >= mustardCost && clickCountElement != null && passiveClicksElement != null) {
        clickCount -= mustardCost;
        checkBuyables();
        clickCountElement.textContent = clickCount.toFixed(1);
        mustardButton.style.display = "none";
        passiveClicks += 50;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});
crispButton === null || crispButton === void 0 ? void 0 : crispButton.addEventListener("click", function () {
    if (clickCount >= crispCost && clickCountElement != null) {
        clickCount -= crispCost;
        checkBuyables();
        clickCountElement.textContent = clickCount.toFixed(1);
        crispButton.style.display = "none";
        bunRate *= 2;
    }
});
setInterval(function () {
    if (clickCountElement != null) {
        clickCount += passiveClicks / 10;
        clickCountElement.textContent = clickCount.toFixed(1);
        checkBuyables();
        save();
    }
}, 100);
load();
