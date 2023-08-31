var grill = new Audio("designed-fire-winds-swoosh-04-116788.mp3")
var bun = new Audio("crunch-crispy-breadbun-41340.mp3")
var dad = new Audio("dad-says-yummy-113126.mp3")
var farm = new Audio("zapsplat_impacts_hit_loose_ground_dirt_impact_collapse_fall_013_102682.mp3")
var factory = new Audio("some-kind-of-machine-103152.mp3")
var bank = new Audio("cash-register-purchase-87313.mp3")
let passiveClicks = 0;
let clickCount = 0;
let bunCount = 0;
let dadCount = 0;
let grillCount = 0;
let dogFarmCount = 0;
let facCount = 0;
let bankCount = 0;
const bunCost = 10;
let bunRate = 0.2;
const dadCost = 100;
let dadRate = 2;
const grillCost = 500;
let grillRate = 10;
const dogFarmCost = 5000;
let dogFarmRate = 50;
const facCost = 50000;
let facRate = 500;
const bankCost = 250000;
let bankRate = 2500;
const clickCountElement = document.getElementById("clickCount");
const grillCountElement = document.getElementById("grillCount");
const passiveClicksElement = document.getElementById("passive");
const bunCountElement = document.getElementById("bunCount");
const dadCountElement = document.getElementById("dadCount");
const dogFarmCountElement = document.getElementById("dogFarmCount");
const facCountElement = document.getElementById("dogFacCount");
const bankCountElement = document.getElementById("dogBankCount")
const hotdogButton = document.getElementById("hotdogButton");
const bunButton = document.getElementById("bunButton");
const dadButton = document.getElementById("dadButton");
const grillButton = document.getElementById("grillButton");
const dogFarmButton = document.getElementById("dogFarmButton");
const facButton = document.getElementById("dogFacButton");
const bankButton = document.getElementById("dogBankButton")

const save = () => {
    window.sessionStorage.setItem("Clicks", clickCount)
    window.sessionStorage.setItem("Passive", passiveClicks)
    window.sessionStorage.setItem("Buns", bunCount)
    window.sessionStorage.setItem("Dads", dadCount)
    window.sessionStorage.setItem("Grills", grillCount)
    window.sessionStorage.setItem("Farms", dogFarmCount)
    window.sessionStorage.setItem("Factories", facCount)
    window.sessionStorage.setItem("Banks", bankCount)
}

window.addEventListener("beforeunload", () => {
    alert("Saving the game...")
    save();
});

const load = () => {
    clickCount = window.sessionStorage.getItem("Clicks")
    passiveClicks = window.sessionStorage.getItem("Passive")
    bunCount = window.sessionStorage.getItem("Buns")
    dadCount = window.sessionStorage.getItem("Dads")
    grillCount = window.sessionStorage.getItem("Grills")
    dogFarmCount = window.sessionStorage.getItem("Farms")
    facCount = window.sessionStorage.getItem("Factories")
    bankCount = window.sessionStorage.getItem("Banks")
}

load()

hotdogButton.addEventListener("click", function() {
    clickCount++;
    clickCountElement.textContent = clickCount.toFixed(1);
});

bunButton.addEventListener("click", function() {
    if (clickCount >= bunCost) {
        clickCount -= bunCost;
        clickCountElement.textContent = clickCount;
        bunCount++;
        bunCountElement.textContent = bunCount;
        passiveClicks += bunRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        setInterval(function() {
            clickCount += bunRate;
            clickCountElement.textContent = clickCount.toFixed(1);
        }, 1000);
        bun.play();
    }
});
dadButton.addEventListener("click", function() {
    if (clickCount >= dadCost) {
        clickCount -= dadCost;
        clickCountElement.textContent = clickCount;
        dadCount++;
        dadCountElement.textContent = dadCount;
        passiveClicks += dadRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        setInterval(function() {
            clickCount += dadRate;
            clickCountElement.textContent = clickCount.toFixed(1);
        }, 1000);
        dad.play();
    }
});
grillButton.addEventListener("click", function() {
    if (clickCount >= grillCost) {
        clickCount -= grillCost;
        clickCountElement.textContent = clickCount;
        grillCount++;
        grillCountElement.textContent = grillCount;
        passiveClicks += grillRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        setInterval(function() {
            clickCount += grillRate;
            clickCountElement.textContent = clickCount.toFixed(1);
        }, 1000);
        grill.play();
    }
});
dogFarmButton.addEventListener("click", function() {
    if (clickCount >= dogFarmCost) {
        clickCount -= dogFarmCost;
        clickCountElement.textContent = clickCount;
        dogFarmCount++;
        dogFarmCountElement.textContent = dogFarmCount;
        passiveClicks += dogFarmRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        setInterval(function() {
            clickCount += dogFarmRate;
            clickCountElement.textContent = clickCount.toFixed(1);
        }, 1000);
        farm.play();
    }
});
facButton.addEventListener("click", function() {
    if (clickCount >= facCost) {
        clickCount -= facCost;
        clickCountElement.textContent = clickCount;
        facCount++;
        facCountElement.textContent = facCount;
        passiveClicks += facRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        setInterval(function() {
            clickCount += facRate;
            clickCountElement.textContent = clickCount.toFixed(1);
        }, 1000);
        factory.play();
    }
});
bankButton.addEventListener("click", function() {
    if (clickCount >= bankCost) {
        clickCount -= bankCost;
        clickCountElement.textContent = clickCount;
        bankCount++;
        bankCountElement.textContent = bankCount;
        passiveClicks += bankRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        setInterval(function() {
            clickCount += bankRate;
            clickCountElement.textContent = clickCount.toFixed(1);
        }, 1000);
        bank.play();
    }
});

// Upgrades

const mustardCost = 5000;
const tSauceCost = 1000;
const crispCost = 5000;
const tSauceButton = document.getElementById("tSauceButton");
const mustardButton = document.getElementById("mustardButton");
const crispButton = document.getElementById("crispButton");

tSauceButton.addEventListener("click", function() {
    if (clickCount >= tSauceCost) {
        clickCount -= tSauceCost;
        clickCountElement.textContent = clickCount.toFixed(1);
        tSauceButton.style.display = "none";
        passiveClicks += 25;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});

mustardButton.addEventListener("click", function() {
    if (clickCount >= mustardCost) {
        clickCount -= mustardCost;
        clickCountElement.textContent = clickCount.toFixed(1);
        mustardButton.style.display = "none";
        passiveClicks += 50;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});

crispButton.addEventListener("click", function() {
    if (clickCount >= crispCost) {
        clickCount -= crispCost;
        clickCountElement.textContent = clickCount.toFixed(1);
        crispButton.style.display = "none";
        bunRate *= 2;
    }
});
