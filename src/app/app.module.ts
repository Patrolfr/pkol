import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationComponent} from "./sklep/navigation/navigation.component";
import {FormsModule} from "@angular/forms";
import {initializer} from "./app-init";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {SklepModule} from "./sklep/sklep.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    SklepModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
