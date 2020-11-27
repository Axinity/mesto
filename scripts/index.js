let editbutton = document.querySelector('.profile__edit-button');
let closebutton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let name = document.getElementById('name');
let description = document.getElementById('description');
let popupName = document.getElementById('popup-name');
let popupDescription = document.getElementById('popup-description');
let popupContainer = document.querySelector('.popup__container');
const nameValue = document.getElementById('popup-name')
const descriptionValue = document.getElementById('popup-description')

function openform() {
    popupName.setAttribute('value', name.innerText);
    popupDescription.setAttribute('value', description.innerText);
    popup.classList.add('popup_opened');
}

function closeform() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();   
    name.textContent = nameValue.value;;
    description.textContent = descriptionValue.value;;
    closeform();
}

editbutton.addEventListener ('click', openform);
closebutton.addEventListener ('click', closeform);
popupContainer.addEventListener('submit', formSubmitHandler);