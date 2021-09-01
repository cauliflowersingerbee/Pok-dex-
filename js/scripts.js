
 let pokemonRepository = (function () {
  let pokemonList = [];
 //creating variable of pokemon API
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //show modal content
  function showModal(item) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

  //clear existing modal content
  modalTitle.empty();
  modalBody.empty();

  //name element
  let pokemonName = $('<h1>' + item.name + '</h1>');

  //imageElement
  let pokemonImage = $('<img class="modal-img" style="width:50%>');
  pokemonImage.attr('src', item.imageUrl);

  //height element
  let pokemonHeight = $('p' + 'height : ' + item.height + 'p');


  //types element
  let pokemonType = $('p' + 'type : ' + item.types + 'p');

  
  modalTitle.append(pokemonName);
  modalBody.append(pokemonImage);
  modalBody.append(pokemonHeight);
  modalBody.append(pokemonType);

  }

 
      

  //function to load pokemon list:

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
    & add event listener*/

    function addListItem (pokemon) {
      let pokelist = document.querySelector('.pokemon-list');
      let listOfPoke = document.createElement('li');
      listOfPoke.classList.add('group-list-item');

      let pokemonButton = document.createElement('button');
      pokemonButton.innerText = pokemon.name;
      pokemonButton.classList.add('btn', 'btn-primary', 'pokemon-button');
      pokemonButton.setAttribute('data-toggle', 'modal');
      pokemonButton.setAttribute('data-target', '#modal-container')

      pokelist.appendChild(listOfPoke);
      listOfPoke.appendChild(pokemonButton);
      
      pokemonButton.addEventListener('click', function (event) {
          showDetails(pokemon);
      });
    };


    // function to load pokemon details from URL to array
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        //assigning details from the response
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function() {
          showModal()    
      });  
      };

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
      };

})();

  //calls loadList function
  pokemonRepository.loadList().then(function(list) {
  //creates forEach Loop
  pokemonRepository.getAll().forEach(function(pokemon){
  //calls add function
    pokemonRepository.addListItem(pokemon);
  });  
});