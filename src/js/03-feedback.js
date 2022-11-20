import throttle from 'lodash.throttle';
const refs = {
  textarea: document.querySelector('.feedback-form textarea'),
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
};

const dataForm = {};
const STORAGE_KEY = 'feedback-form-state';
populateTextarea();
// refs.textarea.addEventListener('input', throttle(onTexteriaInput, 740));
refs.form.addEventListener('input', throttle(onTexteriaInput, 740));
refs.form.addEventListener('submit', onFormSubmit);

function onTexteriaInput(e) {
  // console.log(e.target.name)

  dataForm[e.target.name] = e.target.value;
  stringDataForm = JSON.stringify(dataForm);
  localStorage.setItem(STORAGE_KEY, stringDataForm);
  // console.log(dataForm)
  // console.log(stringDataForm, "string")
  // const message = e.currentTarget.value;
  //  .setItem(STORAGE_KEY, message);
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
  // console.log(saveTexterea);
  refs.textarea.value = saveTexterea['message'] || '';
  refs.input.value = saveTexterea['email'] || '';
}
