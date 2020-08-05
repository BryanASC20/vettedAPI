// let url = "https://pokeapi.co/api/v2/";

// fetch(url)
//     .then(function(response) {
//         return response.poke();
//     })
//     .then(function (poke) {
       
//         console.log(poke[0]);
//         console.log(poke[0].id);
//         console.log(myJson[0].setup);
//         console.log(myJson[0].punchline);
//         punchline = document.createElement("p");
//         punchline.innerHTML = myJson[0].punchline;
//         document.body.appendChild(punchline);
//         punchline.setAttribute("class", "poke");
       
//     })
//     function displayData(person){
//         let email = person.email;
//         let name = person.name.first + pok.name.last;
//         console.log(name);
//     }

const pokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=151";
fetch(pokeAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(myJSON){
        getPokemon(myJSON.results);
    })

function getPokemon(pokemonArray) {
    // for (let i=0; i < pokemonArray.length; i++) {
        const array = pokemonArray;
        let pokemonURL = pokemonArray[getRndInteger(0,pokemonArray.length)].url;
        let guess = document.querySelector("#Guess");
        guess.addEventListener('click', function() {
            getPokemonInfo(pokemonURL);
            guess.style.display = "none";
        })
        let reset = document.querySelector("#Reset");
        reset.addEventListener('click', function() {
            guess.style.display = "inline";
            pokemonURL = pokemonArray[getRndInteger(0,pokemonArray.length)].url; 
        })
            //     div.appendChild(about);
            // })
    // }
    console.log(pokemonArray);
    console.log(getRndInteger(0,pokemonArray.length));
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getPokemonInfo(url) {
    fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(pokeData) {
                let ability = pokeData.abilities[0].ability.name;
                let capitalizedAbility = ability.charAt(0).toUpperCase() + ability.slice(1);
                let name = pokeData.forms[0].name;
                let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
                let type = pokeData.types[0].type.name;
                let capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
                let div = document.createElement("div");
                let about = document.createElement("p");
                about.innerHTML = "<strong>" + "Name: " + "</strong>" + capitalizedName +"," + "<br>" + "<strong>" + "Primary Type: " + "</strong>" + capitalizedType + "," + "<br>" + "<strong>" + "Ability: " + "</strong>" + capitalizedAbility;
                // document.body.appendChild(p)
                let sprite = pokeData.sprites.front_default;
                let img = document.createElement("img");
                img.src = sprite;
                // img.addEventListener('click', function() {
                //     div.appendChild(about);
                // })
                // img.addEventListener('mouseout', function() {
                //     img.style.display = "";
                //     div.removeChild(about);
                // })
                div.appendChild(img);
                div.appendChild(about);
                // div.appendChild(about);
                document.body.appendChild(div);
            })
}