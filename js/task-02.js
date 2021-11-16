const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const addItems = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = ingredient;
  return newEl;
});
addItems.append(...elements);
