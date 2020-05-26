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
import {BrandZoneComponent} from './sklep/brand-zone/brand-zone.component';
import {AutoCompleteModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationModule} from './sklep/authentication/authentication.module';
import {FooterModule} from './sklep/footer/footer.module';
import {ChatBotComponent} from './sklep/chat-bot/chat-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChatBotComponent,
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
    BrowserAnimationsModule,
    AuthenticationModule,
    StoreModule.forRoot({bucketState: bucketReducer}),
    FooterModule,
  ],
  providers: [
    // ,{ provide: APP_INITIALIZER, useFactory: initializer, multi: true, deps: [KeycloakService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
