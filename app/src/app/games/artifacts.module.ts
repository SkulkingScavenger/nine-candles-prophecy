import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArtifactsRoutingModule } from './artifacts-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { ArtifactsComponent } from './components/artifacts.component';

@NgModule({
	declarations: [
		ArtifactsComponent
	],
	imports: [
		CommonModule,
		ArtifactsRoutingModule,
		NavigationModule
	],
	providers: [],
	bootstrap: [ArtifactsComponent]
})
export class ArtifactsModule { }
