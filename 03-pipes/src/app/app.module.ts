import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Language====
import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localEs from "@angular/common/locales/es-EC";
registerLocaleData(localEs);

//Components
import { AppComponent } from "./app.component";
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { DomSeguroPipe } from "./pipes/domseguro.pipe";
import { ContrasenaPipe } from "./pipes/contrasena.pipe";

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomSeguroPipe, ContrasenaPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es-EC" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
