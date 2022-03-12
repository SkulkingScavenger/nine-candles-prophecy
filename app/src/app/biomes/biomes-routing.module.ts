import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiomesComponent } from "./components/biomes.component";
import { MainComponent } from "../wiki/main/main.component";

const routes: Routes = [
		{
			path: '',
			redirectTo: 'home',
			pathMatch: 'full',
		},{
			path: 'home',
			component: BiomesComponent,
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
export class BiomesRoutingModule {

}
