import { Component } from "@angular/core";

import { traitementPage } from "../traitement/traitement";
import { CalendarPage } from "../calendar/calendar";
import { HomePage } from "../home/home";
import { ConnectionPage } from "../connection/connection";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = traitementPage;
  tab3Root = CalendarPage;
  tab4Root = ConnectionPage;
  constructor() {}
}
