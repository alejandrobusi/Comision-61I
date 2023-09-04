/*
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Se no ha resuelto la promesa');
  }, 3000);
});

promesa
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Finally');
  });
*/

const motos = [
  {
    id: 1,
    marca: 'Acme',
  },

  {
    id: 2,
    marca: 'KTM',
  },

  {
    id: 3,
    marca: 'Yamaha',
  },

  {
    id: 4,
    marca: 'Honda',
  },
];

//------- promesas
const searchMotoById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultMoto = motos.find((moto) => moto.id === id);
      if (resultMoto) {
        return resolve(resultMoto);
      }
      reject('Moto not found');
    }, 3000);
  });
};

// let moto;
// searchMotoById(2)
//   .then((response) => {
//     moto = response.marca;
//   })
//   .catch((err) => console.error(err))
//   .finally(() => console.log('Finaliza la promesa'));
// document.body.innerHTML = `<h1>${moto}</h1>`;

// console.log('hello');
/*
//----- Funciones asincronas
const asincronica = async () => {
  let moto;
  await searchMotoById(2)
    .then((response) => {
      moto = response.marca;
    })
    .catch((err) => console.error(err))
    .finally(() => console.log('Finaliza la promesa'));
  console.log('Estoy en la funcion asincrona');
  document.body.innerHTML = `<h1>${moto}</h1>`;
};

asincronica();
*/
//-------- Fetch

const promesaRick = fetch('https://rickandmortyapi.com/api/character');

promesaRick
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.error(err))
  .finally(() => console.log('Finaliza la promesa'));
