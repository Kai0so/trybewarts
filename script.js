const getButton = document.querySelector('#login-button');
const getLogin = document.querySelector('#email-input');
const getPassword = document.querySelector('#password-input');
const trybeUser = 'tryber@teste.com';
const trybePassword = '123456';

function checkLogin() {
  const inputName = getLogin.value.trim();
  const inputPassword = getPassword.value.trim();
  if (inputName !== trybeUser || inputPassword !== trybePassword) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

getButton.addEventListener('click', checkLogin);
