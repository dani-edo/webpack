var showSecret = false;

secretButton.addEventListener("click", toggle);

updatePharagraph();

function toggle() {
  showSecret = !showSecret;
  updateButton();
  updatePharagraph();
}

function updateButton() {
  if (showSecret) {
    secretButton.textContent = "Hide";
  } else {
    secretButton.textContent = "Show";
  }
}

function updatePharagraph() {
  if (showSecret) {
    secretParagraph.style.border = "3px solid";
    secretParagraph.style.height = "70px";
  } else {
    secretParagraph.style.border = "none";
    secretParagraph.style.height = "0";
  }
}
