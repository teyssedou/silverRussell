import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { traitementPage } from "../pages/traitement/traitement";
import { CalendarPage } from "../pages/calendar/calendar";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { ConnectionPage } from "../pages/connection/connection";
import { RegisterPage } from "../pages/register/register";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [
    MyApp,
    traitementPage,
    CalendarPage,
    HomePage,
    TabsPage,
    ConnectionPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: [
        "janvier",
        "fevrier",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "aout",
        "septembre",
        "octobre",
        "novembre",
        "decembre"
      ],
      monthShortNames: [
        "jan",
        "fev",
        "mar",
        "avr",
        "mai",
        "jun",
        "jui",
        "aou",
        "sep",
        "oct",
        "nov",
        "dec"
      ],
      dayNames: [
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
        "dimanche"
      ],
      dayShortNames: ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"]
    })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    traitementPage,
    CalendarPage,
    HomePage,
    TabsPage,
    ConnectionPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
