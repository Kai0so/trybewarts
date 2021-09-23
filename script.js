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

getSubmitButton.disabled = true;

getInputCheckbox.addEventListener('input', function(event) {
  let conteudo = getInputCheckbox.value;
  if (conteudo === 'true') {
    getSubmitButton.disabled = false;
  } else if (conteudo === 'unchecked') {
    getSubmitButton.disabled = true;
  } 
})

getTextArea.addEventListener('keyup', function(event){
  let sub = event.target.maxLength - event.target.textLength;
  document.querySelector('#counter').innerHTML = `Máximo de caracteres: ${sub}`;
});
