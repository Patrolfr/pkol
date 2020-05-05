import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './sklep/navigation/navigation.component';
import {FormsModule} from '@angular/forms';
import {KeycloakAngularModule} from 'keycloak-angular';
import {SklepModule} from './sklep/sklep.module';
import {DataService} from './sklep/service/data.service';

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
    KeycloakAngularModule
  ],
  providers: [
    DataService
    // ,{ // comment this section \/ in case keycloak server is down
    //   provide: APP_INITIALIZER,
    //   useFactory: initializer,
    //   multi: true,
    //   deps: [KeycloakService]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
