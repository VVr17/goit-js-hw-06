/* 
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

1. Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

2. Размеры самого первого <div> - 30px на 30px.
3. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
4. Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
тем самым удаляя все созданные элементы.

*/

const refs = {
  inputAmount: document.querySelector('input[type="number"]'),
  createBoxesBtn: document.querySelector('button[data-create]'),
  destroyBoxesBtn: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
}


refs.createBoxesBtn.addEventListener('click', createBoxes);
refs.destroyBoxesBtn.addEventListener('click', destroyBoxes);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes() {
  let amount = refs.inputAmount.value;
  let boxes = [];

  if (!amount || amount > Number(refs.inputAmount.max)) {
    alert(`Please, enter number from 1 to ${refs.inputAmount.max}`);
    refs.inputAmount.value = '';
    return;
  }

  if (amount) {
    destroyBoxes();
  }


  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const size = 30 + i * 10;

    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;

    boxes.push(box);
  }

  refs.boxesContainer.append(...boxes);
  refs.inputAmount.value = '';
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}
