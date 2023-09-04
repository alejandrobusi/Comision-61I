import navbar from '../components/navbar.js';
import { users } from './users.js';
import { messages, getFormData } from './utils.js';

document.addEventListener('DOMContentLoaded', navbar);

const createUser = async (body) => {
  try {
    const resp = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    window.location.href = './login.html';
  } catch (error) {
    console.log(error);
  }
};

const userRegister = (e) => {
  e.preventDefault();

  const messageElement = document.getElementById('message');
  messageElement.textContent = '';
  //---obtener informacion de los inputs

  const formData = getFormData(e);

  //----validaciones regex
  const validationEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validationPassword = /^(?=.*\d).{4,8}$/;

  //-----regex test and validations
  const userExist = users.some((user) => user.email === formData.email);
  if (userExist)
    return (messageElement.textContent = messages.userAlreadyExist);

  if (!validationEmail.test(formData.email))
    return (messageElement.textContent = messages.emailFormatBad);

  if (formData.password !== formData.passwordCheck)
    return (messageElement.textContent = messages.passwordCheckbad);

  if (!validationPassword.test(formData.password)) {
    return (messageElement.textContent = messages.passwordRequirements);
  }

  const newUser = {
    ...formData,
    date: new Date(),
  };
  try {
    createUser(newUser);
  } catch (error) {
    console.log(error);
  }
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
localStorage.setItem('userName', testJSON);

//----- obtener elemento del local storage
console.log(localStorage.getItem('userName'));

//-----vaciar el local storage
// localStorage.clear();

//----- eliminar un una key especifica

localStorage.removeItem('userName');

// console.log(JSON.parse(localStorage.getItem('userLog')).userName);
*/
