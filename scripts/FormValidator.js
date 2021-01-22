class FormValidator {
    constructor(data) {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
    }

    enableValidation() {
        const forms = Array.from(document.querySelectorAll(this._formSelector));
        forms.forEach((formElement) => {
                formElement.addEventListener('submit', (evt) => {
                evt.preventDefault;
            });
            this._setEventListeners(formElement);
        });
    }

    _setEventListeners = (formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        const subminButton = formElement.querySelector(this._submitButtonSelector);
        
        this._setButtonState(inputList, subminButton);
        inputList.forEach(input => {
            if (input.value === '' || input.validity.valid) {
                this._hideError(formElement, input);
            }

            input.addEventListener('input', () => {
                this._checkInputValidity(formElement, input);
                this._setButtonState(inputList, subminButton);
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
    }

    _setButtonState = (inputList, subminButton) => {
        if (this._hasInvalidInput(inputList)) {
            subminButton.classList.add(this._inactiveButtonClass);
            subminButton.disabled = true;
        } else {
            subminButton.classList.remove(this._inactiveButtonClass);
            subminButton.disabled = false;
        }
    }

    _hasInvalidInput = (inputList) => {
        return inputList.some((input) => {
          return !input.validity.valid;
        })
    };

    _showError = (formElement, input, errorMessage) => {
        const error = formElement.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        error.textContent = errorMessage;
        
    }// показ ошибки валидации     error заменить на error

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
    }

}