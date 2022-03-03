import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WikiComponent } from "./components/wiki.component";
import { MainComponent } from "./main/main.component";


const routes: Routes = [
		{
			path: '',
			redirectTo: 'home',
			pathMatch: 'full',
		},
		{
			path: 'home',
			component: WikiComponent
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
export class WikiRoutingModule {

}
