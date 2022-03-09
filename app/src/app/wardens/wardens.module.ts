import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WardensRoutingModule } from './wardens-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { WardensComponent } from './components/wardens.component';

@NgModule({
	declarations: [
		WardensComponent
	],
	imports: [
		CommonModule,
		WardensRoutingModule,
		NavigationModule
	],
	providers: [],
	bootstrap: [WardensComponent]
})
export class WardensModule { }
