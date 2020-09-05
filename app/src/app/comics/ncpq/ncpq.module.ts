import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NcpqRoutingModule } from './ncpq-routing.module';

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
    NcpqRoutingModule,
  ],
  providers: []
})
export class NcpqModule { }
