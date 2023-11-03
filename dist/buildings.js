"use strict";
var formatter = new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 });
var bunBuyable = "./Can-Buy-Bun-Button.svg";
var bunUnBuyable = "./Cant-Buy-Bun-Button.svg";
var dadBuyable = "./Can-Buy-Dad-Button.svg";
var dadUnBuyable = "./Cant-Buy-Dad-Button.svg";
var grillBuyable = "./Can-Buy-Grill-Button.svg";
var grillUnBuyable = "./Cant-Buy-Grill-Button.svg";
var farmBuyable = "./Can-Buy-Farm-Button.svg";
var farmUnBuyable = "./Cant-Buy-Farm-Button.svg";
var facBuyable = "./Can-Buy-Fac-Button.svg";
var facUnBuyable = "./Cant-Buy-Fac-Button.svg";
var bankBuyable = "./Can-Buy-Bank-Button.svg";
var bankUnBuyable = "./Cant-Buy-Bank-Button.svg";
var freezerBuyable = './Can-Buy-Freezer-Button.svg';
var freezerUnBuyable = './Cant-Buy-Freezer-Button.svg';
var passiveClicks = 0;
var clickCount = 0;
var bunCount = 0;
var dadCount = 0;
var grillCount = 0;
var farmCount = 0;
var facCount = 0;
var bankCount = 0;
var freezerCount = 0;
var bunCost = 10;
var bunRate = 0.2;
var dadCost = 100;
var dadRate = 2;
var grillCost = 500;
var grillRate = 10;
var farmCost = 5000;
var farmRate = 50;
var facCost = 50000;
var facRate = 500;
var bankCost = 250000;
var bankRate = 2500;
var freezerCost = 1000000;
var freezerRate = 15000;
var increment = 1.3;
var passiveClicksElement = document.getElementById("passive");
var clickCountElement = document.getElementById("clickCount");
var grillCountElement = document.getElementById("grillCount");
var bunCountElement = document.getElementById("bunCount");
var dadCountElement = document.getElementById("dadCount");
var farmCountElement = document.getElementById("farmCount");
var facCountElement = document.getElementById("dogFacCount");
var bankCountElement = document.getElementById("dogBankCount");
var freezerCountElement = document.getElementById("freezerCount");
var hotdogButton = document.getElementById("hotdogButton");
var bunButton = document.getElementById("bunButton");
var dadButton = document.getElementById("dadButton");
var grillButton = document.getElementById("grillButton");
var farmButton = document.getElementById("farmButton");
var facButton = document.getElementById("dogFacButton");
var bankButton = document.getElementById("dogBankButton");
var freezerButton = document.getElementById("freezerButton");
var bunPriceElement = document.getElementById("bunPrice");
var dadPriceElement = document.getElementById("dadPrice");
var grillPriceElement = document.getElementById("grillPrice");
var farmPriceElement = document.getElementById("farmPrice");
var facPriceElement = document.getElementById("facPrice");
var bankPriceElement = document.getElementById("bankPrice");
var freezerPriceElement = document.getElementById("freezerPrice");
var bunImage = document.getElementById("bunImg");
var dadImage = document.getElementById("dadImg");
var grillImage = document.getElementById("grillImg");
var farmImage = document.getElementById("farmImg");
var facImage = document.getElementById("facImg");
var bankImage = document.getElementById("bankImg");
var freezerImage = document.getElementById("freezerImg");
var update = function () {
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
var save = function () {
    var set = function (key, value) {
        localStorage.setItem(key, value);
    };
    set('hotdogs', "".concat(clickCount.toFixed(2)));
    set('hotdogs-sec', "".concat(passiveClicks.toFixed(2)));
    set('bun', "".concat(bunCount.toFixed(2), ",").concat(bunRate.toFixed(2), ",").concat(bunCost.toFixed(2)));
    set('dad', "".concat(dadCount.toFixed(2), ",").concat(dadRate.toFixed(2), ",").concat(dadCost.toFixed(2)));
    set('grill', "".concat(grillCount.toFixed(2), ",").concat(grillRate.toFixed(2), ",").concat(grillCost.toFixed(2)));
    set('farm', "".concat(farmCount.toFixed(2), ",").concat(farmRate.toFixed(2), ",").concat(farmCost.toFixed(2)));
    set('factory', "".concat(facCount.toFixed(2), ",").concat(facRate.toFixed(2), ",").concat(facCost.toFixed(2)));
    set('bank', "".concat(bankCount.toFixed(2), ",").concat(bankRate.toFixed(2), ",").concat(bankCost.toFixed(2)));
    set('freezer', "".concat(freezerCount.toFixed(2), ",").concat(freezerRate.toFixed(2), ",").concat(freezerCost.toFixed(2)));
};
var load = function () {
    var get = function (key) {
        return localStorage.getItem(key) || "";
    };
    clickCount = Number(get('hotdogs')) || 0;
    passiveClicks = Number(get('hotdogs-sec')) || 0;
    var bunInfo = get('bun').split(',');
    var dadInfo = get('dad').split(',');
    var grillInfo = get('grill').split(',');
    var farmInfo = get('farm').split(',');
    var facInfo = get('factory').split(',');
    var bankInfo = get('bank').split(',');
    var freezerInfo = get('freezer').split(',');
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
var checkBuyables = function () {
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
        bunCost *= increment;
        bunCount++;
        passiveClicks += bunRate;
        update();
    }
});
dadButton === null || dadButton === void 0 ? void 0 : dadButton.addEventListener("click", function () {
    if (clickCount >= dadCost && dadPriceElement != null && clickCountElement != null && dadCountElement != null && passiveClicksElement != null) {
        clickCount -= dadCost;
        dadCost *= increment;
        dadCount++;
        passiveClicks += dadRate;
        update();
    }
});
grillButton === null || grillButton === void 0 ? void 0 : grillButton.addEventListener("click", function () {
    if (clickCount >= grillCost && grillPriceElement != null && clickCountElement != null && grillCountElement != null && passiveClicksElement != null) {
        clickCount -= grillCost;
        grillCost *= increment;
        grillCount++;
        passiveClicks += grillRate;
        update();
    }
});
farmButton === null || farmButton === void 0 ? void 0 : farmButton.addEventListener("click", function () {
    if (clickCount >= farmCost && farmPriceElement != null && clickCountElement != null && farmCountElement != null && passiveClicksElement != null) {
        clickCount -= farmCost;
        farmCost *= increment;
        farmCount++;
        passiveClicks += farmRate;
        update();
    }
});
facButton === null || facButton === void 0 ? void 0 : facButton.addEventListener("click", function () {
    if (clickCount >= facCost && facPriceElement != null && clickCountElement != null && facCountElement != null && passiveClicksElement != null) {
        clickCount -= facCost;
        facCost *= increment;
        facCount++;
        passiveClicks += facRate;
        update();
    }
});
bankButton === null || bankButton === void 0 ? void 0 : bankButton.addEventListener("click", function () {
    if (clickCount >= bankCost && bankPriceElement != null && clickCountElement != null && bankCountElement != null && passiveClicksElement != null) {
        clickCount -= bankCost;
        bankCost *= increment;
        bankCount++;
        passiveClicks += bankRate;
        update();
    }
});
freezerButton === null || freezerButton === void 0 ? void 0 : freezerButton.addEventListener("click", function () {
    if (clickCount >= freezerCost && freezerPriceElement != null && freezerCountElement != null && clickCountElement != null && passiveClicksElement != null) {
        clickCount -= freezerCost;
        freezerCost *= increment;
        freezerCount++;
        passiveClicks += freezerRate;
        update();
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
setInterval(function () {
    if (clickCountElement != null) {
        clickCount += passiveClicks / 10;
        update();
        save();
    }
}, 100);
load();
window.oncontextmenu = function () {
    return false;
};
