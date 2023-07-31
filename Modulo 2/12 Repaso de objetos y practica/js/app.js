// const llaves = Object.keys(auto);
// for (let i = 0; i < llaves.length; i++) {
//   const llave = llaves[i];
//   console.log(`${llaves[i]}: ${auto[llave]}`);
// }

const personas = [
  {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    ocupacion: 'Ingeniero',
  },
  {
    nombre: 'María',
    edad: 28,
    ciudad: 'Barcelona',
    ocupacion: 'Abogada',
  },
  {
    ciudad: 'Valencia',
    ocupacion: 'Estudiante',
  },
  {
    nombre: 'Ana',
    edad: 35,
    ciudad: 'Sevilla',
    ocupacion: 'Médico',
  },
];

const showPeople = (list) => {
  list.forEach((persona) => {
    console.group(
      `Nombre: ${persona.nombre ? persona.nombre.toLowerCase() : 'Sin data'}`
    );
    console.log(`Edad: ${persona.edad ? persona.edad : 'Sin data'}`);
    console.log(`Ciudad: ${persona.ciudad}`);
    console.log(`Ocupación: ${persona.ocupacion}`);
    console.groupEnd();
  });
};

// showPeople(personas)

const auto = {
  color: 'negro',
  marca: 'Fiat',
  modelo: 2023,
  tocarBocina: (sonido = 'beep beep') => {
    alert(sonido);
  },
};

// auto.tocarBocina('dale gil');

// Crear un objeto "Cuenta Bancaria" con métodos para depósito y retiro

const cuentaBancaria = {
  saldo: 1000,
  deposito: function (x) {
    this.saldo = this.saldo + x;
    console.log(`El saldo actual es de $${this.saldo}`);
  },
  extraer: function (x) {
    this.saldo = this.saldo - x;
    console.log(`El saldo actual es de $${this.saldo}`);
  },
  consultarSaldo: function () {
    console.log(`El saldo actual es de $${this.saldo}`);
  },
};

cuentaBancaria.deposito(1000);

const nombre = 'Ale';

console.log(`Hola, soy ${nombre}`);
