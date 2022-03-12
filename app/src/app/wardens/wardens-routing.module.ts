import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WardensComponent } from "./components/wardens.component";
import { MainComponent } from "../wiki/main/main.component";

const routes: Routes = [
		{
			path: '',
			redirectTo: 'home',
			pathMatch: 'full',
		},
		{
			path: 'home',
			component: WardensComponent
		},{
			path: ':page',
			component: MainComponent
		},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class WardensRoutingModule {

}
