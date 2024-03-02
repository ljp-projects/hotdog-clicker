import * as globals from "./globals.js";
export const check = () => {
    const clickCount = globals.clickCount;
    if (clickCount >= globals.bunCost) {
        globals.bunImage.src = globals.bunBuyable;
    }
    else {
        globals.bunImage.src = globals.bunUnBuyable;
    }
    if (clickCount >= globals.dadCost) {
        globals.dadImage.src = globals.dadBuyable;
    }
    else {
        globals.dadImage.src = globals.dadUnBuyable;
    }
    if (clickCount >= globals.grillCost) {
        globals.grillImage.src = globals.grillBuyable;
    }
    else {
        globals.grillImage.src = globals.grillUnBuyable;
    }
    if (clickCount >= globals.farmCost) {
        globals.farmImage.src = globals.farmBuyable;
    }
    else {
        globals.farmImage.src = globals.farmUnBuyable;
    }
    if (clickCount >= globals.facCost) {
        globals.facImage.src = globals.facBuyable;
    }
    else {
        globals.facImage.src = globals.facUnBuyable;
    }
    if (clickCount >= globals.bankCost) {
        globals.bankImage.src = globals.bankBuyable;
    }
    else {
        globals.bankImage.src = globals.bankUnBuyable;
    }
    if (clickCount >= globals.freezerCost) {
        globals.freezerImage.src = globals.freezerBuyable;
    }
    else {
        globals.freezerImage.src = globals.freezerUnBuyable;
    }
};
