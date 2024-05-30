import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
pokemons = [];

constructor(private httpCliet: HttpClient) {

  this.carregarPokemons();
}
async carregarPokemons(){
  const requisicao = await this.httpCliet.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
  .toPromise();

  this.pokemons = requisicao.results;
  }
}

