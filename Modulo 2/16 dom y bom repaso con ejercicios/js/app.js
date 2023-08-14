/*
const TYME_IN_ML = 3000;

function log() {
  console.log('Hola');
}

const interval = setInterval(() => {
  console.log('Chau');
}, TYME_IN_ML);

const clearIntervalFunnctio = () => {
  clearInterval(interval);
};

// setTimeout(() => {
//   alert('Hola como va');
//   clearIntervalFunnctio();
// }, 5000);
//-------DOM--------//
// document.body.innerHTML = '<h1 class="display-3"> Hola vato </h1>';
// document.body.innerText = 'adios amigo';
console.log(document.getElementById('theH1')); //Este metodo no devuelve array
console.log(document.querySelectorAll('h1')); // Este metodo trae todos los elementos
console.log(document.querySelector('#theH1')); // Este metodo no devuelve un array y nos permite traer por id, clase o tag
console.log(document.getElementsByClassName('theP')); // Este metodo trae todos los elementos
console.log(document.getElementsByTagName('h1')); // Este metodo trae todos los elementos

//----creando elementos y agregando al dom----//

const pElement = document.createElement('p');
pElement.innerHTML = 'Hola soy el p creado por js';
// pElement.style = 'color: red;';
pElement.classList = 'claseP';

document.body.appendChild(pElement);

const isLogin = true;

if (isLogin) {
  const loginnButton = document.getElementById('loginButton');
  loginnButton.setAttribute('disabled', '');
  // loginnButton.classList = 'd-none';
}

const deleteItem = (i) => {
  alert(i);
};
const li = document.createElement('li');
li.innerHTML = 'test <button onclick=(deleteItem(1))> test</button>';
document.getElementById('lista').appendChild(li);

//--------clonar elementos---------//
// const elDiv = document.getElementById('theDiv');
// document.body.appendChild(elDiv.cloneNode(true));

const elDiv = document.getElementById('theDiv');
document.getElementById('theDiv').appendChild(elDiv.cloneNode(true));

//------remover item-----//

const img = document.getElementById('theImg');
let eliminado = document.body.removeChild(img);

setTimeout(() => {
  document.body.appendChild(img);
}, 5000);
*/
//------- ejercicio 3 -------//
/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. */

let taskList = [];
let auxIndex;

const addTask = () => {
  const newTask = document.getElementById('task').value;
  if (newTask.length === 0) {
    return alert('No ingresaste nada');
  }
  taskList.push(newTask);
  printListToDocumentAndOptions(taskList);
};

const printListToDocumentAndOptions = (list) => {
  let listToDelete = document.getElementById('taskListElement');
  listToDelete.innerHTML = '';
  if (list.length !== 0) {
    list.map((task, i) => {
      const li = document.createElement('li');
      li.innerHTML = `<div class='d-flex my-2 justify-content-between align-items-center'> ${task} 
      <div><button class=' mx-3 btn btn-danger btn-sm' onclick=(deleteItemList(${i}))>Eliminar</button> <button type="button" onclick=(saveIndexToEdit(${i})) class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#editTask">
      Editar
    </button></div></div></div>`;
      document.getElementById('taskListElement').appendChild(li);
    });
  }
};

const deleteItemList = (index) => {
  taskList.splice(index, 1);
  printListToDocumentAndOptions(taskList);
};

const saveIndexToEdit = (i) => (auxIndex = i);

const editTask = () => {
  const userInputTask = document.getElementById('newTask').value;
  if (userInputTask.length === 0) {
    return alert('No ingresaste nada');
  }
  taskList[auxIndex] = userInputTask;
  printListToDocumentAndOptions(taskList);
};
