import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ng8";
  myScriptElement;

  script = `iframe = document.querySelector(
        "iframe[data-dvc-widget='dvc-iframe']"
      );
      window.addEventListener(
        "message",
        function (e) {
          let t = e.data;
          "DVC.optIn.updateHeight" === t.type && (iframe.style.height = t.height);
        },
        !1
      );
      `;

  ngOnInit() {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.text = this.script;
    document.body.appendChild(this.myScriptElement);
    console.log(this.myScriptElement);
  }
}
