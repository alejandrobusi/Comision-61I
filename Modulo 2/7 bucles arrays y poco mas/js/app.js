// let inputUser = prompt('Ingresa tu frace').toLowerCase();
// let vocales = '';
// for (let i = 0; i < inputUser.length; i++) {
//   if (inputUser[i] === 'a' || inputUser[i] === 'e' || inputUser[i] === 'i' || inputUser[i] === 'o' || inputUser[i] === 'u') {
//     vocales = vocales + inputUser[i]
//   }
// }

// document.write(`<h3> Estas son las vocales encontradas ${vocales}.</h3>`);

let count = 1;
// while (count < 1000) {
//   console.log('Hola');
//   count++
// }

// do {
//   console.log('Hola');
//   count++
// } while (count <= 1000);


// arrays
let data = [12, 'texto', true, [1,2,3], {name: 'Ale'}];
// for (let i = 0; i < data.length; i++) {
//   if (Array.isArray(data[i])) {
//     for (let e = 0; e < data[i].length; e++) {
//       console.log(data[i][e])
//     }
//   }
// }
//Agregar elementos
data.push('hola');
//reasignar posición
data[0] = 10;
// reemplazar valor o agregar valor en el indice indicado
// data.splice(1,1,'ale');
// eliminar un elemennto especifico
data.splice(3);
console.log(data);





