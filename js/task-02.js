/* 
Напиши скрипт, который для каждого элемента массива ingredients:

1. Создаст отдельный элемент <li>. Обзательно используй метод
document.createElement().
2. Добавит название ингредиента как его текстовое содержимое.
3. Добавит элементу класс item.
4. После чего вставит все <li> за одну операцию в список 
ul#ingredients.*/

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
