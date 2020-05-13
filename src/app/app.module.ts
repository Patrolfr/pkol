import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './sklep/navigation/navigation.component';
import {FormsModule} from '@angular/forms';
import {KeycloakAngularModule} from 'keycloak-angular';
import {SklepModule} from './sklep/sklep.module';
import {StoreModule} from '@ngrx/store';
import {bucketReducer} from './sklep/ngRx-store/user-bucket.reducers';
import {HttpClientModule} from '@angular/common/http';

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
    HttpClientModule,
    StoreModule.forRoot({bucketState: bucketReducer})
  ],
  providers: [
    // ,{ provide: APP_INITIALIZER, useFactory: initializer, multi: true, deps: [KeycloakService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
