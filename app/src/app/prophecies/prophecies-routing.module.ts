import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropheciesComponent } from "./components/prophecies.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: PropheciesComponent
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PropheciesRoutingModule {

}
