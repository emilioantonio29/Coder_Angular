import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { CharactersModule } from '../modules/characters/characters.module';



@NgModule({
  declarations: [
    NavbarComponent,
    MainWrapperComponent
  ],
  imports: [
    CommonModule,
    CharactersModule
  ],
  exports: [
    NavbarComponent,
    MainWrapperComponent
  ]
})
export class LayoutModule { }
