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

// list.appendChild(...items);  // почему-то не хочет апендить больше одного элемента

for (let i = 0; i < items.length; i++) {
  list.appendChild(items[i])
}

console.log(items);