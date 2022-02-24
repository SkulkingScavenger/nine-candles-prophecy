import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { NavigationModule } from './../navigation/navigation.module';

import { CharactersComponent } from './components/characters.component';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [CharactersComponent]
})
export class CharactersModule { }
