const click = (class_n) => {
  const buttons = document.getElementsByClassName(class_n);
  for (const button of buttons) {
    button.click();
    console.log("Skipped Ad Successfully.");
  }
};

const delete_element = (class_n) => {
  const elements = document.getElementsByClassName(class_n);
  for (const element of elements) {
    element.remove();
    console.log("Successfully deleted a element.");
  }
};

setInterval(() => {
  click("ytp-ad-skip-button-text");
  click("ytp-ad-overlay-close-button");
  delete_element("ff-sans");
}, 100);
