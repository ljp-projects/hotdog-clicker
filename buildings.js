"use strict";
var grill = new Audio("designed-fire-winds-swoosh-04-116788.mp3");
var bun = new Audio("crunch-crispy-breadbun-41340.mp3");
var dad = new Audio("dad-says-yummy-113126.mp3");
var farm = new Audio("zapsplat_impacts_hit_loose_ground_dirt_impact_collapse_fall_013_102682.mp3");
var factory = new Audio("some-kind-of-machine-103152.mp3");
var bank = new Audio("cash-register-purchase-87313.mp3");
var ambience = new Audio("./Hotdog-Clicker-Ambience.m4a");
ambience.loop = true;
ambience.play();
var bunClicked = "https://kotlinc.github.io/hotdog-clicker/Hotdog-Button-Clicked.svg";
var bunUnclicked = "https://kotlinc.github.io/hotdog-clicker/Hotdog-Button-Unclicked.svg";
var dadClicked = "https://kotlinc.github.io/hotdog-clicker/Dad-Button-Clicked.svg";
var dadUnclicked = "https://kotlinc.github.io/hotdog-clicker/Dad-Button-Unclicked.svg";
var grillClicked = "https://kotlinc.github.io/hotdog-clicker/Grill-Button-Clicked.svg";
var grillUnclicked = "https://kotlinc.github.io/hotdog-clicker/Grill-Button-Unclicked.svg";
var farmClicked = "https://kotlinc.github.io/hotdog-clicker/Farm-Button-Clicked.svg";
var farmUnclicked = "https://kotlinc.github.io/hotdog-clicker/Farm-Button-Unclicked.svg";
var facClicked = "https://kotlinc.github.io/hotdog-clicker/Factory-Button-Clicked.svg";
var facUnclicked = "https://kotlinc.github.io/hotdog-clicker/Factory-Button-Unclicked.svg";
var bankClicked = "https://kotlinc.github.io/hotdog-clicker/Bank-Button-Clicked.svg";
var bankUnclicked = "https://kotlinc.github.io/hotdog-clicker/Bank-Button-Unclicked.svg";
let passiveClicks = 0;
let clickCount = 0;
let bunCount = 0;
let dadCount = 0;
let grillCount = 0;
let dogFarmCount = 0;
let facCount = 0;
let bankCount = 0;
let bunCost = 10;
let bunRate = 0.2;
let dadCost = 100;
let dadRate = 2;
let grillCost = 500;
let grillRate = 10;
let dogFarmCost = 5000;
let dogFarmRate = 50;
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
const dogFarmCountElement = document.getElementById("dogFarmCount");
const facCountElement = document.getElementById("dogFacCount");
const bankCountElement = document.getElementById("dogBankCount");
const hotdogButton = document.getElementById("hotdogButton");
const bunButton = document.getElementById("bunButton");
const dadButton = document.getElementById("dadButton");
const grillButton = document.getElementById("grillButton");
const dogFarmButton = document.getElementById("dogFarmButton");
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
hotdogButton === null || hotdogButton === void 0 ? void 0 : hotdogButton.addEventListener("click", function () {
    if (clickCountElement != null) {
        clickCount++;
        clickCountElement.textContent = clickCount.toFixed(1);
    }
    else {
        console.log("Could not find clickCountElement");
    }
});
bunImage === null || bunImage === void 0 ? void 0 : bunImage.addEventListener("mousedown", () => {
    bunImage.src = bunClicked;
});
bunImage === null || bunImage === void 0 ? void 0 : bunImage.addEventListener("mouseup", () => {
    bunImage.src = bunUnclicked;
});
dadImage === null || dadImage === void 0 ? void 0 : dadImage.addEventListener("mousedown", () => {
    dadImage.src = dadClicked;
});
dadImage === null || dadImage === void 0 ? void 0 : dadImage.addEventListener("mouseup", () => {
    dadImage.src = dadUnclicked;
});
grillImage === null || grillImage === void 0 ? void 0 : grillImage.addEventListener("mousedown", () => {
    grillImage.src = grillClicked;
});
grillImage === null || grillImage === void 0 ? void 0 : grillImage.addEventListener("mouseup", () => {
    grillImage.src = grillUnclicked;
});
farmImage === null || farmImage === void 0 ? void 0 : farmImage.addEventListener("mousedown", () => {
    farmImage.src = farmClicked;
});
farmImage === null || farmImage === void 0 ? void 0 : farmImage.addEventListener("mouseup", () => {
    farmImage.src = farmUnclicked;
});
facImage === null || facImage === void 0 ? void 0 : facImage.addEventListener("mousedown", () => {
    facImage.src = facClicked;
});
facImage === null || facImage === void 0 ? void 0 : facImage.addEventListener("mouseup", () => {
    facImage.src = facUnclicked;
});
bankImage === null || bankImage === void 0 ? void 0 : bankImage.addEventListener("mousedown", () => {
    bankImage.src = bankClicked;
});
bankImage === null || bankImage === void 0 ? void 0 : bankImage.addEventListener("mouseup", () => {
    bankImage.src = bankUnclicked;
});
bunButton === null || bunButton === void 0 ? void 0 : bunButton.addEventListener("click", function () {
    if (clickCount >= bunCost && bunPriceElement != null && clickCountElement != null && bunCountElement != null && passiveClicksElement != null) {
        clickCount -= bunCost;
        bunCost *= increment;
        bunPriceElement.textContent = String(bunCost);
        clickCountElement.textContent = String(clickCount);
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
        dadPriceElement.textContent = String(dadCost);
        clickCountElement.textContent = String(clickCount);
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
        grillPriceElement.textContent = String(grillCost);
        clickCountElement.textContent = String(clickCount);
        grillCount++;
        grillCountElement.textContent = String(grillCount);
        passiveClicks += grillRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        grill === null || grill === void 0 ? void 0 : grill.play();
    }
});
dogFarmButton === null || dogFarmButton === void 0 ? void 0 : dogFarmButton.addEventListener("click", function () {
    if (clickCount >= dogFarmCost && farmPriceElement != null && clickCountElement != null && dogFarmCountElement != null && passiveClicksElement != null) {
        clickCount -= dogFarmCost;
        dogFarmCost *= increment;
        farmPriceElement.textContent = String(dogFarmCost);
        clickCountElement.textContent = String(clickCount);
        dogFarmCount++;
        dogFarmCountElement.textContent = String(dogFarmCount);
        passiveClicks += dogFarmRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        farm === null || farm === void 0 ? void 0 : farm.play();
    }
});
facButton === null || facButton === void 0 ? void 0 : facButton.addEventListener("click", function () {
    if (clickCount >= facCost && facPriceElement != null && clickCountElement != null && facCountElement != null && passiveClicksElement != null) {
        clickCount -= facCost;
        facCost *= increment;
        facPriceElement.textContent = String(facCost);
        clickCountElement.textContent = String(clickCount);
        facCount++;
        facCountElement.textContent = String(facCount);
        passiveClicks += facRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        factory === null || factory === void 0 ? void 0 : factory.play();
    }
});
bankButton === null || bankButton === void 0 ? void 0 : bankButton.addEventListener("click", function () {
    if (clickCount >= bankCost && bankPriceElement != null && clickCountElement != null && bankCountElement != null && passiveClicksElement != null) {
        clickCount -= bankCost;
        bankCost *= increment;
        bankPriceElement.textContent = String(bankCost);
        clickCountElement.textContent = String(clickCount);
        bankCount++;
        bankCountElement.textContent = String(bankCount);
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
        clickCountElement.textContent = clickCount.toFixed(1);
        tSauceButton.style.display = "none";
        passiveClicks += 25;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});
mustardButton === null || mustardButton === void 0 ? void 0 : mustardButton.addEventListener("click", function () {
    if (clickCount >= mustardCost && clickCountElement != null && passiveClicksElement != null) {
        clickCount -= mustardCost;
        clickCountElement.textContent = clickCount.toFixed(1);
        mustardButton.style.display = "none";
        passiveClicks += 50;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});
crispButton === null || crispButton === void 0 ? void 0 : crispButton.addEventListener("click", function () {
    if (clickCount >= crispCost && clickCountElement != null) {
        clickCount -= crispCost;
        clickCountElement.textContent = clickCount.toFixed(1);
        crispButton.style.display = "none";
        bunRate *= 2;
    }
});
setInterval(function () {
    if (clickCountElement != null) {
        clickCount += passiveClicks;
        clickCountElement.textContent = clickCount.toFixed(1);
    }
}, 1000);
