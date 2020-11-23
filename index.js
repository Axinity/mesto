let editbutton = document.querySelector('.profile__edit-button');
let closebutton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let name = document.getElementById('name');
let description = document.getElementById('description');
let popupName = document.getElementById('popup-name');
let popupDescription = document.getElementById('popup-description');
let popupContainer = document.querySelector('.popup__container');

function openform() {
    popupName.setAttribute('value', name.innerText);
    popupDescription.setAttribute('value', description.innerText);
    popup.classList.add('popup_opened');
}

function closeform() {
    popup.classList.remove('popup_opened');
}

editbutton.addEventListener ('click', openform);
closebutton.addEventListener ('click', closeform);

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameValue = document.getElementById('popup-name').value;
    let descriptionValue = document.getElementById('popup-description').value;
    name.textContent = nameValue;
    description.textContent = descriptionValue;
    closeform();
}

popupContainer.addEventListener('submit', formSubmitHandler);