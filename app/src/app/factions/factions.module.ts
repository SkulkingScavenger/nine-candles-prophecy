import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactionsRoutingModule } from './factions-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { FactionsComponent } from './components/factions.component';

@NgModule({
  declarations: [
    FactionsComponent
  ],
  imports: [
    CommonModule,
    FactionsRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [FactionsComponent]
})
export class FactionsModule { }
