/*
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const newArrNumbers = numbers.map((number, i) => {
  return number + i;
});
console.log(newArrNumbers);
//

// numbers.forEach((num) => console.log(num * 2));

// Filter

const arrFilter = numbers.filter((num) => num % 2 === 0);
console.log(arrFilter);

// reduce

const sum = numbers.reduce((acc, number) => {
  return acc + number;
});

console.log(sum);

// find

const findArr = numbers.find((num) => num > 3);

console.log(findArr);

// some

const result = numbers.some((num) => num % 2 === 0);

console.log(result);

//////////// OBJETOS

const auto = {
  color: 'negro',
  modelo: '2023',
  marca: 'Fiat',
  potenciaHp: 130,
};

console.log(auto['color']);

auto.color = 'rojo';

auto.precio = 2500;

delete auto.precio;
console.log(auto);

const llaves = Object.keys(auto);
console.log(llaves);

for (let i = 0; i < llaves.length; i++) {
  const llave = llaves[i];
  console.log(auto[llave]);
}

const personas = [
  {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    ocupacion: 'Ingeniero',
  },
  {
    nombre: 'María',
    edad: 28,
    ciudad: 'Barcelona',
    ocupacion: 'Abogada',
  },
  {
    nombre: 'Carlos',
    edad: 25,
    ciudad: 'Valencia',
    ocupacion: 'Estudiante',
  },
  {
    nombre: 'Ana',
    edad: 35,
    ciudad: 'Sevilla',
    ocupacion: 'Médico',
  },
];

const personasSinEdad = personas.map((persona, i) => {
  return {
    ...persona,
    id: i + 1,
    ciudad: 'bs as',
  };
});

console.log(personasSinEdad);

// Funcion constructora

function Persona(nombre, edad, ciudad) {
  (this.name = nombre), (this.age = edad), (this.city = ciudad);
}

let persona1 = new Persona('Ale', 25, 'smt');

// El objeto constructor

let celular = new Object();
let celular2 = {};
celular.marca = 'Samsung';
console.log(celular);

// Object.create

let personaNueva = Object.create(persona1);

console.log(personaNueva.name);
*/
// comprando objetos

let personita1 = { nombre: 'juan' };
let personita2 = {
  ...personita1,
};

console.log(personita1.name === personita2.name);

console.log(Error.name);
