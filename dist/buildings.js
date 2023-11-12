"use strict";
const increment = 1.3;
const increase = (price, count) => {
    return price * increment + count / increment;
};
const wipe = document.getElementById("wipe");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");
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
    const save = `{"Hotdogs":${clickCount},"HotdogsPerSecond":${passiveClicks},"Bun":{"Owned":${bunCount},"Rate":${bunRate},"Price": ${bunCost}},"Dad":{"Owned":${dadCount},"Rate":${dadRate},"Price":${dadCost}},"Grill":{"Owned": ${grillCount},"Rate": ${grillRate},"Price":${grillCost}},"Farm":{"Owned":${farmCost},"Rate":${farmRate},"Price":${farmCost}},"Factory":{"Owned":${facCount},"Rate":${facRate},"Price":${facCost}},"Bank":{"Owned":${bankCount},"Rate":${bankRate},"Price":${bankCost}},"Freezer":{"Owned":${freezerCount},"Rate":${freezerRate},"Price":${freezerCost}}}`;
    const file = new File([`${save}`], "hotdog-clicker-save.json", { type: "application/json" });
    const url = window.URL.createObjectURL(file);
    const a = document.createElement("a");
    a.setAttribute("style", "display: none");
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
};
/*
* First param is price, next is count
*/
const load = () => {
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
let ID = setInterval(() => {
    if (clickCountElement != null) {
        clickCount += passiveClicks / 10;
        update();
    }
}, 100);
document.oncontextmenu = () => {
    return false;
};
if (wipe)
    wipe.onclick = () => {
        const willing = prompt("This action cannot be undone. You will lose all of your progress. Type 'wipe' to continue.");
        if (willing === "wipe") {
            clearInterval(ID);
            localStorage.clear();
            load();
            ID = setInterval(() => {
                if (clickCountElement != null) {
                    clickCount += passiveClicks / 10;
                    update();
                }
            }, 100);
        }
    };
if (saveBtn)
    saveBtn.onclick = () => {
        clearInterval(ID);
        save();
        ID = setInterval(() => {
            if (clickCountElement != null) {
                clickCount += passiveClicks / 10;
                update();
            }
        }, 100);
    };
if (loadBtn)
    loadBtn.onclick = () => {
        clearInterval(ID);
        load();
        ID = setInterval(() => {
            if (clickCountElement != null) {
                clickCount += passiveClicks / 10;
                update();
            }
        }, 100);
    };
