const editButton = document.querySelector('.profile__edit-button');
const closeButtonProfile = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profileName = document.getElementById('name');
const description = document.getElementById('description');
const popupName = document.getElementById('popup-name');
const popupDescription = document.getElementById('popup-description');
const popupContainer = document.querySelector('.popup__container');
const nameValue = document.getElementById('popup-name');
const descriptionValue = document.getElementById('popup-description');
const cardList = document.querySelector('.elements');
const popupCard = document.querySelector('.popup_card');
const popupCardOpen = document.querySelector('.profile__add-button');
const popupCardClose = document.querySelector('[name="card-close-button"]');
const inputCardName = document.querySelector('[name="popup_name-card"]');
const inputCardLink = document.querySelector('[name="popup_link-card"]');
const saveButtonCard = document.querySelector('[name="card-save-button"]');
const popupOpenImage = document.querySelector('.popup_pic');
const popupCloseImage = document.querySelector('.popup__close-image-button');
const cardTemplate = document.querySelector('#card-template').content;
const popupOpened = document.querySelector('.popup_opened');
const popupImageName = document.querySelector('.popup__figcaption');
const popupImageLink = document.querySelector('.popup__image');


class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

     _getTemplate() {
        const cardElement = document.getElementById('card-template').content.cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', (evt) =>
            evt.target.classList.toggle('element__like-button_active'));
        
        this._element.querySelector('.element__delete-button').addEventListener('click', function (evt) {
            const card = evt.target.closest('.element');
            card.remove();
        })
        this._element.querySelector('.element__photo').addEventListener('click', () => this._openCardImage());
    }

    _openCardImage() {
        popupImageName.textContent = this._name;
        popupImageLink.src = this._link;
        openPopup(popupOpenImage);
    }

}

initialCards.forEach((initialCard) => {
    const card = new Card(initialCard, 'card-template');
    const cardElement = card.generateCard();

    document.querySelector('.elements').append(cardElement);
}) // создание первоначальных карточек 







function openPopup(popup) {
    popup.classList.add('popup_opened');
    
    const formValidation = new FormValidator(validationConfig);
    formValidation.enableValidation();

    document.addEventListener('keyup', escapePopup);
    document.addEventListener('click', clickOutside);
} // открытие попапа

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', escapePopup);
    document.removeEventListener('click', clickOutside);
} // закрытие попапа

function checkClass(popup) {
    return popup.classList.contains('popup_opened');
} //проверка на класс

function escapePopup(evt) {
    const popupIsOpened = document.querySelector('.popup_opened');
    if (evt.key === "Escape") {
        closePopup(popupIsOpened);
    }
} // закрытие попапа по нажанию кнопки "Escape"

function clickOutside(evt) {
    if (checkClass(evt.target)) {
        closePopup(evt.target);
    };
}; // закрытие попапа с картинкой по клику 

popupCloseImage.addEventListener('click', function (evt) {
    const image = evt.target.closest('.popup');
    closePopup(image);
}) //закрытие попапа по клику на крестик


// -----------------------Профиль---------------------
function openProfilePopup() {
    popupName.value = profileName.innerText;
    popupDescription.value = description.innerText;
    openPopup(popup);
}

function closeProfilePopup() {
    closePopup(popup);
}

function handleProfileSubmit (evt) {
    evt.preventDefault();   
    profileName.textContent = nameValue.value;;
    description.textContent = descriptionValue.value;
    closeProfilePopup();
}
// ---------------------Профиль--------------------------

// ----------------------Закрыть попап новой карточки через крестик----------

function closeCardForm() {
    closePopup(popupCard);
}
// ----------------------Закрыть попап новой карточки через крестик----------



function addNewCard (evt){
    evt.preventDefault();
    const item = {
        name: inputCardName.value,
        link: inputCardLink.value
    }                                                                                
    const newCard = new Card(item, 'card-template')
    const newCardElement = newCard.generateCard();
    cardList.prepend(newCardElement);
    closeCardForm();
    popupContainer.reset();
}// Новая карточка


editButton.addEventListener ('click', openProfilePopup);
closeButtonProfile.addEventListener ('click', closeProfilePopup);
popupContainer.addEventListener('submit', handleProfileSubmit);
popupCardOpen.addEventListener('click', () => openPopup(popupCard));
popupCardClose.addEventListener('click', closeCardForm);
saveButtonCard.addEventListener('click', addNewCard);









const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error',
}; 


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