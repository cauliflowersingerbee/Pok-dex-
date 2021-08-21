//wraps in IIFE and creates a pokemon repository variable


  let pokemonRepository = (function () {
    let pokemonList = [];
   //creating variable of pokemon API
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    //creating modal
    let modalContainer = document.querySelector('#modal-container');
    let modal = document.querySelector('.modal');
    let modalClose = document.createElement('button');
        modalClose.classList.add('modal-close');

    let pokemonName = document.createElement('h1');
        pokemonName.classList.add('Pokemon-name');
    let pokemonHeight = document.createElement('p');
        pokemonHeight.classList.add('Pokemon-height');
    let pokemonType = document.createElement('p');
        pokemonType.classList.add('Pokemon-type');
    
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    let pokemonImage = document.createElement('img');
    pokemonImage.classList.add('Pokemon-image');
        
  
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
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('my-button');
        listOfPoke.appendChild(button);
        pokelist.appendChild(listOfPoke);
        button.addEventListener('click', function (event) {
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

      function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          pokemonName.innerHTML = pokemon.name;
          pokemonHeight.innerHTML = 'Height: ' + pokemon.height;
          pokemonType.innerHTML = 'Type: ' + pokemon.types;
          pokemonImage.src = pokemon.imageUrl;
          modalClose.innerHTML = "Close";
          showModal();
        });

        modal.appendChild(modalClose);
        modal.appendChild(pokemonName);
        modal.appendChild(pokemonHeight);
        modal.appendChild(pokemonType);
        modal.appendChild(imageContainer);
        imageContainer.appendChild(pokemonImage);
      }

      //function to show modal 
      function showModal() {
        modalContainer.classList.add('is-visible');
      }

      
      //function to hide modal 

      // 1. hide modal 

        function hideModal() {
          modalContainer.classList.remove('is-visible')          
        }
       // 2. close modal when user presses  Esc key
          window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();  
          }
        });
        //3. to close modal by clicking outside modal
            modalContainer.addEventListener('click', (e) => {
            // Since this is also triggered when clicking INSIDE the modal
            // We only want to close if the user clicks directly on the overlay
            let target = e.target;
            if (target === modalContainer) {
              hideModal();
            }
          });
        // 4. closing modal when user clicks close button 
            modalClose.addEventListener('click', hideModal);
    

      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        hideModal: hideModal
      };
    })();

    //calls loadList function
    pokemonRepository.loadList().then(function() {
    //creates forEach Loop
    pokemonRepository.getAll().forEach(function(pokemon){
    //calls add function
      pokemonRepository.addListItem(pokemon);
    });  
  });




      
      
      

    
      









  