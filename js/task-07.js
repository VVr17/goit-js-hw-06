const inputFontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputFontSizeControlRef.addEventListener('input', onFontSizeControlInput);

function onFontSizeControlInput(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}