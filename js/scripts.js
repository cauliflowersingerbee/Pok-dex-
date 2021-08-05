
/* how to write arrays:

1. array of strings
let foodArray = ['pizza', 'tuna', 'apple'];

2. array of objects
let carArray = [
  { type: 'Bus', wheels: 4, color: 'blue'},
  { type: 'Sport', wheels: 4, color: 'red'}
];

3. array of arrays
let myCalculatorNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
*/

/*let pokemonList = [
    { name: 'Bulbasaur', height: '0.7 m', weight: 6.9, types: ['grass', 'poison']},
    { name: 'Ivysaur', height: '1 m', weight: 13, types: ['grass', 'poison']},
    { name: 'Venusaur', height: '2 m', weight: 100, types: ['grass', 'poison']},
    { name: 'Charmander', height: '0.6 m', weight: 8.5, types: 'fire'},
    { name: 'Charmeleon', height: '1.1 m', weight: 19, types: 'fire'},
];



/* 
let ages = [20, 30, 25, 22, 31];
 for (let i = 0; i < ages.length; i++) {
   console.log(ages[i] - 2);
 }*/

/*let pokemonList = [
  { name: 'Bulbasaur', height: '0.7 m', weight: 6.9, types: ['grass', 'poison']},
  { name: 'Ivysaur', height: '1 m', weight: 13, types: ['grass', 'poison']},
  { name: 'Venusaur', height: '2 m', weight: 100, types: ['grass', 'poison']},
  { name: 'Charmander', height: '0.6 m', weight: 8.5, types: 'fire'},
  { name: 'Charmeleon', height: '1.1 m', weight: 19, types: 'fire'},
];
for (let i=0; i<pokemonList.length; i++) {
  document.write(pokemonList.name[i])
} */

/*let pokemonList = ["Bulbasur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon"];
for (let i=0; i<pokemonList.length; i++) {
  console.log(pokemonList[i])
}
*/


//creating for loop from array of Pokemon data:

let pokemonList = [
  { 
    name: 'Bulbasaur', 
    height: 0.7, 
    weight: 6.9, 
    types: ['grass', 'poison']
  },

  { 
    name: 'Ivysaur', 
    height: 1 , 
    weight: 13, 
    types: ['grass', 'poison']
  },

  { 
    name: 'Venusaur', 
    height: 2, 
    weight: 100, 
    types: ['grass', 'poison']
  },

  { 
    name: 'Charmander', 
    height: 0.6, 
    weight: 8.5, 
    types: 'fire'
  },

  { 
    name: 'Charmeleon', 
    height: 1.1, 
    weight: 19, 
    types: 'fire'
  },
];

for (let i=0; i <pokemonList.length; i++) {
  document.write("<p>" + "My name is " + pokemonList[i].name + "," + " I am the greatest Pokémon and I weigh " + pokemonList[i].weight + " kgs" + "<p>")
} 

/*
adding conditional to for loop
let person = [
  {name: "person1", age: 16},
  {name: "person2", age: 10},
  {name: "person3", age: 25}
  ];

for (let i=0; i < person.length; i++){
  if (person[i].age <19 && person[i].age >13){
    console.log(person[i].name + " is a teenager");
  }else if (person[i].age <13){
    console.log(person[i].name + " is a child");
  }else {
    console.log(person[i].name + " is an adult");
  }
}
Now, adding conditional to loop of pokemon data, using h for height:
*/
for (let h=0; h<pokemonList.length; h++) {
if (pokemonList[h].height > 1.1 ) {
  document.write(" - Wow, that's big!")
}
}