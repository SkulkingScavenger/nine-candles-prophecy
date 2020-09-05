import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PropheciesRoutingModule } from './prophecies-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { PropheciesComponent } from './components/prophecies.component';

@NgModule({
  declarations: [
    PropheciesComponent
  ],
  imports: [
    CommonModule,
    PropheciesRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [PropheciesComponent]
})
export class PropheciesModule { }
