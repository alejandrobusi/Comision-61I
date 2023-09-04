import { alumnos, saludar, obtenerPost } from './utils.js';

/*
//----desestructurar array
const pokemones = ['picachu', 'charizard', 'tortuga'];

let [pokemon1, pokemon2, pokemon3] = pokemones;
pokemon1 = 'alguno';
console.log(pokemon1, pokemon2, pokemon3);
console.log(pokemones);
//-----desestructurar objetos
const persona = {
  name: 'Ale',
  lastName: 'Busi',
  age: 29,
};

let { name, lastName, age } = persona;

console.log(name, lastName, age);

name = 'test';

console.log(persona);

console.log(name, lastName, age);

//-----------operador ternario

const activado = false;
let resultado = activado ? 'verdadero' : 'falso';
let resultado2 = (activado && 'verdadero') || 'falsisimo';
// if (activado) {
//   resultado = 'verdadero';
// } else {
//   resultado = 'falso';
// }

console.log(resultado, resultado2);
//------- export import
console.log(alumnos);
saludar('Ale');

//--------consumo de proyectos
fetch('https://jsonplaceholder.typicode.com/posts/5')
.then((response) => response.json())
.then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() =>
  console.log('esto se ejecuta sin importar el resultado de la promesa')
  );
  
  */
//------async await

const resultado = await obtenerPost();
console.log(resultado);
