import { usuarios, alerta } from './users.js';

const loginCheck = (e) => {
  e.preventDefault();
  document.getElementById('message').textContent = '';
  //----traemos los datos de los inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  //-----chequeamos que el usuario exista o no y lo recuperamos en caso de que exista.
  const userExist = usuarios.find((user) => user.email === email);
  //------ verificar existencia con un if para alertar o no.
  if (!userExist)
    return (document.getElementById('message').textContent =
      'El usuario no existe');
  //------ ya que sabemos que el usuario existe podemos hacer la comparacion de email y contraseña. de lo contrario retornamos un mensaje erroneo al usuario
  if (userExist.email === email && userExist.password === password) {
    window.location.href = './index.html';
  } else {
    document.getElementById('message').textContent =
      'Usuario o contraseña erroneo';
  }
};

document
  .getElementById('loginForm')
  .addEventListener('submit', loginCheck, false);
