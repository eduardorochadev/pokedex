import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  constructor(public PokemonService:PokemonService){}
  formatarNome(nome: string): string {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
  }
}
