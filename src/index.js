import { inputsData } from './constants/index.js';
const form = document.createElement('form');
form.classList.add('form');

const register = document.createElement('h1');
register.classList.add('title');
register.textContent = 'Registration form';

form.appendChild(register);

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');
function createInputs(data) {
  const inputField = document.createElement('div');
  inputField.classList.add('input-field');

  data.forEach((data) => {
    const input = document.createElement('input');
    input.type = data.type;
    input.id = data.id;
    input.placeholder = data.placeholder;
    inputField.appendChild(input);
  });
  return inputField;
}
inputContainer.appendChild(createInputs(inputsData));
form.appendChild(inputContainer);

const cancelButton = document.createElement('button');
cancelButton.classList.add('button');
cancelButton.textContent = 'Cancel';

const okButton = document.createElement('button');
okButton.classList.add('button');
okButton.textContent = 'OK';

form.appendChild(cancelButton);
form.appendChild(okButton);

document.body.appendChild(form);

class Person {
  constructor(...args) {
    args.forEach(({ id, value }) => (this[id] = value));
  }
}

function collectProps(e) {
  e.preventDefault();
  const collectionsOfInputs = Array.from(
    document.querySelectorAll('.input-field > input')
  );
  const person = new Person(...collectionsOfInputs);
  //console.log(person);
  const jsonPerson = JSON.stringify(
    person,
    (key, value) => {
      return key === 'inputEmail' ? undefined : value;
    },
    2
  );
  localStorage.setItem(`${person.lName}`, jsonPerson);
}

okButton.addEventListener('click', collectProps);

const oPassword = document.querySelector('#passw');
const cPassword = document.querySelector('#cPassw');

const error = document.createElement('div');
error.classList.add('error-passw');
error.style.display = 'none';
cPassword.insertAdjacentElement('afterend', error);

function validatePassword() {
  if (oPassword.value !== cPassword.value) {
    error.textContent = 'Password do not match';
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }
}

cPassword.addEventListener('input', validatePassword);
