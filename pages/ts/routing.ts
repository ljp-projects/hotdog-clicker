// Routes the user to the mobile or desktop website based on the screen dimensions.

(async () => {
    const heightToWidthRatio = window.innerHeight / window.innerWidth;
    const widthToHeightRatio = window.innerWidth / window.innerHeight;

    if (widthToHeightRatio > heightToWidthRatio) {
        document.body.parentElement!!.outerHTML = await (await fetch("https://hdc.ljpprojects.org/desktop")).text();
    } else {
        document.body.parentElement!!.outerHTML = await (await fetch("https://hdc.ljpprojects.org/mobile")).text();
    }
})()
