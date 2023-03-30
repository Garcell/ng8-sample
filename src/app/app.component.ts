import { Component } from '@angular/core';
import { initialize } from '@devcycle/devcycle-js-sdk';

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
      dvcClient = initialize('client-ed2daf14-82d5-47f6-8a73-a5c298546efa', { user_id: '123' });

  ngOnInit() {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.text = this.script;
    document.body.appendChild(this.myScriptElement);
    console.log(this.myScriptElement);
    this.dvcClient.subscribe(
      "variableUpdated:*",
      (key, variable) => {
        console.log(`Subscribe updated: ${key}: ${variable.value}`);
      }
    );
  }
}
