import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MechanicsComponent } from "./components/mechanics.component";
import { MainComponent } from "../wiki/main/main.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: MechanicsComponent
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
export class MechanicsRoutingModule {

}
