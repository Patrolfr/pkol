import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SklepRoutingModule} from "./sklep-routing,module";
import { ProtectedComponent } from './protected/protected.component';
import { StartComponent } from './start/start.component';



@NgModule({
  declarations: [
    ProtectedComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    SklepRoutingModule
  ]
})
export class SklepModule { }
