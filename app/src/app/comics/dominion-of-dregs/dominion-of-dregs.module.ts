import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DominionOfDregsRoutingModule } from './dominion-of-dregs-routing.module';

import { MainComponent } from './components/main/main.component';
import { IndexComponent } from './components/index/index.component';
import { MapsComponent } from './components/maps/maps.component';


@NgModule({
  declarations: [
    MainComponent,
    IndexComponent,
    MapsComponent,
  ],
  imports: [
    CommonModule,
    DominionOfDregsRoutingModule,

  ],
  providers: [],
})
export class DominionOfDregsModule { }
