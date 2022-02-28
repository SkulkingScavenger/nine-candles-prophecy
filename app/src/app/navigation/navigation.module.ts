import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { NavigationSidebarComponent } from './components/navigation-sidebar/navigation-sidebar.component';
import { NavigationFooterComponent } from './components/navigation-footer/navigation-footer.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    NavigationSidebarComponent,
    NavigationFooterComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
  	NavigationHeaderComponent,
    NavigationSidebarComponent,
  	NavigationFooterComponent,
    SearchbarComponent
  ],
  providers: [],
})
export class NavigationModule { }
