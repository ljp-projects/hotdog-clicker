"use strict";
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
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
};
const load = (file) => {
    const content = file.text().then(res => {
        const json = JSON.parse(res);
        console.log(json);
        clickCount = json.Hotdogs || 0;
        passiveClicks = json.HotdogsPerSecond || 0;
        bunCount = json.Bun.Owned || 0;
        bunRate = json.Bun.Rate || 0.2;
        bunCost = json.Bun.Price || 10;
        dadCount = json.Dad.Owned || 0;
        dadRate = json.Dad.Rate || 2;
        dadCost = json.Dad.Price || 100;
        grillCount = json.Grill.Owned || 0;
        grillRate = json.Grill.Rate || 2;
        grillCost = json.Grill.Price || 100;
        update();
    });
};
const checkBuyables = () => {
    const worker = new Worker('./dist/check.js');
    worker.postMessage([
        clickCount,
        {
            bunImage: bunImage,
            dadImage: dadImage,
            grillImage: grillImage,
            farmImage: farmImage,
            facImage: facImage,
            bankImage: bankImage,
            freezerImage: freezerImage,
        }
    ]);
    worker.terminate();
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
if (file != null && file.files != null)
    file.addEventListener('input', () => {
        var _a;
        clearInterval(ID);
        load((_a = file === null || file === void 0 ? void 0 : file.files) === null || _a === void 0 ? void 0 : _a.item(0));
        ID = setInterval(() => {
            if (clickCountElement != null) {
                clickCount += passiveClicks / 10;
                update();
            }
        }, 100);
    });
