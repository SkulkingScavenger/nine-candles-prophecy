import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoriesRoutingModule } from './stories-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { StoriesComponent } from './components/stories.component';

@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [StoriesComponent]
})
export class StoriesModule { }
