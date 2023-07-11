import { Component, OnInit } from '@angular/core';
import { characters } from 'src/app/data/characters.data';
import { Character } from 'src/app/models/characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickCard(data: Character): void{
    console.log(data);
  }

  characters: Character[] = characters;

}
