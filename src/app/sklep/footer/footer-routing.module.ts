import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessageToSupportComponent} from './message-to-support/message-to-support.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {GiftCardsComponent} from './gift-cards/gift-cards.component';
import {HelpCenterComponent} from './help-center/help-center.component';
import {InstallmentPurchasesComponent} from './installment-purchases/installment-purchases.component';
import {JobComponent} from './job/job.component';
import {LocationComponent} from './location/location.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {ReturnsAndComplaintsComponent} from './returns-and-complaints/returns-and-complaints.component';
import {ShipmentTrackingComponent} from './shipment-tracking/shipment-tracking.component';
import {ShopRulesComponent} from './shop-rules/shop-rules.component';
import {StationaryStoresComponent} from './stationary-stores/stationary-stores.component';
import {TutorialsComponent} from './tutorials/tutorials.component';


const routes: Routes = [
  {
    path: 'ftr',
    children: [
      {
        path: 'aboutUs',
        component: AboutUsComponent,
      },
      {
        path: 'delivery',
        component: DeliveryComponent,
      },
      {
        path: 'giftCards',
        component: GiftCardsComponent,
      },
      {
        path: 'helpCenter',
        component: HelpCenterComponent,
      },
      {
        path: 'installmentPurchases',
        component: InstallmentPurchasesComponent,
      },
      {
        path: 'job',
        component: JobComponent,
      },
      {
        path: 'location',
        component: LocationComponent,
      },
      {
        path: 'contactUs',
        component: MessageToSupportComponent,
      },
      {
        path: 'privacyPolicy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'returnsAndComplaints',
        component: ReturnsAndComplaintsComponent,
      },
      {
        path: 'shipmentTracking',
        component: ShipmentTrackingComponent,
      },
      {
        path: 'shopRules',
        component: ShopRulesComponent,
      },
      {
        path: 'stationaryStores',
        component: StationaryStoresComponent,
      },
      {
        path: 'tutorials',
        component: TutorialsComponent,
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule {
}
