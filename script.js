let editbutton = document.querySelector('.profile__edit-button');
let closebutton = document.querySelector('.form__close-button');
let popup = document.querySelector('.popup');
let name = document.getElementById('name');
let description = document.getElementById('description');
let popupName = document.getElementById('popup-name');
let popupDescription = document.getElementById('popup-description');
let popupContainer = document.querySelector('.popup_container');

function openform() {
    popupName.setAttribute('value', name.textContent);
    popupDescription.setAttribute('value', description.textContent);
    popup.classList.add('popup_opened');
}

function closeform() {
    popup.classList.remove('popup_opened');
}

editbutton.addEventListener ('click', openform);
closebutton.addEventListener ('click', closeform);

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameInput = document.getElementById('popup-name');
    let descriptionIntup = document.getElementById('popup-description');
    name.textContent = nameInput.getAttribute('value');
    description.textContent = descriptionIntup.getAttribute('value');
    closeform();
    popupName.setAttribute('value', name.textContent);
    popupDescription.setAttribute('value', description.textContent);
}

popupContainer.addEventListener('submit', formSubmitHandler);