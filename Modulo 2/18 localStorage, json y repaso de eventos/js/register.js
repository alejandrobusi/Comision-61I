import { users } from './users.js';

const MESSAGE_PASS_REQUIREMENTS =
  'La contraseña debe tener entre 4 y 8 dígitos e incluir al menos un dígito numérico.';

const userRegister = (e) => {
  e.preventDefault();
  const messageElement = document.getElementById('message');
  messageElement.textContent = '';
  //---obtener informacion de los inputs
  const email = document.getElementById('email').value;
  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;
  const passwordCheck = document.getElementById('passwordCheck').value;
  //----validaciones regex
  const validationEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validationPassword = /^(?=.*\d).{4,8}$/;

  //-----regex test and validations
  const userExist = users.some((user) => user.email === email);
  if (userExist) return alert('El usuario ya se encuentra registrado.');
  if (!validationEmail.test(email))
    return alert('El formato de email es incorrecto.');
  if (password !== passwordCheck) return alert('Las contraseñas no coinciden.');
  if (!validationPassword.test(password)) {
    return (messageElement.textContent = MESSAGE_PASS_REQUIREMENTS);
  }

  const newUser = {
    email,
    userName,
    password,
    date: new Date(),
  };

  alert('Registro exitoso');
  window.location.href = './login.html';
};

const formRegister = document.getElementById('registerForm');
formRegister.addEventListener('submit', userRegister, false);
/*
//------JSON
const test = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/',
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
};
const testJSON = JSON.stringify(test);
console.log(testJSON);

const testDesJson = JSON.parse(testJSON);
console.log(testDesJson);

//------localStorage

//-----Añadir elementos al local storage
localStorage.setItem('userName', 'AleBusi');

//----- obtener elemento del local storage
console.log(localStorage.getItem('userName'));

//-----vaciar el local storage
// localStorage.clear();

//----- eliminar un una key especifica

localStorage.removeItem('userName');
*/

// console.log(JSON.parse(localStorage.getItem('userLog')).userName);
