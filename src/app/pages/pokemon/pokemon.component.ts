import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon:PokemonData
  
  constructor(private service:PokemonService) {//injetando o PokemonService
  
    //inicia os atributos do pokemon
    this.pokemon = {
      id:0,
      name:'',
      sprites:{
        front_default: ''
      },
      types:[]
    }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string) {
    this.service.getPokemon(searchName).subscribe({
      next: (response) => {

        this.pokemon = {
          id: response.id,
          name: response.name,
          sprites: response.sprites,
          types:response.types
        }
      },
      error: (err) => console.log(err)
    });
  }

}
