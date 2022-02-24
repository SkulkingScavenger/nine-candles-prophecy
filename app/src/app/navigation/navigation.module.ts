import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { NavigationSidebarComponent } from './components/navigation-sidebar/navigation-sidebar.component';
import { NavigationFooterComponent } from './components/navigation-footer/navigation-footer.component';

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    NavigationSidebarComponent,
    NavigationFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  	NavigationHeaderComponent,
    NavigationSidebarComponent,
  	NavigationFooterComponent
  ],
  providers: [],
})
export class NavigationModule { }
