export class FormValidator {
    constructor(data, formValidSelector) {
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._formSelector = formValidSelector;
    }

    enableValidation() {
        const forms = Array.from(document.querySelectorAll(this._formSelector));
        forms.forEach((formElement) => {
                formElement.addEventListener('submit', (evt) => {
                evt.preventDefault;
            });
            this._setEventListeners(formElement);
        });
    } // запуск валидации 

    disableSubmitButton () {
        document.querySelector(this._submitButtonSelector).classList.add(this._inactiveButtonClass);
        document.querySelector(this._submitButtonSelector).disabled = true;
    }

    _setEventListeners = (formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        const saveButton = formElement.querySelector(this._submitButtonSelector);
        
        this._setButtonState(inputList, saveButton);
        inputList.forEach(input => {
            if (input.validity.valid) {
                this._hideError(formElement, input);
            }

            input.addEventListener('input', () => {
                this._checkInputValidity(formElement, input);
                this._setButtonState(inputList, saveButton);
            });
        });
    }

    _checkInputValidity = (formElement, input) => {
        this._checkTextValidity(input);
        this._checkUrlValidity(input);
        if (input.validity.valid) {
            this._hideError(formElement, input);
        } else {
            this._showError(formElement, input, input.validationMessage);
        }
    } // доавление или удаление сообщения об ошибке 

    _setButtonState = (inputList, saveButton) => {
        if (this._hasInvalidInput(inputList)) {
            saveButton.classList.add(this._inactiveButtonClass);
            saveButton.disabled = true;
        } else {
            saveButton.classList.remove(this._inactiveButtonClass);
            saveButton.disabled = false;
        }
    } // изменение состояния кнопки 

    _hasInvalidInput = (inputList) => {
        return inputList.some((input) => {
          return !input.validity.valid;
        })
    }; // проверка на присутствие валидных полей

    _showError = (formElement, input, errorMessage) => {
        const error = formElement.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        error.textContent = errorMessage;
        
    }// показ ошибки валидации 

    _hideError = (formElement, input) => {
        const error = formElement.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        error.textContent = "";
    }//скрытие ошибки валидации

    _checkTextValidity(input) {
        if (input.type === 'text' && input.value.length < 1) {
            input.setCustomValidity('Вы пропустили это поле')
        } else {
            input.setCustomValidity('')
        }
    } // кастомный текст для полей с "текстом"

    _checkUrlValidity(input) {
        if (input.type === 'url' && input.validity.typeMismatch === true) {
            input.setCustomValidity('Введите адрес сайта')
        }
    }// кастомный текст для полей с ссылкой

}