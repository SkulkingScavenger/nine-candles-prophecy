import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtifactsComponent } from "./components/artifacts.component";
import { MainComponent } from "../wiki/main/main.component";

const routes: Routes = [
		{
			path: '',
			redirectTo: 'home',
			pathMatch: 'full',
		},{
			path: 'home',
			component: ArtifactsComponent,
		},{
			path: ':page',
			component: MainComponent
		}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class ArtifactsRoutingModule {

}
