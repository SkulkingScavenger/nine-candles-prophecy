import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RacesRoutingModule } from './races-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { RacesComponent } from './components/races.component';

@NgModule({
  declarations: [
    RacesComponent
  ],
  imports: [
    CommonModule,
    RacesRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [RacesComponent]
})
export class RacesModule { }
