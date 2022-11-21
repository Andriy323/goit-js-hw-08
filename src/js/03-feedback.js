import throttle from 'lodash.throttle';
const refs = {
  textarea: document.querySelector('.feedback-form textarea'),
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
};

// refs.textarea.addEventListener('input', throttle(onTexteriaInput, 740));
refs.form.addEventListener('input', throttle(onTexteriaInput, 740));
refs.form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

// Варіант 1
const valueDataForm = localStorage.getItem(STORAGE_KEY);
let dataForm = valueDataForm ? JSON.parse(valueDataForm) : {};

// Варіант 2
// let dataForm =  JSON.parse(valueDataForm) || {}

populateTextarea();

function onTexteriaInput(e) {
  dataForm[e.target.name] = e.target.value;
  const stringDataForm = JSON.stringify(dataForm);

  localStorage.setItem(STORAGE_KEY, stringDataForm);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const saveTexterea = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveTexterea === null) {
    return;
  }
  refs.textarea.value = saveTexterea['message'] || '';
  refs.input.value = saveTexterea['email'] || '';
}
