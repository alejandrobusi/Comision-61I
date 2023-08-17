const userData = JSON.parse(localStorage.getItem('userLog'));

if (userData) {
  document.getElementById(
    'saludo'
  ).textContent = `Bienvenido ${userData.userName}`;
}
