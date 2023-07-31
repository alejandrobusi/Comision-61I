/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


const ejercicio2 = () => {
  let lista = [];
  let playStop = false;
  const message = 'ingresa un nombre de una ciudad. presiona cancelar para dejar de ingresar';

  for (let i = 0; playStop === false ; i++) {
    let input = prompt(message);

    if (input === null) {
      playStop = true;
      document.write(`*****La longitud del arreglo es ${lista.length}. <br>`);
      document.write(`*****El primer item es ${lista[0]}. <br>`);
      document.write(`*****El tercer item es ${lista[2]}. <br>`);
      document.write(`*****El ultimo item es ${lista.at(-1)}. <br>`);
      lista.push('paris');
      document.write(`*****El tercer item es ${lista[1]}. <br>`);
      lista.splice(1,1,'barcelona');
      console.log(lista);
    } else {
      lista.push(input);
    }
  }
};

ejercicio2();
*/

// OBJETOS

const auto = {
  color: 'verde',
  marca: 'Fiat',
  potenciaaHp: 130,
  esElectrico: false,
}

// console.log(auto.esElectrico);
// console.log(auto['marca']);

// agregar propíedad
// auto.esUsado = false;
// // modificaar o editar propiedad existente
// auto.color = 'negro';
// // eliminnar una propiedad
// delete auto.potenciaaHp;


// console.log(auto);

//Recorrer un objeto

let llavesAuto = Object.keys(auto);
// console.log(llavesAuto);

// for (let i = 0; i < llavesAuto.length; i++) {
//   let llave = llavesAuto[i];
//   console.log(`${llave}: ${auto[llave]}`);
// }

let products = [
  { 
    id: 1232,
    name: "Leche",
    price: 120,
    categories: ["familiar", "comida"],
  },
  { 
    id: 1232,
    name: "Arroz",
    price: 80,
    categories: ["familiar", "comida"]
  },
  { 
    id: 3442,
    name: "Lavadora",
    price: 7800,
    categories: ["electrodomésticos"] 
  },
];

for (let i = 0; i < products.length; i++) {
  console.group(products[i].name);
  console.log(`Precio: ${products[i].price}`);
  console.log(`Id: ${products[i].id}`);
  console.log(`Categorias: ${products[i].categories.join(', ')}`);
  console.groupEnd();
}
