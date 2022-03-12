import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { WikiService } from './wiki/services/wiki.service';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		CommonModule,
		AppRoutingModule,
		NavigationModule,
		FormsModule
	],
	providers: [WikiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
