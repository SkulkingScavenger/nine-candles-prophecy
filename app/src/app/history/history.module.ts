import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryRoutingModule } from './history-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { HistoryComponent } from './components/history.component';

@NgModule({
	declarations: [
		HistoryComponent
	],
	imports: [
		CommonModule,
		HistoryRoutingModule,
		NavigationModule
	],
	providers: [],
	bootstrap: [HistoryComponent]
})
export class HistoryModule { }
