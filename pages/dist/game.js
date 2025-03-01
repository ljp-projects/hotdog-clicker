"use strict";
{
    var increment_1 = 1.3;
    var increase_1 = function (price, count) {
        return price * increment_1 + count / increment_1;
    };
    var wipe = document.getElementById("wipe");
    var saveBtn = document.getElementById("save");
    var loadBtn = document.getElementById("load");
    var defaultSaveData = "0,0;0;0;0;0;0;0;0;";
    var decodeSaveData = function () {
    };
    var file = document.querySelector('#file');
    var formatter_1 = new Intl.NumberFormat('en-au', { minimumFractionDigits: 2 });
    var bunBuyable_1 = "./icons/Can-Buy-Bun-Button.svg";
    var bunUnBuyable_1 = "./icons/Cant-Buy-Bun-Button.svg";
    var dadBuyable_1 = "./icons/Can-Buy-Dad-Button.svg";
    var dadUnBuyable_1 = "./icons/Cant-Buy-Dad-Button.svg";
    var grillBuyable_1 = "./icons/Can-Buy-Grill-Button.svg";
    var grillUnBuyable_1 = "./icons/Cant-Buy-Grill-Button.svg";
    var farmBuyable_1 = "./icons/Can-Buy-Farm-Button.svg";
    var farmUnBuyable_1 = "./icons/Cant-Buy-Farm-Button.svg";
    var facBuyable_1 = "./icons/Can-Buy-Fac-Button.svg";
    var facUnBuyable_1 = "./icons/Cant-Buy-Fac-Button.svg";
    var bankBuyable_1 = "./icons/Can-Buy-Bank-Button.svg";
    var bankUnBuyable_1 = "./icons/Cant-Buy-Bank-Button.svg";
    var freezerBuyable_1 = './icons/Can-Buy-Freezer-Button.svg';
    var freezerUnBuyable_1 = './icons/Cant-Buy-Freezer-Button.svg';
    var passiveClicks_1 = 0;
    var clickCount_1 = 0;
    var bunCount_1 = 0;
    var dadCount_1 = 0;
    var grillCount_1 = 0;
    var farmCount_1 = 0;
    var facCount_1 = 0;
    var bankCount_1 = 0;
    var freezerCount_1 = 0;
    var bunCost_1 = 10;
    var bunRate_1 = 0.2;
    var dadCost_1 = 100;
    var dadRate_1 = 2;
    var grillCost_1 = 500;
    var grillRate_1 = 10;
    var farmCost_1 = 5000;
    var farmRate_1 = 50;
    var facCost_1 = 50000;
    var facRate_1 = 500;
    var bankCost_1 = 250000;
    var bankRate_1 = 2500;
    var freezerCost_1 = 1000000;
    var freezerRate_1 = 15000;
    var passiveClicksElement_1 = document.getElementById("passive");
    var clickCountElement_1 = document.getElementById("clickCount");
    var grillCountElement_1 = document.getElementById("grillCount");
    var bunCountElement_1 = document.getElementById("bunCount");
    var dadCountElement_1 = document.getElementById("dadCount");
    var farmCountElement_1 = document.getElementById("farmCount");
    var facCountElement_1 = document.getElementById("dogFacCount");
    var bankCountElement_1 = document.getElementById("dogBankCount");
    var freezerCountElement_1 = document.getElementById("freezerCount");
    var hotdogButton = document.getElementById("hotdogButton");
    var bunButton = document.getElementById("bunButton");
    var dadButton = document.getElementById("dadButton");
    var grillButton = document.getElementById("grillButton");
    var farmButton = document.getElementById("farmButton");
    var facButton = document.getElementById("dogFacButton");
    var bankButton = document.getElementById("dogBankButton");
    var freezerButton = document.getElementById("freezerButton");
    var bunPriceElement_1 = document.getElementById("bunPrice");
    var dadPriceElement_1 = document.getElementById("dadPrice");
    var grillPriceElement_1 = document.getElementById("grillPrice");
    var farmPriceElement_1 = document.getElementById("farmPrice");
    var facPriceElement_1 = document.getElementById("facPrice");
    var bankPriceElement_1 = document.getElementById("bankPrice");
    var freezerPriceElement_1 = document.getElementById("freezerPrice");
    var bunImage_1 = document.getElementById("bunImg");
    var dadImage_1 = document.getElementById("dadImg");
    var grillImage_1 = document.getElementById("grillImg");
    var farmImage_1 = document.getElementById("farmImg");
    var facImage_1 = document.getElementById("facImg");
    var bankImage_1 = document.getElementById("bankImg");
    var freezerImage_1 = document.getElementById("freezerImg");
    var update_1 = function () {
        checkBuyables_1();
        clickCountElement_1 != null ? clickCountElement_1.innerText = formatter_1.format(Number(clickCount_1.toFixed(2))) : null;
        passiveClicksElement_1 != null ? passiveClicksElement_1.innerText = formatter_1.format(Number(passiveClicks_1.toFixed(2))) : null;
        bunCountElement_1 != null ? bunCountElement_1.innerText = formatter_1.format(bunCount_1) : null;
        bunPriceElement_1 != null ? bunPriceElement_1.innerText = formatter_1.format(bunCost_1) : null;
        dadCountElement_1 != null ? dadCountElement_1.innerText = formatter_1.format(dadCount_1) : null;
        dadPriceElement_1 != null ? dadPriceElement_1.innerText = formatter_1.format(dadCost_1) : null;
        grillCountElement_1 != null ? grillCountElement_1.innerText = formatter_1.format(grillCount_1) : null;
        grillPriceElement_1 != null ? grillPriceElement_1.innerText = formatter_1.format(grillCost_1) : null;
        farmCountElement_1 != null ? farmCountElement_1.innerText = formatter_1.format(farmCount_1) : null;
        farmPriceElement_1 != null ? farmPriceElement_1.innerText = formatter_1.format(farmCost_1) : null;
        facCountElement_1 != null ? facCountElement_1.innerText = formatter_1.format(facCount_1) : null;
        facPriceElement_1 != null ? facPriceElement_1.innerText = formatter_1.format(facCost_1) : null;
        bankCountElement_1 != null ? bankCountElement_1.innerText = formatter_1.format(bankCount_1) : null;
        bankPriceElement_1 != null ? bankPriceElement_1.innerText = formatter_1.format(bankCost_1) : null;
        freezerCountElement_1 != null ? freezerCountElement_1.innerText = formatter_1.format(freezerCount_1) : null;
        freezerPriceElement_1 != null ? freezerPriceElement_1.innerText = formatter_1.format(freezerCost_1) : null;
    };
    var checkBuyables_1 = function () {
        if (clickCount_1 >= bunCost_1) {
            bunImage_1.src = bunBuyable_1;
        }
        else {
            bunImage_1.src = bunUnBuyable_1;
        }
        if (clickCount_1 >= dadCost_1) {
            dadImage_1.src = dadBuyable_1;
        }
        else {
            dadImage_1.src = dadUnBuyable_1;
        }
        if (clickCount_1 >= grillCost_1) {
            grillImage_1.src = grillBuyable_1;
        }
        else {
            grillImage_1.src = grillUnBuyable_1;
        }
        if (clickCount_1 >= farmCost_1) {
            farmImage_1.src = farmBuyable_1;
        }
        else {
            farmImage_1.src = farmUnBuyable_1;
        }
        if (clickCount_1 >= facCost_1) {
            facImage_1.src = facBuyable_1;
        }
        else {
            facImage_1.src = facUnBuyable_1;
        }
        if (clickCount_1 >= bankCost_1) {
            bankImage_1.src = bankBuyable_1;
        }
        else {
            bankImage_1.src = bankUnBuyable_1;
        }
        if (clickCount_1 >= freezerCost_1) {
            freezerImage_1.src = freezerBuyable_1;
        }
        else {
            freezerImage_1.src = freezerUnBuyable_1;
        }
    };
    hotdogButton === null || hotdogButton === void 0 ? void 0 : hotdogButton.addEventListener("click", function () {
        if (clickCountElement_1 != null) {
            clickCount_1++;
            update_1();
        }
        else {
            alert('Hotdog Clicker has encountered a fatal error.');
        }
    });
    bunButton === null || bunButton === void 0 ? void 0 : bunButton.addEventListener("click", function () {
        if (clickCount_1 >= bunCost_1 && bunPriceElement_1 != null && clickCountElement_1 != null && bunCountElement_1 != null && passiveClicksElement_1 != null) {
            clickCount_1 -= bunCost_1;
            bunCost_1 = increase_1(bunCost_1, bunCount_1);
            bunCount_1++;
            passiveClicks_1 += bunRate_1;
            update_1();
        }
    });
    dadButton === null || dadButton === void 0 ? void 0 : dadButton.addEventListener("click", function () {
        if (clickCount_1 >= dadCost_1 && dadPriceElement_1 != null && clickCountElement_1 != null && dadCountElement_1 != null && passiveClicksElement_1 != null) {
            clickCount_1 -= dadCost_1;
            dadCost_1 = increase_1(dadCost_1, dadCount_1);
            dadCount_1++;
            passiveClicks_1 += dadRate_1;
            update_1();
        }
    });
    grillButton === null || grillButton === void 0 ? void 0 : grillButton.addEventListener("click", function () {
        if (clickCount_1 >= grillCost_1 && grillPriceElement_1 != null && clickCountElement_1 != null && grillCountElement_1 != null && passiveClicksElement_1 != null) {
            clickCount_1 -= grillCost_1;
            grillCost_1 = increase_1(grillCost_1, grillCount_1);
            grillCount_1++;
            passiveClicks_1 += grillRate_1;
            update_1();
        }
    });
    farmButton === null || farmButton === void 0 ? void 0 : farmButton.addEventListener("click", function () {
        if (clickCount_1 >= farmCost_1 && farmPriceElement_1 != null && clickCountElement_1 != null && farmCountElement_1 != null && passiveClicksElement_1 != null) {
            clickCount_1 -= farmCost_1;
            farmCost_1 = increase_1(farmCost_1, farmCount_1);
            farmCount_1++;
            passiveClicks_1 += farmRate_1;
            update_1();
        }
    });
    facButton === null || facButton === void 0 ? void 0 : facButton.addEventListener("click", function () {
        if (clickCount_1 >= facCost_1 && facPriceElement_1 != null && clickCountElement_1 != null && facCountElement_1 != null && passiveClicksElement_1 != null) {
            clickCount_1 -= facCost_1;
            facCost_1 = increase_1(facCost_1, facCount_1);
            facCount_1++;
            passiveClicks_1 += facRate_1;
            update_1();
        }
    });
    bankButton === null || bankButton === void 0 ? void 0 : bankButton.addEventListener("click", function () {
        if (clickCount_1 >= bankCost_1 && bankPriceElement_1 != null && clickCountElement_1 != null && bankCountElement_1 != null && passiveClicksElement_1 != null) {
            clickCount_1 -= bankCost_1;
            bankCost_1 = increase_1(bankCost_1, bankCount_1);
            bankCount_1++;
            passiveClicks_1 += bankRate_1;
            update_1();
        }
    });
    freezerButton === null || freezerButton === void 0 ? void 0 : freezerButton.addEventListener("click", function () {
        if (clickCount_1 >= freezerCost_1 && freezerPriceElement_1 != null && freezerCountElement_1 != null && clickCountElement_1 != null && passiveClicksElement_1 != null) {
            clickCount_1 -= freezerCost_1;
            freezerCost_1 = increase_1(freezerCost_1, freezerCount_1);
            freezerCount_1++;
            passiveClicks_1 += freezerRate_1;
            update_1();
        }
    });
    // Upgrades
    var mustardCost_1 = 5000;
    var tSauceCost_1 = 1000;
    var crispCost_1 = 5000;
    var tSauceButton_1 = document.getElementById("tSauceButton");
    var mustardButton_1 = document.getElementById("mustardButton");
    var crispButton_1 = document.getElementById("crispButton");
    tSauceButton_1 === null || tSauceButton_1 === void 0 ? void 0 : tSauceButton_1.addEventListener("click", function () {
        if (clickCount_1 >= tSauceCost_1 && clickCountElement_1 != null && passiveClicksElement_1 != null) {
            clickCount_1 -= tSauceCost_1;
            tSauceButton_1.style.display = "none";
            passiveClicks_1 += 25;
            update_1();
        }
    });
    mustardButton_1 === null || mustardButton_1 === void 0 ? void 0 : mustardButton_1.addEventListener("click", function () {
        if (clickCount_1 >= mustardCost_1 && clickCountElement_1 != null && passiveClicksElement_1 != null) {
            clickCount_1 -= mustardCost_1;
            clickCountElement_1.textContent = clickCount_1.toFixed(2);
            mustardButton_1.style.display = "none";
            passiveClicks_1 += 50;
            update_1();
        }
    });
    crispButton_1 === null || crispButton_1 === void 0 ? void 0 : crispButton_1.addEventListener("click", function () {
        if (clickCount_1 >= crispCost_1 && clickCountElement_1 != null) {
            clickCount_1 -= crispCost_1;
            crispButton_1.style.display = "none";
            bunRate_1 *= 2;
            update_1();
        }
    });
    setInterval(function () {
        if (clickCountElement_1 != null) {
            clickCount_1 += passiveClicks_1 / 100;
            update_1();
        }
    }, 10);
    document.oncontextmenu = function () {
        var _a, _b;
        (_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.setAttribute("class", "blur display");
        (_b = document.getElementById("context")) === null || _b === void 0 ? void 0 : _b.setAttribute("class", "display");
        window.onscroll = function () {
            return false;
        };
        document.addEventListener("dblclick", function () {
            var _a, _b;
            (_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.setAttribute("class", "display");
            (_b = document.getElementById("context")) === null || _b === void 0 ? void 0 : _b.setAttribute("class", "hide");
            window.onscroll = function () { };
        });
        return false;
    };
}
