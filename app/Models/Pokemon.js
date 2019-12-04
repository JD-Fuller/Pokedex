
    export default class Pokemon {
        constructor(data) {
            this.url = data.url
            this._id = data.id
            this.name = data.name
            this.img = data.img || data.sprites.front_default
            this.weight = data.weight
            this.height = data.height
            this.types = data.types
        }
    

    get pokemonTemplate() {
        return `
        <ol>
        <h2>${this.name}</h2>
        </ol>
        `;



        return `
        add card with all of the references to the pokemon
        <div class="card" style="width: 20rem:">
        <img src="${this.img}"
        <button class="btn btn-primary" onclick="app.pokemonController.catchAsync()">Catch Em'</button>
        
        `
    }




    }