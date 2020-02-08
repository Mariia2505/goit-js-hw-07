'use strict';

// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

const form = document.querySelector('input[data-length="6"]');

form.addEventListener('blur', () => {
  if (form.value.length === 6) {
    form.classList.remove('invalid');
    form.classList.add('valid');
    return
  }
  form.classList.add('invalid');

})