import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from "./components/comics.component";

const routes: Routes = [
  {
    path: '',
    component: ComicsComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: './../dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'dominion-of-dregs',
        loadChildren: './dominion-of-dregs/reports.module#ReportsModule'
      },
      {
        path: 'ncpq',
        loadChildren: './ncpq/people.module#PeopleModule'
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComicsRoutingModule {

}
