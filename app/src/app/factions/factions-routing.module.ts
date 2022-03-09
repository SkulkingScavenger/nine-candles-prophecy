import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactionsComponent } from "./components/factions.component";
import { MainComponent } from "../wiki/main/main.component";

const routes: Routes = [
		{
			path: '',
			redirectTo: 'home',
			pathMatch: 'full',
		},
		{
			path: 'home',
			component: FactionsComponent
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
export class FactionsRoutingModule {

}
