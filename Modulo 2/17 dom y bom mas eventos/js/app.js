const test = () => {
  console.log('hey');
};

const test2 = () => {
  console.log('hiciste click');
};

const inputTest = (value) => {
  console.log(value);
};

const buttonClick = () => console.log('Hiciste click');
let button = document.getElementById('button1');
button.addEventListener('click', buttonClick, false);
