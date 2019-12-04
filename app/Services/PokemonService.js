import Pokemon from "../Models/Pokemon.js"
import store from "../store.js";


//Private
// @ts-ignore
let _pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
})
let _sandBox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jdfuller/pokemon'
})
class PokemonService {
  async selectPokemonAsync(name) {
    // add name to automatically load url
let res = await _pokemonApi.get(name);
console.log("from selectPokemonAsync res", res)
let theActivePokemon = new Pokemon(res.data);
//why in quotes?
store.commit("activePokemon", theActivePokemon);
console.log("from store active pokemon", store.State.activePokemon)
  }
async searchAsync(){
  let res = await _pokemonApi.get('');
  // put console log.(res) here to see what we're getting
  store.commit("pokemon", res.data.results);
  console.log("from api", res.data.results)
  console.log("from store", store.State.pokemon)
}
}

const service = new PokemonService();
export default service;
