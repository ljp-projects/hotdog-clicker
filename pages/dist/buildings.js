"use strict";
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
let ID = setInterval(() => {
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
