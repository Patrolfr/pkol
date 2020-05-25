import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import {FooterComponent} from './template/footer.component';
import { MessageToSupportComponent } from './message-to-support/message-to-support.component';
import {FormsModule} from '@angular/forms';
import { DeliveryComponent } from './delivery/delivery.component';
import { ShipmentTrackingComponent } from './shipment-tracking/shipment-tracking.component';
import { ReturnsAndComplaintsComponent } from './returns-and-complaints/returns-and-complaints.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { InstallmentPurchasesComponent } from './installment-purchases/installment-purchases.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StationaryStoresComponent } from './stationary-stores/stationary-stores.component';
import { LocationComponent } from './location/location.component';
import { JobComponent } from './job/job.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ShopRulesComponent } from './shop-rules/shop-rules.component';
import { TutorialsComponent } from './tutorials/tutorials.component';


@NgModule({
  declarations: [
    FooterComponent,
    MessageToSupportComponent,
    DeliveryComponent,
    ShipmentTrackingComponent,
    ReturnsAndComplaintsComponent,
    GiftCardsComponent,
    InstallmentPurchasesComponent,
    AboutUsComponent,
    StationaryStoresComponent,
    LocationComponent,
    JobComponent,
    HelpCenterComponent,
    PrivacyPolicyComponent,
    ShopRulesComponent,
    TutorialsComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    FormsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
