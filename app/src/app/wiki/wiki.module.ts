import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WikiRoutingModule } from './wiki-routing.module';
import { NavigationModule } from './../navigation/navigation.module';
import { UtilitiesModule } from './../utilities/utilities.module';

import { WikiComponent } from './components/wiki.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { PageComponent } from './page/page.component';
import { NavboxFooterComponent } from './navbox-footer/navbox-footer.component';
import { FooterComponent } from './footer/footer.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

@NgModule({
	declarations: [
		WikiComponent,
		MainComponent,
		CategoryComponent,
		PageComponent,
		NavboxFooterComponent,
		FooterComponent,
		TableOfContentsComponent,
	],
	imports: [
		CommonModule,
		WikiRoutingModule,
		NavigationModule,
		UtilitiesModule
	],
	providers: [],
	bootstrap: [WikiComponent]
})
export class WikiModule { }
