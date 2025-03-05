"use strict";
// Routes the user to the mobile or desktop website based on the screen dimensions.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const heightToWidthRatio = window.innerHeight / window.innerWidth;
    const widthToHeightRatio = window.innerWidth / window.innerHeight;
    console.log(heightToWidthRatio);
    console.log(widthToHeightRatio);
    if (heightToWidthRatio < widthToHeightRatio) {
        window.location.href = "https://hdc.ljpprojects.org/desktop";
    }
    else {
        window.location.href = "https://hdc.ljpprojects.org/mobile";
    }
}))();
