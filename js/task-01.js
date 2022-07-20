/* 
Напиши скрипт который:

1. Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item.
2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
текст заголовка элемента (тега <h2>) и количество элементов в категории 
(всех вложенных в него <li>).*/


const categoriesEl = document.querySelector('#categories');

const getItemsQuantity = list => {
  console.log (`Number of categories: ${list.children.length}`)
}

getItemsQuantity(categoriesEl);



const getItemsDescription = list => {

  const items = Array.from(list.children);

  const itemsDescription = items.forEach (item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
}) 
}

getItemsDescription(categoriesEl);

