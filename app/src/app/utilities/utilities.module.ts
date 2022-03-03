import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NoSanitizePipe } from './pipes/nosanitizerpipe';

@NgModule({
	declarations: [
		NoSanitizePipe,
	],
	imports: [
		CommonModule,
	],
	exports: [
		NoSanitizePipe,
	],
	providers: [],
	bootstrap: []
})
export class UtilitiesModule { }
