// Изменение темы страницы
const boxSwitch = document.querySelector('.box-switch');
const body = document.querySelector('body');

boxSwitch.addEventListener('click', () => {  //при событии клик, тема сайта меняется на светлую
  body.classList.toggle('light');
});

// Слушатель событий
const sernameInput = document.getElementById('sername');
const nameInput = document.getElementById('name');
const fathernameInput = document.getElementById('fathername');

const sernamePerson = document.getElementById('sername-person');
const namePerson = document.getElementById('name-person');
const fathernamePerson = document.getElementById('fathername-person');

sernameInput.addEventListener('input', () => {
  sernamePerson.textContent = sernameInput.value;
});

nameInput.addEventListener('input', () => {
  namePerson.textContent = nameInput.value;
});

fathernameInput.addEventListener('input', () => {
  fathernamePerson.textContent = fathernameInput.value;
});