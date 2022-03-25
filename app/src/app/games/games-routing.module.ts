import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from "./components/games.component";
import { GravekeeperQuestComponent } from "./components/gravekeeper-quest/gravekeeper-quest.component";

const routes: Routes = [
		{
			path: '',
			redirectTo: 'home',
			pathMatch: 'full',
		},{
			path: 'home',
			component: GamesComponent,
		},{
			path: 'gravekeeper-quest',
			component: GravekeeperQuestComponent
		}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class GamesRoutingModule {

}
