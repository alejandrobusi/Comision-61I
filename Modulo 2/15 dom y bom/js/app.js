// console.log(document);
// console.log(window);

//------BOM------//

// console.log(window.navigator);
/*
console.log(window.location);

if (window.location.protocol !== 'http') {
  alert('Esta pagina no es segura');
  const response = confirm('Quieres salir de la paginnna?');
  if (response) {
    window.location.href = 'https://www.google.com.ar';
  }
} else {
  alert('Esta pagina si es segura');
}
const statusCode = 200;
if (statusCode === 200) {
  console.log('todo ok');
} else {
  window.location.href = 'http://localhost:5500';
}
console.log(window.location.hostname);

// console.log(window.history);
// const newUrl = new URL(window.location.href);
// newUrl.searchParams.set('test', 'https://www.google.com.ar');
// window.history.replaceState(null, newUrl);
//------- Funciones de tiempo ------//

// window.setInterval(() => {
  //   console.log('estamos en el interval');
  // }, 2000);
  
  const bucle = setInterval(() => {
    console.log('estamos en el interval');
  }, 1000);
  
  const detenerBucle = () => {
    window.clearInterval(bucle);
    console.log('Se ha etenido el bucle');
  };
  
  window.setTimeout(detenerBucle, 5000);
  */

//------DOM-------//

// document.body.innerHTML = 'ejemplo';
/*
console.log(document.getElementById('titulo'));
console.log(document.querySelector('.button'));
console.log(document.querySelector('.boton'));
console.log(document.getElementsByClassName('boton'));
console.log(document.getElementsByTagName('h1'));
*/
// let myp = document.createElement('p');
// myp.innerHTML = 'Ya tengo un valor asignado';
// myp.style.color = 'blue';
// document.body.appendChild(myp);
// console.log(myp);

let body = document.querySelector('body');
body.style.color = 'red';
document.querySelector('html').appendChild(body);

let div = document.querySelector('.container');
document.querySelector('footer').appendChild(div.cloneNode(true));

const readName = () => {
  let random = Math.round(Math.random() * 10);
  let inputnNumber = parseInt(document.getElementById('number').value);
  if (random === inputnNumber) {
    alert('si es igual');
  } else {
    alert('No es igual');
  }
};
