// Funciones declarativas
const studentName = 'Marcos';
const greatingDefault = 'Hola, mi nombre es';

const response = saludar(greatingDefault, studentName);

function saludar (saludo = 'Holaa we, me llamo', nombre = 'Jose') {
  const resp = `${saludo} ${nombre}`;
  return resp
};
console.log(response);

// const inputName = prompt('nombre')
// console.log(inputName);
//--scope global


//--scope local
// console.log(resp);

// Funciones anonimas

const suma = function (a, b) {
  return a + b;
};
console.log(suma(5, 5));

// funciones flecha

// const resta = (a, b) => a - b;
// const resta = b => 5 - b;

const multiplcar = () => {

};

// funcion dinamica

// let age = prompt('Ingresa tu edad');
// let result = ('11' === age) ? 'si, es igual' : 'no, no es igual';

// const wellcome = (age >= 18) ? () => {alert('Podes pasar wachin')} : () => {alert('A la casa')};

// ejercicio 4 (funciones)
const input = parseInt(prompt('Ingreswa un numero para saber si es par o impar'));

const parOImpar = (x) => {
  if (x % 2 === 0) return alert('si es');
  alert('No, no es');
}
parOImpar(input);
