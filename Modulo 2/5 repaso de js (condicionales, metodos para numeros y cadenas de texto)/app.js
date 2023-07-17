// let firstName = 'Alejandro';
// console.log(firstName);
// let lastName; 


// const nombre = 'rodri';

// firstName = 'hugo'
// console.log(nombre);


// let string = '54';
// let numbers = 54;
// let number2 = 10;
// // let result = numbers + number2
// // console.log( result );
// let booleanVar = false;
// console.log(number2 % 8);


// let age = 21;
// // age++;
// age--;
// console.log({age : age});

let isMajor = false;
// console.log(!isMajor); 

const numero1 = 8;
const numero2 = '7';
const numero3 = 6;
// console.log(numero1 == numero2); // igual a
// console.log(numero1 === numero2); // Estrictamente igual

// console.log( numero1 != numero2 ); //diferente de
// console.log( numero1 !== numero2 );//estrictamente diferente de

// console.log(numero1  >  numero3); // mayor que
// console.log(numero1  <  numero3); // menor que

// console.log(numero1 >= numero3) //mayor igual
// console.log(numero1 <= numero3) //menor igual

// operadores logicos

// console.log(numero1 > numero2 && !numero2 < numero3); // AND
// // console.log(numero1 > numero2 || numero2 < numero3); // OR

/*
// metodos para numeros
//toFixed
let num = 1.23423.toFixed(2);
console.log(num);
//parseInt
const numeroParseadoAEntero = parseInt(numero2);
console.log(numeroParseadoAEntero);
//parseFloat
const numeroParseadoFloat = parseFloat(num);
console.log(numeroParseadoFloat);
//Math
console.log(Math.abs(-10))
console.log(Math.round(1.49));
console.log(Math.random());
console.log(Math.max(10,15,102));
console.log(Math.min(15,-25,-8));

console.log(Number.isInteger(1.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(5.1));
*/

// metodos para string

const str = 'Hola Mundo';
const str2 = 'Que onda';
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.concat(str2))

console.log(str.slice(0,10));

console.log(str.indexOf('o'));

const newStr = str.replace('Mundo','Gato');
console.log(newStr);
