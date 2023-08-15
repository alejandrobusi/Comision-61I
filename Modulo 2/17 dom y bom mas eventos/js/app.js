const test = () => {
  console.log('hey');
};

const test2 = () => {
  console.log('hiciste click');
};

const inputTest = (value) => {
  console.log(value);
};
//--------agregar evento
const buttonClick = () => console.log('Hiciste click');
let button = document.getElementById('button1');
button.addEventListener('click', buttonClick, false);
//--------eliminar evento
setTimeout(() => button.removeEventListener('click', buttonClick, false), 2000);
//------cambiar color con eventos del mouse
const div = document.getElementById('myDiv');
div.addEventListener('mouseenter', () => {
  div.style.backgroundColor = 'red';
});
div.addEventListener('mouseleave', () => {
  div.style.backgroundColor = 'blue';
});
//-------confirmar para cerrar ventana

// window.addEventListener('beforeunload', (event) => {
//   event.preventDefault();
//   event.returnValue = '';
// });

//----------eventos del teclado
const inputText = document.getElementById('myInput');
const textP = document.getElementById('myP');

inputText.addEventListener('keyup', (e) => {
  textP.textContent = `Texto ingresado = ${e.target.value}`;
});
