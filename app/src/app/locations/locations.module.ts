import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationsRoutingModule } from './locations-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { LocationsComponent } from './components/locations.component';

@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [LocationsComponent]
})
export class LocationsModule { }
