var grill = new Audio("designed-fire-winds-swoosh-04-116788.mp3");
var bun = new Audio("crunch-crispy-breadbun-41340.mp3");
var dad = new Audio("dad-says-yummy-113126.mp3");
var farm = new Audio("zapsplat_impacts_hit_loose_ground_dirt_impact_collapse_fall_013_102682.mp3");
var factory = new Audio("some-kind-of-machine-103152.mp3");
var bank = new Audio("cash-register-purchase-87313.mp3");
var ambience = new Audio("./Hotdog-Clicker-Ambience.m4a");
ambience.loop = true;
var bunBuyable = "./Can-Buy-Bun-Button.svg";
var bunUnBuyable = "./Cant-Buy-Bun-Button.svg";
var bunBuying = "./Buying-Bun-Button.svg";
var dadBuyable = "./Can-Buy-Dad-Button.svg";
var dadUnBuyable = "./Cant-Buy-Dad-Button.svg";
var dadBuying = "./Buying-Dad-Button.svg";
var grillBuyable = "./Can-Buy-Grill-Button.svg";
var grillUnBuyable = "./Cant-Buy-Grill-Button.svg";
var grillBuying = "./Buying-Grill-Button.svg";
var farmBuyable = "./Can-Buy-Farm-Button.svg";
var farmUnBuyable = "./Cant-Buy-Farm-Button.svg";
var farmBuying = "./Buying-Farm-Button.svg";
var facBuyable = "./Can-Buy-Fac-Button.svg";
var facUnBuyable = "./Cant-Buy-Fac-Button.svg";
var facBuying = "./Buying-Fac-Button.svg";
var bankBuyable = "./Can-Buy-Bank-Button.svg";
var bankUnBuyable = "./Cant-Buy-Bank-Button.svg";
var bankBuying = "./Buying-Bank-Button.svg";
var passiveClicks = 0;
var clickCount = 0;
var bunCount = 0;
var dadCount = 0;
var grillCount = 0;
var dogFarmCount = 0;
var facCount = 0;
var bankCount = 0;
var bunCost = 10;
var bunRate = 0.2;
var dadCost = 100;
var dadRate = 2;
var grillCost = 500;
var grillRate = 10;
var dogFarmCost = 5000;
var dogFarmRate = 50;
var facCost = 50000;
var facRate = 500;
var bankCost = 250000;
var bankRate = 2500;
var increment = 1.3;
var passiveClicksElement = document.getElementById("passive");
var clickCountElement = document.getElementById("clickCount");
var grillCountElement = document.getElementById("grillCount");
var bunCountElement = document.getElementById("bunCount");
var dadCountElement = document.getElementById("dadCount");
var dogFarmCountElement = document.getElementById("dogFarmCount");
var facCountElement = document.getElementById("dogFacCount");
var bankCountElement = document.getElementById("dogBankCount");
var hotdogButton = document.getElementById("hotdogButton");
var bunButton = document.getElementById("bunButton");
var dadButton = document.getElementById("dadButton");
var grillButton = document.getElementById("grillButton");
var dogFarmButton = document.getElementById("dogFarmButton");
var facButton = document.getElementById("dogFacButton");
var bankButton = document.getElementById("dogBankButton");
var bunPriceElement = document.getElementById("bunPrice");
var dadPriceElement = document.getElementById("dadPrice");
var grillPriceElement = document.getElementById("grillPrice");
var farmPriceElement = document.getElementById("farmPrice");
var facPriceElement = document.getElementById("facPrice");
var bankPriceElement = document.getElementById("bankPrice");
var bunImage = document.getElementById("bunImg");
var dadImage = document.getElementById("dadImg");
var grillImage = document.getElementById("grillImg");
var farmImage = document.getElementById("farmImg");
var facImage = document.getElementById("facImg");
var bankImage = document.getElementById("bankImg");
var checkBuyables = function () {
    if (clickCount >= bunCost) {
        bunImage.src = bunBuyable;
    }
    else {
        console.log("Cant buy bun; therefore, cant buy anything.");
        bunImage.src = bunUnBuyable;
        return;
    }
    if (clickCount >= dadCost) {
        dadImage.src = dadBuyable;
    }
    else {
        console.log("Cant buy dad; therefore, cant buy anything more expensive than bun.");
        dadImage.src = dadUnBuyable;
        return;
    }
    if (clickCount >= grillCost) {
        dadImage.src = grillUnBuyable;
    }
    else {
        console.log("Cant buy grill; therefore, cant buy anything more expensive than dad.");
        grillImage.src = grillUnBuyable;
        return;
    }
    if (clickCount >= dogFarmCost) {
        farmImage.src = farmBuyable;
    }
    else {
        console.log("Cant buy farm; therefore, cant buy anything more expensive than grill.");
        grillImage.src = farmUnBuyable;
        return;
    }
    if (clickCount >= facCost) {
        facImage.src = facBuyable;
    }
    else {
        console.log("Cant buy farm; therefore, cant buy anything more expensive than farm.");
        facImage.src = facUnBuyable;
        return;
    }
    if (clickCount >= bankCost) {
        bankImage.src = bankBuyable;
    }
    else {
        console.log("Cant buy bank; therefore, cant buy anything more expensive than fac.");
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
        console.log("Could not find clickCountElement");
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
dogFarmButton === null || dogFarmButton === void 0 ? void 0 : dogFarmButton.addEventListener("click", function () {
    if (clickCount >= dogFarmCost && farmPriceElement != null && clickCountElement != null && dogFarmCountElement != null && passiveClicksElement != null) {
        clickCount -= dogFarmCost;
        dogFarmCost *= increment;
        checkBuyables();
        farmImage.src = farmBuying;
        farmPriceElement.textContent = String(dogFarmCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
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
var mustardCost = 5000;
var tSauceCost = 1000;
var crispCost = 5000;
var tSauceButton = document.getElementById("tSauceButton");
var mustardButton = document.getElementById("mustardButton");
var crispButton = document.getElementById("crispButton");
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
        clickCount += passiveClicks;
        clickCountElement.textContent = clickCount.toFixed(1);
        checkBuyables();
    }
}, 1000);
