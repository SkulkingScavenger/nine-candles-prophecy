import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AppComponent } from "./app.component";

const routes: Routes = [
	{
		path: '', 
		redirectTo: 'home', 
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},{
		path: 'mechanics',
		loadChildren: () => import('./mechanics/mechanics.module').then(m => m.MechanicsModule)
	},{
		path: 'locations',
		loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule)
	},{
		path: 'characters',
		loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
	},{
		path: 'factions',
		loadChildren: () => import('./factions/factions.module').then(m => m.FactionsModule)
	},{
		path: 'monsters',
		loadChildren: () => import('./monsters/monsters.module').then(m => m.MonstersModule)
	},{
		path: 'wardens',
		loadChildren: () => import('./wardens/wardens.module').then(m => m.WardensModule)
	},{
		path: 'resources',
		loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
	},{
		path: 'artifacts',
		loadChildren: () => import('./artifacts/artifacts.module').then(m => m.ArtifactsModule)
	},{
		path: 'comics',
		loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule)
	},{
		path: 'stories',
		loadChildren: () => import('./stories/stories.module').then(m => m.StoriesModule)
	},{
		path: 'prophecies',
		loadChildren: () => import('./prophecies/prophecies.module').then(m => m.PropheciesModule)
	},{
		path: 'wiki',
		loadChildren: () => import('./wiki/wiki.module').then(m => m.WikiModule)
	}

];

const routerOptions: ExtraOptions = {
	scrollPositionRestoration: 'enabled',
	anchorScrolling: 'enabled',
	scrollOffset: [0,64],
};

@NgModule({
	imports: [
		RouterModule.forRoot(routes, routerOptions)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
