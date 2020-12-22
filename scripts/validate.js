const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error',
}; 

function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
}// показ ошибки валидации 

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    input.classList.remove(config.inputErrorClass);
}//скрытие ошибки валидации

function checkInputValidity(form, input, config) {
    checkTextValidity(input);
    checkUrlValidity(input)
    if (input.validity.valid) {
        hideError(form, input, config);
    } else {
        showError(form, input, config);
    }
} //проверка для показа или скрытия ошибки валидации



function setButtonState(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = true;
    }
} //Состояние кнопки (вкл/выкл)

function setEventListener(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);
    const subminButton = form.querySelector(config.submitButtonSelector);
    
    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input, config)
            setButtonState(subminButton, form.checkValidity(), config);
        })
    });
}// находит все формы и обрабатывает их 

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        setEventListener(form, config)
        form.addEventListener('submit', (evt) => {
            evt.preventDefault;
            console.log('форма отправлена');
        });
        const subminButton = form.querySelector(config.submitButtonSelector);
        setButtonState(subminButton, form.checkValidity(), config); 
    });
} //Вызывает валидацию

function checkTextValidity(input) {
    if (input.type === 'text' && input.value.length < 1) {
        input.setCustomValidity('Вы пропустили это поле')
    } else {
        input.setCustomValidity('')
    }
} // кастомный текст для полей с "текстом"

function checkUrlValidity(input) {
    if (input.type === 'url' && input.validity.typeMismatch === true) {
        input.setCustomValidity('Введите адрес сайта')
    }
} // кастомный текст для URL. (пока так, не знаю какое правильно задать условие. Изменю в будущем, как узнаю =) )
// Я просто думал что там через паттерны или регулярные выражения, которые мы пока не знаем)
// А тут все оказалось проще)


