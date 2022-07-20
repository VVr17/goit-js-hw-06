/* Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
проверяет его содержимое на правильное количество введённых символов.

1. Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
2. Если введено подходящее количество символов, то border инпута становится зелёным, 
если неправильное - красным.
3. Для добавления стилей, используй CSS-классы valid и invalid, 
которые мы уже добавили в исходные файлы задания.
*/

const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onValidationInputBlur)

function onValidationInputBlur(event) {

  const {
    value,
    dataset,
    classList,
  } = event.currentTarget;

  if (value.length === Number(dataset.length)) {

    if (classList.contains("invalid")) {
      classList.remove("invalid")
    }
    classList.add("valid");
    return;
  } 

  if (classList.contains("valid")) {
    classList.remove("valid")
  }
  classList.add("invalid");
}