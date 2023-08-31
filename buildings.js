var grill = new Audio("designed-fire-winds-swoosh-04-116788.mp3")
var bun = new Audio("crunch-crispy-breadbun-41340.mp3")
var dad = new Audio("dad-says-yummy-113126.mp3")
var farm = new Audio("zapsplat_impacts_hit_loose_ground_dirt_impact_collapse_fall_013_102682.mp3")
let passiveClicks = 0;
let clickCount = 0;
let bunCount = 0;
let dadCount = 0;
let grillCount = 0;
let dogFarmCount = 0;
const bunCost = 10;
const bunRate = 0.2;
const dadCost = 100;
const dadRate = 2;
const grillCost = 500;
const grillRate = 5;
const dogFarmCost = 5000;
const dogFarmRate = 25;
const clickCountElement = document.getElementById("clickCount");
const grillCountElement = document.getElementById("grillCount");
const passiveClicksElement = document.getElementById("passive");
const bunCountElement = document.getElementById("bunCount");
const dadCountElement = document.getElementById("dadCount");
const dogFarmCountElement = document.getElementById("dogFarmCount");
const hotdogButton = document.getElementById("hotdogButton");
const bunButton = document.getElementById("bunButton");
const dadButton = document.getElementById("dadButton");
const grillButton = document.getElementById("grillButton");
const dogFarmButton = document.getElementById("dogFarmButton");

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
        grillCountElement.textContent = clickCount;
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
        grillCountElement.textContent = dogFarmCount;
        dogFarmCount++;
        grillCountElement.textContent = dogFarmCount;
        passiveClicks += dogFarmRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        setInterval(function() {
            clickCount += dogFarmRate;
            clickCountElement.textContent = clickCount.toFixed(1);
        }, 1000);
        farm.play();
    }
});

// Upgrades

const mustardCost = 5000;
const tSauceCost = 1000;
const tSauceButton = document.getElementById("tSauceButton");
const mustardButton = document.getElementById("mustardButton");

tSauceButton.addEventListener("click", function() {
    if (clickCount >= tSauceCost) {
        clickCount -= tSauceCost;
        grillCountElement.textContent = clickCount;
        tSauceButton.style.display = "none";
        passiveClicks += 30;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});

mustardButton.addEventListener("click", function() {
    if (clickCount >= mustardCost) {
        clickCount -= mustardCost;
        grillCountElement.textContent = clickCount;
        mustardButton.style.display = "none";
        passiveClicks += 200;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});
