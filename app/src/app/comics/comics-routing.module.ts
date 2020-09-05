import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from "./components/comics.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },{
      path: 'home',
      component: ComicsComponent
    },{
      path: 'dominion-of-dregs',
      loadChildren: () => import('./dominion-of-dregs/dominion-of-dregs.module').then(m => m.DominionOfDregsModule)
    },{
      path: 'ncpq',
      loadChildren: () => import('./ncpq/ncpq.module').then(m => m.NcpqModule)
      //loadChildren: './ncpq/ncpq.module#NcpqModule'
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComicsRoutingModule {

}
