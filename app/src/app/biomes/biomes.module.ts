import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BiomesRoutingModule } from './biomes-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { BiomesComponent } from './components/biomes.component';

@NgModule({
	declarations: [
		BiomesComponent
	],
	imports: [
		CommonModule,
		BiomesRoutingModule,
		NavigationModule
	],
	providers: [],
	bootstrap: [BiomesComponent]
})
export class BiomesModule { }
