const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredientsItems = ingredients => {

  return ingredients.map( ingredient => {

  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  
  return item;
})
}

ingredientsEl.append(...makeIngredientsItems(ingredients));
