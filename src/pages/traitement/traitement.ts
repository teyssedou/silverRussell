import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ConnectionPage } from "../connection/connection";

@Component({
  selector: "page-traitement",
  templateUrl: "traitement.html"
})
export class traitementPage {
  loginPage = ConnectionPage;
  constructor(public navCtrl: NavController) {}
}
