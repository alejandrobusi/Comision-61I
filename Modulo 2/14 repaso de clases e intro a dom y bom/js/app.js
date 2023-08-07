/*
function Persona(nombre, apellido, edad) {
  this.name = nombre;
  this.lastName = apellido;
  this.age = edad;
  this.saludar = function () {
    alert(`Hola, me llamo ${this.name}`);
  };
}

const persona1 = new Persona('ale', 'busi', 29);

console.log(persona1);


//------------Con es6-------------//

class Persona {
  constructor(nombre, edad) {
    this.name = nombre;
    this.age = edad;
  }
  saludar = function () {
    alert(`Hola, me llamo ${this.name}`);
  };
  set setNewName(value) {
    this.name = value;
  }
  get getName() {
    const objectReturn = {
      name: this.name,
      age: this.age,
    };
    return objectReturn;
  }
}

// const personas = [
//   {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Madrid',
//     ocupacion: 'Ingeniero',
//   },
//   {
//     nombre: 'María',
//     edad: 28,
//     ciudad: 'Barcelona',
//     ocupacion: 'Abogada',
//   },
//   {
//     nombre: 'Carlos',
//     edad: 25,
//     ciudad: 'Valencia',
//     ocupacion: 'Estudiante',
//   },
//   {
//     nombre: 'Ana',
//     edad: 35,
//     ciudad: 'Sevilla',
//     ocupacion: 'Médico',
//   },
// ];

// const nuevasPersonas = personas.map(({ nombre, edad }) => {
//   return new Persona(nombre, edad);
// });

// console.log(nuevasPersonas);

const personita1 = new Persona('Ale', 29);

//-------Herencia-------//
/*
class Animal {
  constructor(name) {
    this.name = name;
  }
  emitirSonido() {
    console.log('reproduciendo el sonido');
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  moverse() {
    console.log('Me he movido');
  }
}

const myDog = new Dog('dug', 2);
console.log(myDog);

//------polimorfismo--------//

class Dog {
  speak() {
    console.log('guau guau');
  }
}

class Cat {
  speak() {
    console.log('miau miau');
  }
}

function animalSpeak(animal) {
  animal.speak();
}

const myDog = new Dog();
const myCat = new Cat();

animalSpeak(myCat);
animalSpeak(myDog);
*/

//------Ejercicios------//

/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.



class Persona {
  constructor(nombre, edad, dni, sexo, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
  mostrarGen() {
    switch (true) {
      case this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010:
        alert(
          `${this.nombre} Pertenece a la generacion Z (expansion masiva de internet).\nSu rasgo caracteristico es la irreverencia`
        );
        break;

      default:
        break;
    }
  }
}

const personilla = new Persona('Jose', 25, 38777777, 'H', 1.75, 1993);
*/

//----Dom y Bom-----//
console.log(window.screen);
// console.log(window.location.reload());
// window.location.replace('https://www.google.com.ar');
// window.location.href = 'https://www.google.com.ar';

//

function consoleMessage() {
  console.log('estamos en un setInterval');
}

window.setInterval(consoleMessage(), 500);
