function Activate() {
  console.log(
    "Hide It Extension = ON.\nTo remove this service Please Refresh the page."
  );
  document.body.style.opacity = "0";
  document.body.addEventListener("mouseenter", () => {
    document.body.style.opacity = "100";
  });
  document.body.addEventListener("mouseleave", () => {
    document.body.style.opacity = "0";
  });
}
chrome.runtime.onMessage.addListener(hidingHandler);

function hidingHandler(message, sender, sendResponse) {
  if (message === "activate") {
    Activate();
  }
}
