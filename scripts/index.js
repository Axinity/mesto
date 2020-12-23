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
const popupImageName = document.querySelector('.popup__figcaption');
const popupImageLink = document.querySelector('.popup__image');
const popupOpenImage = document.querySelector('.popup_pic');
const popupCloseImage = document.querySelector('.popup__close-image-button');
const cardTemplate = document.querySelector('#card-template').content;


composeFirstCards();



function composeFirstCards() {
    const listCards = initialCards.map(createCard);
    cardList.append(...listCards);
} // Созданиче начальных карточек

   

function createCard({name, link}) {
    const newCard = cardTemplate.cloneNode(true);
    const cardTitle = newCard.querySelector('.element__title');
    const cardLink = newCard.querySelector('.element__photo');
    cardTitle.textContent = name;
    cardLink.src = link;
    newCard.querySelector('.element__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-button_active');
    });
    newCard.querySelector('.element__delete-button').addEventListener('click', function (evt) {
        const card = evt.target.closest('.element');
        card.remove();
    });

    cardLink.addEventListener('click', function (evt) {
        const card = evt.target.closest('.element');
        const popupNameImg = card.querySelector('.element__title').textContent;
        const popupLinkImg = card.querySelector('.element__photo').src;
        openImagePopup({ name: popupNameImg, link: popupLinkImg });
    });
    return newCard;
}
// -----------------------------Увеличение картинки--------------------------------
function openImagePopup({ name, link }) {
    popupImageName.textContent = name;
    popupImageLink.src = link;
    openPopup(popupOpenImage); 
}

popupCloseImage.addEventListener('click', function (evt) {
    const image = evt.target.closest('.popup');
    closePopup(image);
})
// -----------------------------Увеличение картинки--------------------------------

// -----------------------Профиль---------------------
function openProfilePopup() {
    popupName.value = profileName.innerText;
    popupDescription.value = description.innerText; // Спасибо, что подсказали и помогли разобраться) Так намного лучше)
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

// ----------------------Открыть + Закрыть попапы----------
function openPopup(popup) {
    popup.classList.add('popup_opened');
    
    document.addEventListener('keyup', escapePopup);
    document.addEventListener('click', clickOutside);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', escapePopup);
    document.removeEventListener('click', clickOutside);
}

function closeCardForm() {
    closePopup(popupCard);
}
// ----------------------Открыть + Закрыть попапы----------



function addNewCard (evt){
    evt.preventDefault();
    const inputName = inputCardName.value;
    const inputLink = inputCardLink.value;                              // Новая карточка
    const newCard = createCard({ name: inputName, link: inputLink });
    cardList.prepend(newCard);
    closeCardForm();
    popupContainer.reset();
}

function checkClass(popup) {
    return popup.classList.contains('popup_opened');
}

function escapePopup(evt) {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === "Escape") {
        closePopup(popupOpened);
    }
}

function clickOutside(evt) {
    if (checkClass(evt.target)) {
        closePopup(evt.target);
    };
};


editButton.addEventListener ('click', openProfilePopup);
closeButtonProfile.addEventListener ('click', closeProfilePopup);
popupContainer.addEventListener('submit', handleProfileSubmit);
popupCardOpen.addEventListener('click', () => openPopup(popupCard));
popupCardClose.addEventListener('click', closeCardForm);
saveButtonCard.addEventListener('click', addNewCard);

enableValidation(validationConfig);

