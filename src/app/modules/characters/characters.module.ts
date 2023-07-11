import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CharactersComponent
  ]
})
export class CharactersModule { }
