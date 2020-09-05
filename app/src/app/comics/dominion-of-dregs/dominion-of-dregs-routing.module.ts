import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { IndexComponent } from "./components/index/index.component";
import { MapsComponent } from "./components/maps/maps.component";

const routes: Routes = [
    {
      path: 'index',
      component: IndexComponent
    },{
      path: 'maps',
      component: MapsComponent
    },{
      path: ':page-number',
       component: MainComponent
    },{
      path: '',
       component: MainComponent
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DominionOfDregsRoutingModule {

}
