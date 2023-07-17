// esta es la función que realiza la suma.
console.log('Estas en la consola, pichon');
console.error('ha ocurrido un error');
console.warn('El uso de "function test" esta deprecado');
console.log(50 / 30);
// alert('Hola Rodri como estas?');

const firstName = 'Alejandro'; // type string
let age = 21; // type number
let isBigger = true; // type boolean
let isNull = null;
let isUndefined;

console.log(firstName, age);

console.log(21 + 20);
console.log('hola' + ' ' + 'como' + ' ' + 'estas');
console.log(true);

console.log(isNull);
console.log(isUndefined);



function showPass () {
  let passInput = document.getElementById('pass').value;
  console.log(passInput)
}
