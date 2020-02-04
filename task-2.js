'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
const items = [];

ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  items.push(item);
});

list.append(...items);

console.log(items);
