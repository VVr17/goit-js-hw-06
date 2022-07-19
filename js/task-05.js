const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', onNameInput)

function onNameInput(event) {

  refs.nameOutput.textContent = event.currentTarget.value.length !== 0 
    ? event.currentTarget.value
    : refs.nameOutput.textContent = 'Anonymous'
}