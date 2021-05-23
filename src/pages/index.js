import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithSubmit from '../components/PopupWithSubmit';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import Api from '../components/Api.js';
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
    deleteCardPopup
} from '../scripts/constants.js'
import '../pages/index.css'



// -----------------------------Валидация-------------------------
const formValidationProfile = new FormValidator(validationConfigProfile, formSelectorProfile);
formValidationProfile.enableValidation(); // запуск валидации провиля
const formValidationCard = new FormValidator(validationConfigCard, formSelectorCard);
formValidationCard.enableValidation(); // запуск валидации попапа новой карточки 
// -----------------------------Валидация-------------------------

function addCard(newCard) {
    api.sendNewCard()
    initialSection.addNewItem(newCard);
} // добавление карточек

const createCard = (item) => {
    return new Card(item, '.card-template', cardImageClickHandler, cardDeleteHandler, api, userId)
}



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
        about: popupUserDesc.value,
    }
    userInfo.setUserInfo(info);
    api.sendUserInfo(info)
    profileEditPopup.close();
}

const formSubmitAddHandler = (evt) => { 
    evt.preventDefault();
    const card = new Card({ name: popUpImageTitleInput.value, link: popUpImageLinkInput.value }, '.card-template', cardImageClickHandler, cardDeleteHandler, api, userId)
    addCard(card.generateNewCard());
    addNewCardPopup.close();
    formAdd.reset();
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

const popupWithImage = new PopupWithImage(popupOpenImage)  // большая картинка 
popupWithImage.setEventListeners()

function cardImageClickHandler(url, text) {  // изображение и текст для большой картики
    popupWithImage.open(url, text)
}

  
let initialSection;

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-24/',
    token: '7b3f69ee-7b91-4649-926c-d71156200cb0'
})

//----------------------Запрос Инфы Юзера-------------------

let userId;
api.getInfoUser() 
    .then((result) => {
        console.log(result);
        userInfo.setUserInfoOnLoad(result);
        userId = result._id
    })
    .catch((err) => {console.log(err)});
//----------------------Запрос Инфы Юзера-------------------

export const deleteCard = new PopupWithSubmit(deleteCardPopup)
deleteCard.setEventListeners()

function cardDeleteHandler(id, element) {
    const newHandler = () => {
        console.log(id)
        api.apiDeleteCard(id)
            .then(() => {
                deleteCard.deleteCard(element)
                deleteCard.close()
        })
    }
    deleteCard.setSubmitHandler(newHandler)
    console.log(id)
    // api.apiDeleteCard(id)
    deleteCard.open()
}   

//--------------Создание НАЧАЛЬНХ карточек-------------------
api.getInitialCards()
    .then((result) => {
        console.log(result);
        initialSection = new Section({
            items: result,
            renderer: (item) => {
                const card = createCard(item)
                initialSection.addItem(card.generateCard());
            }
        }, cardList) 
        initialSection.renderItems();
    })
//--------------Создание НАЧАЛЬНХ карточек-------------------
