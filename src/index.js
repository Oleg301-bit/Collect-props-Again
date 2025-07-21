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

const inputEmail = document.querySelector('#email');

class Person {
  constructor(fname, lname, name, email) {
    this.fname = fname;
    this.lname = lname;
    this.name = name;
    this.email = email;
  }
}

okButton.addEventListener('click', (e) => {
  e.preventDefault();

  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  const person = new Person(fname, lname, name, email);

  localStorage.setItem(lname.toLowerCase(), JSON.stringify(person));
  console.log(person);
});
