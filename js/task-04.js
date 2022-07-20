/*  
Счетчик состоит из спана и кнопок, которые, при клике, 
должны увеличивать и уменьшать его значение на единицу.

1. Создай переменную counterValue в которой будет храниться текущее 
значение счетчика и инициализируй её значением 0.
2. Добавь слушатели кликов на кнопки, внутри которых увеличивай
 или уменьшай значение счтетчика.
3. Обновляй интерфейс новым значением переменной counterValue
*/


let counterValue = 0;

const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('#value'),
}

refs.decrement.addEventListener('click', onDecrementClick)
refs.increment.addEventListener('click', onIncrementClick)


function onDecrementClick() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}