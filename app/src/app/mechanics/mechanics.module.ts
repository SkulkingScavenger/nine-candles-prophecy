import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MechanicsRoutingModule } from './mechanics-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { MechanicsComponent } from './components/mechanics.component';

@NgModule({
  declarations: [
    MechanicsComponent
  ],
  imports: [
    CommonModule,
    MechanicsRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [MechanicsComponent]
})
export class MechanicsModule { }
