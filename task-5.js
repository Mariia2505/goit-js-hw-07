'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


input.addEventListener('input', () => {
  if (!input.value.length) {
    output.textContent = 'незнакомец';
    return;
  }
  output.textContent = input.value;

});