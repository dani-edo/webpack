import "../css/main.css";
import "../css/input-elements.css";
import { secretParagraph, secretButton } from "./dom-loader";

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
    secretParagraph.style.height = "110px";
  } else {
    secretParagraph.style.border = "none";
    secretParagraph.style.height = "0";
  }
}
