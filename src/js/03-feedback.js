var throttle = require('lodash.throttle');
const formEl = document.querySelector('.feedback-form');

let userFeedback = {}; //об'єкт де зберігаються дані

initPage(); //виклик функції при завантаженні сторінки

// при завантаженні сторінки
function initPage() {
  const savedFeedbackData = gettingItem('feedback-form-state');

  // якщо в localStorage нічого нема
  if (!savedFeedbackData) {
    return;
  }

  // якщо в localStorage є дані - вносимо їх в поля
  Object.entries(savedFeedbackData).forEach(([name, value]) => {
    formEl.elements[name].value = value;
  });
}

// записуємо значення інпутів в localStorage
function onInput(e) {
  const { name, value } = e.target;
  userFeedback[name] = value;
  settingItem('feedback-form-state', userFeedback);
  // localStorage.setItem('feedback-form-state', JSON.stringify(userFeedback));

  console.log(userFeedback);
}

function onSubmit(e) {
  e.preventDefault();

  if (e.target.email.value === '' || e.target.message.value === '') {
    alert('Alert! All fields should be filled in!');
    return;
  }
  console.log(userFeedback);
  removingItem('feedback-form-state');
  // localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
  userFeedback = {};
}

// події
// formEl.addEventListener('input', onInput);
formEl.addEventListener('input', throttle(onInput, 500));
// formEl.on('input', _.throttle(onInput, 500));

formEl.addEventListener('submit', onSubmit);

// try/catch
function settingItem(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}

function gettingItem(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}

function removingItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}
