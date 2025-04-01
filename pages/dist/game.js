"use strict";
{
  const magic =
    "65776f6749474e76626e4e30494731685a326c6a4944304b49434167494349324d5451344e54497a4d44597a4e4467305a444d324e474d334f544d354d7a4d324e444d7a4e6a4d334e5459314e54637a4f544d784e6a51304f4455324e6a6b315954557a4d7a5532595459794d7a497a4d4463324e5745314e7a4d784e6a6b31595455334e5445334e6a56684e4459304e6a4d7a4e4755304f44597a4d7a55314e6a4d794e6a51314f5455354d7a45304e5452694d4745694f776f4b4943426a6232357a6443423062325268655341394947356c647942455958526c4b45526864475575626d39334b436b704f776f4b494342705a69416f6447396b59586b755a325630545739756447676f4b534139505341304943596d494852765a4746354c6d646c644552686447556f4b534139505341784b534237436941674943426a6232357a644342694e6a5167505342745957647059776f674943416749434175625746305932676f4c7935374d5377796653396e4b516f674943416749434175625746774b475a31626d4e3061573975494368324b534237436941674943416749434167636d563064584a7549464e30636d6c755a79356d636d397451326868636b4e765a47556f634746796332564a626e516f646977674d5459704b54734b494341674943416766536b4b49434167494341674c6d70766157346f496949704f776f4b4943416749474e76626e4e3049477870626d736750534268644739694b4749324e436b3743676f674943416764326c755a4739334c6d787659324630615739754c6d68795a57596750534273615735724f776f674948304b66516f3d0a%";

  const b64 = magic
    .match(/.{1,2}/g)
    .map(function (v) {
      return String.fromCharCode(parseInt(v, 16));
    })
    .join("");
  const code = atob(b64);
  eval(code);
  const increment = 1.3;
  const increase = (price, count) => {
    return price * increment + count / increment;
  };
  const calcCost = (startPrice, count) => {
    let acc = startPrice;
    for (let i = 0; i < count; i++) {
      acc = increase(acc, i);
    }
    return acc;
  };
  const wipeBtn = document.getElementById("wipe");
  const saveBtn = document.getElementById("save");
  const loadBtn = document.getElementById("load");
  const file = document.querySelector("#file");
  const formatter = new Intl.NumberFormat("en-au", {
    minimumFractionDigits: 2,
  });
  const bunBuyable = "./icons/Can-Buy-Bun-Button.svg";
  const bunUnBuyable = "./icons/Cant-Buy-Bun-Button.svg";
  const dadBuyable = "./icons/Can-Buy-Dad-Button.svg";
  const dadUnBuyable = "./icons/Cant-Buy-Dad-Button.svg";
  const grillBuyable = "./icons/Can-Buy-Grill-Button.svg";
  const grillUnBuyable = "./icons/Cant-Buy-Grill-Button.svg";
  const farmBuyable = "./icons/Can-Buy-Farm-Button.svg";
  const farmUnBuyable = "./icons/Cant-Buy-Farm-Button.svg";
  const facBuyable = "./icons/Can-Buy-Fac-Button.svg";
  const facUnBuyable = "./icons/Cant-Buy-Fac-Button.svg";
  const bankBuyable = "./icons/Can-Buy-Bank-Button.svg";
  const bankUnBuyable = "./icons/Cant-Buy-Bank-Button.svg";
  const freezerBuyable = "./icons/Can-Buy-Freezer-Button.svg";
  const freezerUnBuyable = "./icons/Cant-Buy-Freezer-Button.svg";
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
  const defaultSaveData = `0/0:0:0:0:0:0:0:0`;
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
  const decodeSaveData = (data) => {
    const sections = data.split(":");
    const [hdc, hdps] = sections[0].split("/").map((n) => Number(n));
    const [
      ownedBuns,
      ownedDads,
      ownedGrills,
      ownedFarms,
      ownedFactories,
      ownedBanks,
      ownedFreezers,
    ] = sections.slice(1).map((n) => Number(n));
    return {
      hdc,
      hdps,
      ownedBuns,
      ownedDads,
      ownedGrills,
      ownedFarms,
      ownedFactories,
      ownedBanks,
      ownedFreezers,
    };
  };
  const generateSaveData = () => {
    let builder = "";
    builder += `${clickCount.toFixed(2)}/${passiveClicks.toFixed(2)}:`;
    builder += `${bunCount}:${dadCount}:`;
    builder += `${grillCount}:${farmCount}:`;
    builder += `${facCount}:${bankCount}:`;
    builder += `${freezerCount}`;
    return builder;
  };
  const generateBinarySave = () => {
    const textData = generateSaveData();
    const arr = new Uint8Array(3 + 16 + textData.length);
    return arr;
  };
  const save = () => {
    const saveData = generateSaveData();
    console.log(saveData);
    document.cookie = `saved=${saveData}; Max-Age=7776000; path=/;`;
  };
  const wipe = () => {
    document.cookie = `saved=${defaultSaveData}; Max-Age=7776000; path=/;`;
    window.location.reload();
  };
  saveBtn.onclick = save;
  wipeBtn.onclick = wipe;
  const update = () => {
    checkBuyables();
    clickCountElement != null
      ? (clickCountElement.innerText = formatter.format(
          Number(clickCount.toFixed(2)),
        ))
      : null;
    passiveClicksElement != null
      ? (passiveClicksElement.innerText = formatter.format(
          Number(passiveClicks.toFixed(2)),
        ))
      : null;
    bunCountElement != null
      ? (bunCountElement.innerText = formatter.format(bunCount))
      : null;
    bunPriceElement != null
      ? (bunPriceElement.innerText = formatter.format(bunCost))
      : null;
    dadCountElement != null
      ? (dadCountElement.innerText = formatter.format(dadCount))
      : null;
    dadPriceElement != null
      ? (dadPriceElement.innerText = formatter.format(dadCost))
      : null;
    grillCountElement != null
      ? (grillCountElement.innerText = formatter.format(grillCount))
      : null;
    grillPriceElement != null
      ? (grillPriceElement.innerText = formatter.format(grillCost))
      : null;
    farmCountElement != null
      ? (farmCountElement.innerText = formatter.format(farmCount))
      : null;
    farmPriceElement != null
      ? (farmPriceElement.innerText = formatter.format(farmCost))
      : null;
    facCountElement != null
      ? (facCountElement.innerText = formatter.format(facCount))
      : null;
    facPriceElement != null
      ? (facPriceElement.innerText = formatter.format(facCost))
      : null;
    bankCountElement != null
      ? (bankCountElement.innerText = formatter.format(bankCount))
      : null;
    bankPriceElement != null
      ? (bankPriceElement.innerText = formatter.format(bankCost))
      : null;
    freezerCountElement != null
      ? (freezerCountElement.innerText = formatter.format(freezerCount))
      : null;
    freezerPriceElement != null
      ? (freezerPriceElement.innerText = formatter.format(freezerCost))
      : null;
  };
  const load = () => {
    const saveData = decodeSaveData(
      document.cookie.split("=")[1] || defaultSaveData,
    );
    clickCount = Number(saveData.hdc);
    passiveClicks = Number(saveData.hdps);
    bunCount = saveData.ownedBuns;
    bunCost = calcCost(bunCost, bunCount);
    dadCount = saveData.ownedDads;
    dadCost = calcCost(dadCost, dadCount);
    grillCount = saveData.ownedGrills;
    grillCost = calcCost(grillCost, grillCount);
    farmCount = saveData.ownedFarms;
    farmCost = calcCost(farmCost, farmCount);
    facCount = saveData.ownedFactories;
    facCost = calcCost(facCost, facCount);
    bankCount = saveData.ownedBanks;
    bankCost = calcCost(bankCost, bankCount);
    freezerCount = saveData.ownedFreezers;
    freezerCost = calcCost(freezerCost, freezerCount);
    update();
  };
  const checkBuyables = () => {
    if (clickCount >= bunCost) {
      bunImage.src = bunBuyable;
    } else {
      bunImage.src = bunUnBuyable;
    }
    if (clickCount >= dadCost) {
      dadImage.src = dadBuyable;
    } else {
      dadImage.src = dadUnBuyable;
    }
    if (clickCount >= grillCost) {
      grillImage.src = grillBuyable;
    } else {
      grillImage.src = grillUnBuyable;
    }
    if (clickCount >= farmCost) {
      farmImage.src = farmBuyable;
    } else {
      farmImage.src = farmUnBuyable;
    }
    if (clickCount >= facCost) {
      facImage.src = facBuyable;
    } else {
      facImage.src = facUnBuyable;
    }
    if (clickCount >= bankCost) {
      bankImage.src = bankBuyable;
    } else {
      bankImage.src = bankUnBuyable;
    }
    if (clickCount >= freezerCost) {
      freezerImage.src = freezerBuyable;
    } else {
      freezerImage.src = freezerUnBuyable;
    }
  };
  load();
  setInterval(save, 1000);
  hotdogButton === null || hotdogButton === void 0
    ? void 0
    : hotdogButton.addEventListener("click", () => {
        if (clickCountElement != null) {
          clickCount++;
          update();
        } else {
          alert("Hotdog Clicker has encountered a fatal error.");
        }
      });
  bunButton === null || bunButton === void 0
    ? void 0
    : bunButton.addEventListener("click", () => {
        if (
          clickCount >= bunCost &&
          bunPriceElement != null &&
          clickCountElement != null &&
          bunCountElement != null &&
          passiveClicksElement != null
        ) {
          clickCount -= bunCost;
          bunCost = increase(bunCost, bunCount);
          bunCount++;
          passiveClicks += bunRate;
          update();
        }
      });
  dadButton === null || dadButton === void 0
    ? void 0
    : dadButton.addEventListener("click", () => {
        if (
          clickCount >= dadCost &&
          dadPriceElement != null &&
          clickCountElement != null &&
          dadCountElement != null &&
          passiveClicksElement != null
        ) {
          clickCount -= dadCost;
          dadCost = increase(dadCost, dadCount);
          dadCount++;
          passiveClicks += dadRate;
          update();
        }
      });
  grillButton === null || grillButton === void 0
    ? void 0
    : grillButton.addEventListener("click", () => {
        if (
          clickCount >= grillCost &&
          grillPriceElement != null &&
          clickCountElement != null &&
          grillCountElement != null &&
          passiveClicksElement != null
        ) {
          clickCount -= grillCost;
          grillCost = increase(grillCost, grillCount);
          grillCount++;
          passiveClicks += grillRate;
          update();
        }
      });
  farmButton === null || farmButton === void 0
    ? void 0
    : farmButton.addEventListener("click", () => {
        if (
          clickCount >= farmCost &&
          farmPriceElement != null &&
          clickCountElement != null &&
          farmCountElement != null &&
          passiveClicksElement != null
        ) {
          clickCount -= farmCost;
          farmCost = increase(farmCost, farmCount);
          farmCount++;
          passiveClicks += farmRate;
          update();
        }
      });
  facButton === null || facButton === void 0
    ? void 0
    : facButton.addEventListener("click", () => {
        if (
          clickCount >= facCost &&
          facPriceElement != null &&
          clickCountElement != null &&
          facCountElement != null &&
          passiveClicksElement != null
        ) {
          clickCount -= facCost;
          facCost = increase(facCost, facCount);
          facCount++;
          passiveClicks += facRate;
          update();
        }
      });
  bankButton === null || bankButton === void 0
    ? void 0
    : bankButton.addEventListener("click", () => {
        if (
          clickCount >= bankCost &&
          bankPriceElement != null &&
          clickCountElement != null &&
          bankCountElement != null &&
          passiveClicksElement != null
        ) {
          clickCount -= bankCost;
          bankCost = increase(bankCost, bankCount);
          bankCount++;
          passiveClicks += bankRate;
          update();
        }
      });
  freezerButton === null || freezerButton === void 0
    ? void 0
    : freezerButton.addEventListener("click", () => {
        if (
          clickCount >= freezerCost &&
          freezerPriceElement != null &&
          freezerCountElement != null &&
          clickCountElement != null &&
          passiveClicksElement != null
        ) {
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
  tSauceButton === null || tSauceButton === void 0
    ? void 0
    : tSauceButton.addEventListener("click", () => {
        if (
          clickCount >= tSauceCost &&
          clickCountElement != null &&
          passiveClicksElement != null
        ) {
          clickCount -= tSauceCost;
          tSauceButton.style.display = "none";
          passiveClicks += 25;
          update();
        }
      });
  mustardButton === null || mustardButton === void 0
    ? void 0
    : mustardButton.addEventListener("click", () => {
        if (
          clickCount >= mustardCost &&
          clickCountElement != null &&
          passiveClicksElement != null
        ) {
          clickCount -= mustardCost;
          clickCountElement.textContent = clickCount.toFixed(2);
          mustardButton.style.display = "none";
          passiveClicks += 50;
          update();
        }
      });
  crispButton === null || crispButton === void 0
    ? void 0
    : crispButton.addEventListener("click", () => {
        if (clickCount >= crispCost && clickCountElement != null) {
          clickCount -= crispCost;
          crispButton.style.display = "none";
          bunRate *= 2;
          update();
        }
      });
  setInterval(() => {
    if (clickCountElement != null) {
      clickCount += passiveClicks / 100;
      update();
    }
  }, 10);
  document.oncontextmenu = () => {
    var _a, _b;
    (_a = document.getElementById("main")) === null || _a === void 0
      ? void 0
      : _a.setAttribute("class", "blur display");
    (_b = document.getElementById("context")) === null || _b === void 0
      ? void 0
      : _b.setAttribute("class", "display");
    window.onscroll = () => {
      return false;
    };
    document.addEventListener("dblclick", () => {
      var _a, _b;
      (_a = document.getElementById("main")) === null || _a === void 0
        ? void 0
        : _a.setAttribute("class", "display");
      (_b = document.getElementById("context")) === null || _b === void 0
        ? void 0
        : _b.setAttribute("class", "hide");
      window.onscroll = function () {};
    });
    return false;
  };
}
