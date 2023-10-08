import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  
  nome:string = "POKEMON NAME";
  attributesTypes:string[] = ['Fire', 'ROCK']

  constructor() { }

  ngOnInit(): void {
  }

}
