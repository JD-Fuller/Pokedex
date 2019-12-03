import PokemonService from "../Services/PokemonService.js";
import store from "../store";

//Private
/**Draw Pokemon list from Pokedex API */
function _draw() {
  let pokemonTemplate = ''
  let poke = store.State.pokemon;
  poke.forEach(poke => pokemonTemplate += poke.pokemonTemplate)
  console.log(poke);

  document.querySelector("#pokemon").innerHTML = pokemonTemplate
}

//Public
export default class PokeController {
  constructor() {
    store.subscribe("pokemon", _draw);
  }

  async searchPokemon() {
    debugger
    event.preventDefault();
    try {
      await PokemonService.searchPokemon();
    } catch (e) {
      console.log(e);
    }
    console.log("Where did all the pokemon go?")
    _draw();
  }
}
