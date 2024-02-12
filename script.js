const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const pokeHP = document.getElementById("hp");
const pokeAttack = document.getElementById("attack");
const pokeDefence = document.getElementById("defence");
const pokeSpecAttack = document.getElementById("special-attack");
const pokeSpecDefence = document.getElementById("special-defence");
const pokeSpeed = document.getElementById("speed");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeImg = document.getElementById("img");


const pokemonInfo = async () => {
    try{
        const pokeNameId = searchInput.value.toLowerCase();
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokeNameId}`);          //here the await keyword is waiting for the fetch method to resolve the promise by bringing the pokemon data
        const data = await response.json();                                                                                // converting the reponse object to meaningful json data similar to the [ then((data) => data.json()) ]
        console.log(data);
        console.log(data.stats[2].base_stat)
        pokeName.textContent = `${data.name.toUpperCase()}`;
        pokeId.textContent = `#${data.id}`;
        pokeWeight.textContent = `${data.weight}`;
        pokeHeight.textContent = `${data.height}`;
        pokeImg.innerHTML = `<img id="sprite" src="${data.sprites.front_shiny}" alt="${data.name}">`;

        pokeHP.textContent = data.stats[0].base_stat;
        pokeAttack.textContent = data.stats[1].base_stat;
        pokeDefence.textContent = data.stats[2].base_stat;
        pokeSpecAttack.textContent = data.stats[3].base_stat;
        pokeSpecDefence.textContent = data.stats[4].base_stat;
        pokeSpeed.textContent = data.stats[5].base_stat;
        
    }catch(err){
        resetTable();
        alert('Pokémon not found');  // if the pokemon is not found 404 not found
    }   
}

const resetTable = () => {
    const sprite = document.getElementById('sprite');
    if (sprite) sprite.remove();
  
    pokeName.textContent = '';
    pokeId.textContent = '';
    pokeHeight.textContent = '';
    pokeWeight.textContent = '';
    pokeHP.textContent = '';
    pokeAttack.textContent = '';
    pokeDefence.textContent = '';
    pokeSpecAttack.textContent = '';
    pokeSpecDefence.textContent = '';
    pokeSpeed.textContent = '';
  };

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    pokemonInfo();
  });