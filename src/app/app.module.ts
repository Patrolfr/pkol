import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './sklep/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {KeycloakAngularModule} from 'keycloak-angular';
import {SklepModule} from './sklep/sklep.module';
import {StoreModule} from '@ngrx/store';
import {bucketReducer} from './sklep/ngRx-store/user-bucket.reducers';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './sklep/footer/footer.component';
import {BrandZoneComponent} from './sklep/brand-zone/brand-zone.component';
import {AutoCompleteModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    BrandZoneComponent
  ],
  imports: [
    SklepModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
    HttpClientModule,
    StoreModule.forRoot({bucketState: bucketReducer}),
    AutoCompleteModule,
    BrowserAnimationsModule
  ],
  providers: [
    // ,{ provide: APP_INITIALIZER, useFactory: initializer, multi: true, deps: [KeycloakService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
