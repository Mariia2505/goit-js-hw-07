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
// const items = [];

const items = ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  return item;
});
// console.log(ingredients);

// const items = ingredients.reduce((acc, element) => {
//     const item = document.createElement('li');
//     item.textContent = element;
//     return acc = [...acc, item];
//   },
//   []);
list.append(...items);