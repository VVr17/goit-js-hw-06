/*
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн 
стиль при клике на button.change-color и выводит значение цвета в span.color.

Для генерации случайного цвета используй функцию getRandomHexColor.
*/

const changeColorBtnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtnRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  colorRef.textContent = color;
}

