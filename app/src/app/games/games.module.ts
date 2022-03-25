import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GamesRoutingModule } from './games-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { GamesComponent } from './components/games.component';

@NgModule({
	declarations: [
		GamesComponent
	],
	imports: [
		CommonModule,
		GamesRoutingModule,
		NavigationModule
	],
	providers: [],
	bootstrap: [GamesComponent]
})
export class GamesModule { }
