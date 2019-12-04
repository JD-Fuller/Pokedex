import service from "../Services/PokemonService.js";
import store from "../store.js";

//Private
/**Draw Pokemon list from Pokedex API */
function _draw() {
  let pokemonTemplate = ''
  let pokemon = store.State.pokemon
  debugger//put p.name in quotations because it's going to be read as a string, not a variable

  pokemon.forEach(p => pokemonTemplate += `<li onclick="app.pokemonController.selectPokemonAsync('${p.name}')">${p.name}</li>`)
  console.log(pokemon);

  document.getElementById("search").innerHTML = pokemonTemplate
}

//Public
export default class PokeController {
  constructor() {
    _draw();d
    store.subscribe("pokemon", _draw);
    service.searchAsync();

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


  // async searchAsync() {
  //   event.preventDefault();
  //   try {
  //     await service.searchAsync();
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   console.log("Where did all the pokemon go?")
  //   _draw();
  // }
}
