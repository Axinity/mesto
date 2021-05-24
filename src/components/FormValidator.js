export class FormValidator {
    constructor(data, formElement) {
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._formElement = formElement;
        this._submitButton = document.querySelector(this._submitButtonSelector);
    }

    enableValidation() {
         this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
         });
        this._setEventListeners(this._formElement);
    } // запуск валидации 

    disableSubmitButton () {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }

    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const saveButton = this._formElement.querySelector(this._submitButtonSelector);   
        this._setButtonState(inputList, saveButton);
        inputList.forEach(input => {
            if (input.validity.valid) {
                this._hideError(input);
            }

            input.addEventListener('input', () => {
                this._checkInputValidity( input);
                this._setButtonState(inputList, saveButton);
            });
        });
    }

    _checkInputValidity = ( input) => {
        this._checkTextValidity(input);
        this._checkUrlValidity(input);
        if (input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input, input.validationMessage);
        }
    } // доавление или удаление сообщения об ошибке 

    _setButtonState = (inputList, saveButton) => {
        if (this._hasInvalidInput(inputList)) {
            this.disableSubmitButton();
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

    _showError = ( input, errorMessage) => {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        error.textContent = errorMessage;       
    }// показ ошибки валидации 

    _hideError = (input) => {
        const error = this._formElement.querySelector(`#${input.id}-error`);
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