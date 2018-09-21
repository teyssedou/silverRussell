import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ConnectionPage } from "../connection/connection";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  loginPage = ConnectionPage;
  constructor(public navCtrl: NavController) {}
}
