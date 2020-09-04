import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComicsRoutingModule } from './comics-routing.module';

import { ComicsComponent } from './components/comics.component';

@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ComicsComponent]
})
export class ComicsModule { }
