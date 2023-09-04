import { getFormData, messages } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('userLog')) {
    Swal.fire({
      title: messages.userAlreadyLog,
      text: messages.closeSessionPrompt,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Ir al inicio',
      confirmButtonText: 'Si, deseo cerrar la cuenta!',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userLog');
      } else {
        window.location.href = './index.html';
      }
    });
  }
});

const loginCheck = async (e) => {
  e.preventDefault();
  const messageForm = document.getElementById('message');
  messageForm.textContent = '';

  //----traemos los datos de los inputs
  const formObject = getFormData(e);

  //-----chequeamos que el usuario exista o no y lo recuperamos en caso de que exista.
  try {
    const resp = await fetch(
      `http://localhost:3000/users?email=${formObject.email}`
    );
    const data = await resp.json();
    const userExist = data[0] || [];
    if (userExist.length === 0)
      return (messageForm.textContent = messages.userNotExist);
    if (
      userExist.email === formObject.email &&
      userExist.password === formObject.password
    ) {
      localStorage.setItem('userLog', JSON.stringify(userExist));
      window.location.href = './index.html';
    } else {
      messageForm.textContent = messages.userOrPasswordBad;
    }
  } catch (error) {
    console.log(error);
  }

  //------ verificar existencia con un if para alertar o no.
  //------ ya que sabemos que el usuario existe podemos hacer la comparacion de email y contraseña. de lo contrario retornamos un mensaje erroneo al usuario
};

document
  .getElementById('loginForm')
  .addEventListener('submit', loginCheck, false);
