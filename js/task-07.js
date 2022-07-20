/*
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль
span#text обновляя свойство font-size. В результате при перетаскивании 
ползунка будет меняться размер текста.
*/

const inputFontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputFontSizeControlRef.addEventListener('input', onFontSizeControlInput);

function onFontSizeControlInput(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}