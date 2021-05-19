import { Card } from '../components/Card.js';
import { initialCards } from '../scripts/initial-сards.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js"
import UserInfo from "../components/UserInfo.js"
import {validationConfigProfile, validationConfigCard, formSelectorProfile, formSelectorCard} from '../scripts/validation-Data.js'
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
} from '../scripts/constants.js'
import '../pages/index.css'







// -----------------------------Валидация-------------------------
const formValidationProfile = new FormValidator(validationConfigProfile, formSelectorProfile);
formValidationProfile.enableValidation(); // запуск валидации провиля
const formValidationCard = new FormValidator(validationConfigCard, formSelectorCard);
formValidationCard.enableValidation(); // запуск валидации попапа новой карточки 
// -----------------------------Валидация-------------------------

function addCard(newCard) {
    initialSection.addNewItem(newCard);
} // добавление карточек

const createCard = (item) => {
    return new Card(item, '.card-template', cardImageClickHandler)
}

const initialSection = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = createCard(item)
        initialSection.addItem(card.generateCard());
    }
}, cardList)
initialSection.renderItems();

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
    formValidationProfile.disableSubmitButton();
}

const formSubmitAddHandler = (evt) => { 
    evt.preventDefault();
    const card = new Card({ name: popUpImageTitleInput.value, link: popUpImageLinkInput.value }, '.card-template', cardImageClickHandler)
    addCard(card.generateCard());
    addNewCardPopup.close();
    formAdd.reset();
    formValidationCard.disableSubmitButton();
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
