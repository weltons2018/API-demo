window.onload = () => {
    document.querySelector("#submit").addEventListener("click", getNewPokemon);
}

function getNewPokemon() {
    /*
        1. Make a call to an API
        2. Wait for API to respond
        3. Get the response data
        4. Put the response data in the HTML
    */
   let pokemonName = document.querySelector("#pokemon-input").value;
   getPokemon(pokemonName).then(resultJson => {
       populateHTML(resultJson);
   });
}

async function getPokemon(pokemonName){
    let endpoint = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    let req = new Request(endpoint);
    let response = await fetch(req);
    return response.json();
}

function populateHTML(pkmJson){
    let header = document.querySelector("#pokemon-name");
    let img = document.querySelector("#pokemon-sprite");
    let paragraph = document.querySelector("#info");

    header.innerHTML = getPokemonName(pkmJson);
    img.setAttribute("src", getPokemonSprite(pkmJson));
}

function getPokemonName(pkmJson){
    return pkmJson.name;
}

function capitalize(string){

}

function getPokemonSprite(pkmJson) {
    return pkmJson["sprites"]["other"]["official-artwork"]["front_default"];
}