import { Component } from "@angular/core";

@Component({
  selector: "body",
  templateUrl: `./app.component.html`,
  styleUrls: ['../css/main.css', '../css/input-elements.css']
})
export class AppComponent {
  showSecret = false;
  textContent = "Show";
  height = "0";
  border = "none";

  constructor() {}

  toggle() {
    this.showSecret = !this.showSecret;
    this.updateButton();
    this.updatePharagraph();
  }

  updateButton() {
    if (this.showSecret) {
      this.textContent = "Hide";
    } else {
      this.textContent = "Show";
    }
  }

  updatePharagraph() {
    if (this.showSecret) {
      this.border = "3px solid";
      this.height = "110px";
    } else {
      this.border = "none";
      this.height = "0";
    }
  }
}
