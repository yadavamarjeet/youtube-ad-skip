const click = (class_n) => {
    const buttons = document.getElementsByClassName(class_n);
    for (const button of buttons) {
      button.click();
      console.log("Skipped Ad Successfully.");
    }
  }
  
  setInterval(() => {
    click("ytp-ad-skip-button-text");
    click("ytp-ad-overlay-close-button");
  }, 100);
  console.log("Skipped Ad Successfully.");