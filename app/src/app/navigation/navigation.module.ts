import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { NavigationFooterComponent } from './components/navigation-footer/navigation-footer.component';

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    NavigationFooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  	NavigationHeaderComponent,
  	NavigationFooterComponent
  ],
  providers: [],
})
export class NavigationModule { }
