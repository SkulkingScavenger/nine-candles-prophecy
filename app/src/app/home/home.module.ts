import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavigationModule
  ],
  providers: [],
})
export class HomeModule { }
