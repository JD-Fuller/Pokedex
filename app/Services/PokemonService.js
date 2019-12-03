import Store from "../store.js";
import Pokemon from "../Models/Pokemon.js"
import store from "../store.js";


//Private
// @ts-ignore
let _pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=20&lmit=20"
})
class PokemonService {
async searchPokemon(){
  let res = await _pokemonApi.get();
  store.commit("pokemon", res.data);
}
}

const service = new PokemonService();
export default service;
