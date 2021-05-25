import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithSubmit from '../components/PopupWithSubmit';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import Api from '../components/Api.js';
import Section from "../components/Section.js"
import UserInfo from "../components/UserInfo.js"
import {validationConfigProfile, validationConfigCard, validationConfigAvatar, formSelectorProfile, formSelectorCard, formSelectorAvatar} from '../scripts/validation-Data.js'
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
    deleteCardPopup,
    popupAvatarUpdateButton,
    profileAvatar,
    profileAvatarButton
} from '../scripts/constants.js'
import '../pages/index.css'
let initialSection;
let userId;
const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-24/',
    token: '7b3f69ee-7b91-4649-926c-d71156200cb0'
})

// -----------------------------Валидация-------------------------
const formValidationProfile = new FormValidator(validationConfigProfile, formSelectorProfile);
formValidationProfile.enableValidation(); // запуск валидации провиля
const formValidationCard = new FormValidator(validationConfigCard, formSelectorCard);
formValidationCard.enableValidation(); // запуск валидации попапа новой карточки 
const formValidationAvatar = new FormValidator(validationConfigAvatar, formSelectorAvatar)
formValidationAvatar.enableValidation(); // запуск валидации поапа смены аватара юзера
// -----------------------------Валидация-------------------------

const createCard = (item) => {
    return new Card(item, '.card-template', cardImageClickHandler, cardDeleteHandler, api, userId)
}  //функция создания экземпляра касса Card

const userInfo = new UserInfo(profileSelectors);
editButton.addEventListener('click', function() {
    profileEditPopup.open();
    const newInfo = userInfo.getUserInfo();
    popupUserName.value = newInfo.name;
    popupUserDesc.value = newInfo.description;
});  // слушатель открытия и подстановки значение в попап профиля

const formSubmitHandler = () => {
    profileEditPopup.renderLoading(true)
    const info = {
        name: popupUserName.value,
        about: popupUserDesc.value,
    }   
    api.sendUserInfo(info)
        .then(() => {
            userInfo.setUserInfo(info);
            profileEditPopup.close()
        })
        .catch((err) => { console.log(err) })
        .finally(() => profileEditPopup.renderLoading(false))
}  // сабмит кнопки рекатирования профиля

const formSubmitAddHandler = () => { 
    addNewCardPopup.renderLoading(true)
    const card = new Card({ name: popUpImageTitleInput.value, link: popUpImageLinkInput.value }, '.card-template', cardImageClickHandler, cardDeleteHandler, api, userId)
    api.sendNewCard(card)
        .then(() => {
            initialSection.addNewItem(card.generateNewCard());
            addNewCardPopup.close();
            formAdd.reset();
        })
        .catch((err) => { console.log(err) })
        .finally(() => addNewCardPopup.renderLoading(false))
    
}  // добавление новой карточки 

const addNewCardPopup = new PopupWithForm(newCardPopup, formSubmitAddHandler) // форма новой карточки
addNewCardPopup.setEventListeners()
popupCardOpen.addEventListener('click', function () {
    formValidationCard.disableSubmitButton();
    addNewCardPopup.open()
})  
 
const profileEditPopup = new PopupWithForm(editProfilePopup, formSubmitHandler) // форма профиля
profileEditPopup.setEventListeners()
editButton.addEventListener('click', function () {
    formValidationProfile.disableSubmitButton();
    profileEditPopup.open();
})

const formSubmitAvatarHandler = () => { //сабмит кнопки редактирования аватарки 
    profileAvatarUpdate.renderLoading(true)
    const avatar = {
        avatar: document.querySelector('.popup__text_link-avatar').value
    }
    api.avatarUpdate(avatar)
        .then(() => {
            profileAvatar.src = document.querySelector('.popup__text_link-avatar').value
            profileAvatarUpdate.close();
        })
        .catch((err) => { console.log(err) })
        .finally(() => profileAvatarUpdate.renderLoading(false))
}

const profileAvatarUpdate = new PopupWithForm(popupAvatarUpdateButton, formSubmitAvatarHandler) // форма изменения аватарки
profileAvatarUpdate.setEventListeners()
profileAvatarButton.addEventListener('click', function () {
    formValidationAvatar.disableSubmitButton();
    profileAvatarUpdate.open()
})

const popupWithImage = new PopupWithImage(popupOpenImage)  // большая картинка 
popupWithImage.setEventListeners()

function cardImageClickHandler(url, text) {  // изображение и текст для большой картики
    popupWithImage.open(url, text)
}

const deleteCard = new PopupWithSubmit(deleteCardPopup)
deleteCard.setEventListeners()

function cardDeleteHandler(id, element) {
    const newHandler = () => {
        deleteCard.renderLoading(true)
        api.apiDeleteCard(id)
            .then(() => {
                deleteCard.deleteCard(element)
                deleteCard.close()
            })
            .catch((err) => { console.log(err) })
            .finally(() => deleteCard.renderLoading(false))
    }
    deleteCard.setSubmitHandler(newHandler)
    deleteCard.open()
}   

//-----------------------Создание начальных карточке и установка инфы юзера-------------------
Promise.all([api.getInfoUser(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfoOnLoad(userData);
        userId = userData._id;
        initialSection = new Section({
            items: cards,
            renderer: (item) => {
                const card = createCard(item)
                initialSection.addItem(card.generateCard());
            }
        }, cardList) 
        initialSection.renderItems();
    })
    .catch((err) => { console.log(err) });
//-----------------------Создание начальных карточке и установка инфы юзера-------------------