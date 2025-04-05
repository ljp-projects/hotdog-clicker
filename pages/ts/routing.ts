// Routes the user to the mobile or desktop website based on the screen dimensions.

(async () => {
  const heightToWidthRatio = window.innerHeight / window.innerWidth;
  const widthToHeightRatio = window.innerWidth / window.innerHeight;

  if (heightToWidthRatio < widthToHeightRatio) {
    window.location.href = "./desktop";
  } else {
    window.location.href = "./mobile";
  }
})();
