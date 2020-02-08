'use strict';
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const span = document.querySelector('#value');
let counterValue = Number(span.textContent);

const increment_btn = document.querySelector('button[data-action="increment"]');
const decrement_btn = document.querySelector('button[data-action="decrement"]');

function increment() {
  // counterValue += 1;
  span.textContent = counterValue += 1;
}

function decrement() {
  // counterValue -= 1;
  span.textContent = counterValue -= 1;
}

increment_btn.addEventListener('click', increment);
decrement_btn.addEventListener('click', decrement);