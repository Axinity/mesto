import { Card } from './Card.js';
import { initialCards } from './initial-сards.js';
import { FormValidator } from './FormValidator.js';

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
const popupCloseImage = document.querySelector('.popup__close-image-button');
export const popupImageName = document.querySelector('.popup__figcaption');
export const popupImageLink = document.querySelector('.popup__image');
export const popupOpenImage = document.querySelector('.popup_pic');


const validationConfigProfile = {
  formSelector: '.popup__profile-valid',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error',
};// data для валидации

const validationConfigCard = {
  formSelector: '.popup__new-card-valid',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error',
};

initialCards.forEach((initialCard) => {
    const card = new Card(initialCard, 'card-template');
    const cardElement = card.generateCard();

    cardList.append(cardElement);
}) // создание первоначальных карточек 

const formValidationProfile = new FormValidator(validationConfigProfile);
formValidationProfile.enableValidation(); // запуск валидации провиля
const formValidationCard = new FormValidator(validationConfigCard);
formValidationCard.enableValidation(); // запуск валидации попапа новой карточки 


export function openPopup(popup) {
    popup.classList.add('popup_opened');
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
    }
} // закрытие попапа с картинкой по клику 

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
    profileName.textContent = nameValue.value;
    description.textContent = descriptionValue.value;
    closeProfilePopup();
}
// ---------------------Профиль--------------------------

function closeCardForm() {
    closePopup(popupCard);
} // Закрыть попап новой карточки через крестик

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
