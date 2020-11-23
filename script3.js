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
    popupContainer.reset();
}

editbutton.addEventListener ('click', openform);
closebutton.addEventListener ('click', closeform);

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameInput = document.getElementById('popup-name');
    let descriptionIntup = document.getElementById('popup-description');
    name.innerText = nameInput.getAttribute('value');
    description.innerText = descriptionIntup.getAttribute('value');
    closeform();
    // popupName.setAttribute('value', name.innerText);
    // popupDescription.setAttribute('value', description.innerText);
}

popupContainer.addEventListener('submit', formSubmitHandler);