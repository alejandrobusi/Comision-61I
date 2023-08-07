// Clases antes de es6
/*
function Persona(nombre, apellido, edad) {
  this.name = nombre;
  this.lastName = apellido;
  this.age = edad;
  this.saludar = function () {
    console.log(`Hola, mi nombre es ${this.name}`);
  };
}

const persona2 = {
  name: 'ale',
  lastName: 'busi',
  age: 29,
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.name}`);
  },
};

const persona1 = new Persona('Sofi', 'Haiquel', 20);
persona1.saludar();
console.log(persona1);
*/
// Clases despues de es6

// class PersonaEs6 {
//   constructor(nombre, apellido, edad) {
//     this.name = nombre;
//     this.lastName = apellido;
//     this.age = edad;
//   }
//   saludar() {
//     console.log(`Hola, mi nombre es ${this.name}`);
//   }
//   get obtenerNombre() {
//     return this.name;
//   }
//   set cambiarNombre(nombre) {
//     this.name = nombre;
//   }
// }

// // Instanciar
// const personaConEs6 = new PersonaEs6('jose', 'arias', 30);
// personaConEs6.saludar();
// console.log(personaConEs6);
// personaConEs6.cambiarNombre = 'Ale';
// console.log(personaConEs6.obtenerNombre);

/* ejercicio 6
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Book {
  constructor(isbn, titulo, autor, numeroDePaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroDePaginas = numeroDePaginas;
  }
  set actualizarIsbn(nuevoIsbn) {
    this.isbn = nuevoIsbn;
  }
  get obtenerIsbn() {
    return this.isbn;
  }
  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numeroDePaginas}`
    );
  }
}

const book1 = new Book(46546546, 'El titulo piola', 'Ale Busi', 100);

book1.actualizarIsbn = 132123123;
console.log(book1.obtenerIsbn);
book1.mostrarLibro();
console.log(book1);
