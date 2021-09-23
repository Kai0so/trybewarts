const getButton = document.querySelector('#login-button');
const getLogin = document.querySelector('#email-input');
const getPassword = document.querySelector('#password-input');
const getSubmitButton = document.querySelector('#submit-btn');
const getInputCheckbox = document.querySelector('#agreement');
const getTextArea = document.querySelector('#textarea');
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

function checkBox() {
  const checkBoxContent = getInputCheckbox.checked;
  if (checkBoxContent === true) {
    getSubmitButton.disabled = false;
  } else {
    getSubmitButton.disabled = true;
  }
}

getInputCheckbox.addEventListener('input', checkBox);

function countDown(event) {
  const sub = event.target.maxLength - event.target.textLength;
  document.querySelector('#counter').innerHTML = `Máximo de caracteres: ${sub}`;
}

getTextArea.addEventListener('keyup', countDown);
