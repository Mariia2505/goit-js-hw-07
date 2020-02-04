'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


input.addEventListener('input', () => {
  if (input.value.length === 0) {
    output.textContent = 'незнакомец';

  } else {
    output.textContent = input.value;
  }
});