import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResourcesRoutingModule } from './resources-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { ResourcesComponent } from './components/resources.component';

@NgModule({
  declarations: [
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [ResourcesComponent]
})
export class ResourcesModule { }
