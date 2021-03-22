import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WikiRoutingModule } from './wiki-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { WikiComponent } from './components/wiki.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    WikiComponent,
    MainComponent,
    CategoryComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    WikiRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [WikiComponent]
})
export class WikiModule { }
