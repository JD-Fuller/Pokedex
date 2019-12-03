import PokemonService from "../Services/PokemonService.js";
import store from "../store";

//Private
function _draw() {
  let pokemon = store.State.pokemon;
  console.log(pokemon);
}

//Public
export default class PokeController {
  constructor() {
    store.subscribe("pokemon", _draw);
  }
}
