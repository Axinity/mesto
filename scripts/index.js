const editbutton = document.querySelector('.profile__edit-button');
const closebutton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const name = document.getElementById('name');
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
const popupImageName = document.querySelector('.popup__figcaption');
const popupImageLink = document.querySelector('.popup__image');
const popupOpenImage = document.querySelector('.popup_pic');
const popupCloseImage = document.querySelector('.popup__close-image-button');


const initialCards = [
    {
        name: 'Балаково',
        link: 'https://balakovo24.ru/wp-content/uploads/2019/07/погода_балаково.jpg'
    },
    {
        name: 'Архангельск',
        link: 'http://sail-friend.ru/gallery/3211_17_04_16_8_56_13.jpeg'
    },
    {
        name: 'Санкт-Петербург',
        link: 'https://gullivertour.ru/assets/images/City/sankt-peterburg/s1200.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

function firstCards() {
    const listCards = initialCards.map(compilationCard);
    cardList.append(...listCards);
} // Созданиче начальных карточек

   

function compilationCard({name, link}) {
    const cardTemplate = document.querySelector('#card-template').content;
    const newCard = cardTemplate.cloneNode(true);
    const cardTitle = newCard.querySelector('.element__title');
    const cardLink = newCard.querySelector('.element__photo');
    cardTitle.textContent = name;
    cardLink.src = link;
    newCard.querySelector('.element__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-button_active');
    });
    newCard.querySelector('.element__delete-button').addEventListener('click', function (evt) {
        const Card = evt.target.closest('.element');
        Card.remove();
    });

    cardLink.addEventListener('click', function (evt) {
        const Card = evt.target.closest('.element');
        const PopupNameImg = Card.querySelector('.element__title').textContent;
        const PopupLinkImg = Card.querySelector('.element__photo').src;
        popupImageOpen({ name: PopupNameImg, link: PopupLinkImg });
    });
    return newCard;
}
// -----------------------------Увеличение картинки--------------------------------
function popupImageOpen({ name, link }) {
    popupImageName.textContent = name;
    popupImageLink.src = link;
    openPopup(popupOpenImage); 
}

popupCloseImage.addEventListener('click', function (evt) {
    const Image = evt.target.closest('.popup');
    closePopup(Image);
})
// -----------------------------Увеличение картинки--------------------------------

// -----------------------Профиль---------------------
function openform() {
    popupName.setAttribute('value', name.innerText);
    popupDescription.setAttribute('value', description.innerText);
    openPopup(popup);
}

function closeform() {
    closePopup(popup);
}

function formSubmitHandler (evt) {
    evt.preventDefault();   
    name.textContent = nameValue.value;;
    description.textContent = descriptionValue.value;
    closeform();
}
// ---------------------Профиль--------------------------

// ----------------------Открыть + Закрыть попапы----------
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function closeCardForm() {
    closePopup(popupCard);
}
// ----------------------Открыть + Закрыть попапы----------



function addNewCard (evt){
    evt.preventDefault();
    const inputName = inputCardName.value;
    const inputLink = inputCardLink.value;                              // Новая карточка
    const newCard = compilationCard({ name: inputName, link: inputLink });
    cardList.prepend(newCard);
    closeCardForm();
}

firstCards();
editbutton.addEventListener ('click', openform);
closebutton.addEventListener ('click', closeform);
popupContainer.addEventListener('submit', formSubmitHandler);
popupCardOpen.addEventListener('click', () => openPopup(popupCard));
popupCardClose.addEventListener('click', closeCardForm);
saveButtonCard.addEventListener('click', addNewCard);