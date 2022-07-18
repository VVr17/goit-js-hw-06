
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

