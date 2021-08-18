//wraps in IIFE and creates a pokemon repository variable


  let pokemonRepository = (function () {
     //empty array for pokemons
    let pokemonList = [];
   //creating variable of pokemon API
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
    //creating function to load pokemon list:
  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

      /*creates add() function to add each Pokémon from 
      results above to pokemonList variable */

      function add (pokemon) {
        if (typeof pokemon === 'object' && 'name') {
          pokemonList.push(pokemon);
        }
      }

      function getAll () {
        return pokemonList;
      }

      /*function to add list of pokemons, create buttons 
      & event listener*/

      function addListItem (pokemon) {
        let ul = document.querySelector('.pokemon-list');
        let ol = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('my-button');
        ol.appendChild(button);
        ul.appendChild(ol);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
      };


      //creates function to load pokemon details from URL to array
      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          //assigning details from the response
          item.imageUrlFront = details.sprites.front_default;
          item.imageUrlBack = details.sprites.back_default;
          item.height = details.height;
          item.weight = details.weight;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

      function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          console.log(pokemon);
        });
      }
    
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
      };

    }) ();

    //calls loadList function
    pokemonRepository.loadList().then(function() {
    //creates forEach Loop
    pokemonRepository.getAll().forEach(function(pokemon){
    //calls add function
      pokemonRepository.addListItem(pokemon);
    });

}) ();




  