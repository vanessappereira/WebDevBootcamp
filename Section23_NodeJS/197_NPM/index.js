import generateName from "sillyname";
var sillyname = generateName();
console.log(`My name is: ${sillyname}`);

import superheroes from 'superheroes';
const heroName = superheroes[Math.floor(Math.random() * superheroes.length)];

console.log(`My superhero name is: ${heroName}`);