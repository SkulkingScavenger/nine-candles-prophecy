import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComicsRoutingModule } from './comics-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { ComicsComponent } from './components/comics.component';

@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [ComicsComponent]
})
export class ComicsModule { }
