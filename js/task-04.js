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