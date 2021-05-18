import { Card } from './Card.js';
import { initialCards } from './initial-сards.js';
import { FormValidator } from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from "./PopupWithForm.js";
import Section from "./Section.js"
import UserInfo from "./UserInfo.js"
import {validationConfigProfile, validationConfigCard} from './validation-Data.js'
import {
    editButton,
    editProfilePopup,
    newCardPopup,
    cardList,
    popupCardOpen,
    popupOpenImage,
    popUpImageTitleInput,
    popUpImageLinkInput,
    formAdd,
    popupUserName,
    popupUserDesc,
    profileSelectors,
    popupSaveButtonProfile,
    popupSaveButtonCard
} from './constants.js'
import '../pages/index.css'

// -----------------------------Валидация-------------------------
const formValidationProfile = new FormValidator(validationConfigProfile);
formValidationProfile.enableValidation(); // запуск валидации провиля
const formValidationCard = new FormValidator(validationConfigCard);
formValidationCard.enableValidation(); // запуск валидации попапа новой карточки 
// -----------------------------Валидация-------------------------

function addCard(newCard) {
    cardList.prepend(newCard);
} // добавление карточек

const generateInitCards = (cards) => {
    const initialSection = new Section({
        items: cards,
        renderer: (item) => {
            const card = new Card(item, '.card-template', cardImageClickHandler)
            initialSection.addItem(card.generateCard());
        }
    }, cardList)
    initialSection.renderItems();
}  // создание начальный карточек
generateInitCards(initialCards);

const userInfo = new UserInfo(profileSelectors);
editButton.addEventListener('click', function() {
    profileEditPopup.open();
    const newInfo = userInfo.getUserInfo();
    popupUserName.value = newInfo.name;
    popupUserDesc.value = newInfo.description;
});

const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const info = {
        name: popupUserName.value,
        description: popupUserDesc.value
    }
    userInfo.setUserInfo(info);
    profileEditPopup.close();
    popupSaveButtonProfile.classList.add('popup__button_invalid');
    popupSaveButtonProfile.disabled = true;
}

const formSubmitAddHandler = (evt) => { 
    evt.preventDefault();
    const card = new Card({ name: popUpImageTitleInput.value, link: popUpImageLinkInput.value }, '.card-template', cardImageClickHandler)
    addCard(card.generateCard());
    addNewCardPopup.close();
    formAdd.reset();
    popupSaveButtonCard.classList.add('popup__button_invalid');
    popupSaveButtonCard.disabled = true;
}  // добавление новой карточки 

const addNewCardPopup = new PopupWithForm(newCardPopup, formSubmitAddHandler) // форма новой карточки
addNewCardPopup.setEventListeners()
popupCardOpen.addEventListener('click', function () {
     addNewCardPopup.open()
})  
 
const profileEditPopup = new PopupWithForm(editProfilePopup, formSubmitHandler) // форма профиля
profileEditPopup.setEventListeners()
editButton.addEventListener('click', function () {
     profileEditPopup.open()
})

const popupWithImage = new PopupWithImage(popupOpenImage)  // большая картинка 
popupWithImage.setEventListeners()

function cardImageClickHandler(url, text) {  // изображение и текст для большой картики
    popupWithImage.open(url, text)
}