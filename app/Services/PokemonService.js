import Pokemon from "../Models/Pokemon.js"
import store from "../store.js";


//Private
// @ts-ignore
let _pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
})
let _refreshPokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
})

let _sandBox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jdfuller/pokemon'
})
class PokemonService {
  async catchAsync() {
    let activePokemon = store.State.activePokemon
    //empty string means we're at the end of our URL and we don't want to put anythign extra on that
    //put the data where you're already at...ding dong.
    let res = await _sandBox.post('', activePokemon)
    console.log("from catch async", res)
    store.commit("caughtPokemon", activePokemon)
    console.log("from store caughtPokemon", store.State.caughtPokemon);
  }
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
