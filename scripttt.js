let editbutton = document.querySelector('.profile__edit-button');
let closebutton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let name = document.getElementById('name');
let description = document.getElementById('description');
let popupName = document.getElementById('popup-name');
let popupDescription = document.getElementById('popup-description');
let popupContainer = document.querySelector('.popup__container');

function openForm() {
    popupName.setAttribute('value', name.innerText);
    popupDescription.setAttribute('value', description.innerText);
    popup.classList.add('popup_opened');
}

function closeForm() {
    popup.classList.remove('popup_opened');
    popupContainer.reset();
}

editbutton.addEventListener('click', openForm);
closebutton.addEventListener('click', closeForm);


function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameValue = document.getElementById('popup-name').value;
    let descriptionValue = document.getElementById('popup-description').value;
    name.innerText = nameValue;
    profession.innerText = descriptionValue;
    closeForm();
    popupName.setAttribute('value', name.innerText);
    popupProfession.setAttribute('value', profession.innerText);
}
popupContainer.addEventListener('submit', formSubmitHandler);