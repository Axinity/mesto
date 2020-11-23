const headerButtonNode = document.querySelector('.header__button');
const popupNode = document.querySelector('.popup');
const popupCloseButtonNode = document.querySelector('.popup__close-button');

const leadTitleNode = document.querySelector('.lead__title');
const formButtonNode = document.querySelector('.form__button');

headerButtonNode.addEventListener('click', togglePopupVisibility);
popupCloseButtonNode.addEventListener('click', togglePopupVisibility);

function togglePopupVisibility() {
    popupNode.classList.toggle('popup_visible');
}

const forms = [...document.querySelectorAll('.form')];

forms.forEach((formNode) => {
    formNode.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    console.log(event.currentTarget);
    event.preventDefault();
    const formInputNode = event.currentTarget.querySelector('.form__input');
    leadTitleNode.textContent = formInputNode.value;
}

function f2() {
    console.log(formInputNode);
}
