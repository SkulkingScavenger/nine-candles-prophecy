import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonstersRoutingModule } from './monsters-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { MonstersComponent } from './components/monsters.component';

@NgModule({
  declarations: [
    MonstersComponent
  ],
  imports: [
    CommonModule,
    MonstersRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [MonstersComponent]
})
export class MonstersModule { }
