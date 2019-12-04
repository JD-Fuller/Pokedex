import service from "../Services/PokemonService.js";
import store from "../store.js";

//Private
/**Draw Pokemon list from Pokedex API */
function _draw() {
  let pokemonTemplate = ''
  let pokemon = store.State.pokemon
  //put p.name in quotations because it's going to be read as a string, not a variable
  pokemon.forEach(p => pokemonTemplate += `<li onclick="app.pokemonController.selectPokemonAsync('${p.name}')">${p.name}</li>`)
  console.log(pokemon);

  document.getElementById("search").innerHTML = pokemonTemplate
}

function _drawCaughtPokemon() {
  let template = ''
  let caughtPokemon = store.State.caughtPokemon;
  debugger//put p.name in quotations because it's going to be read as a string, not a variable
  caughtPokemon.forEach(cur => template += `<li onclick="app.pokemonController.deletePok('${cur.name}')">${cur.name}</li>`)

  document.getElementById("caught-pokemon").innerHTML = template
}

//Public
export default class PokeController {
  constructor() {//first method that runs when controller gets instantiated
    _draw();
    store.subscribe("pokemon", _draw);
    service.searchAsync();
   store.subscribe("caughtPokemon", _drawCaughtPokemon);
   //is caught pokemon a thing in my store?

  }

  async selectPokemonAsync(name) {
    try {
      await service.selectPokemonAsync(name)
    } catch (error) {
      debugger;
      console.error(error);
    }
  }

async catchAsync() {
try {
  await service.catchAsync()
} catch (error){
  debugger;
  console.error(error)
  //if something goes wrong, we'll now. put debugger in there so we can see it
}

}
  async searchAsync() {
    event.preventDefault();
    try {
      await service.searchAsync();
    } catch (e) {
      console.log(e);
    }
    console.log("Where did all the pokemon go?")
    _draw();
  }
}
