export  const validationConfigProfile = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button_profile',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error',
};// data для валидации профиля

export const validationConfigCard = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button_card',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error',
}; // data для валидации новой карточки 

export const validationConfigAvatar = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button_avatar',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error',
}

export const formSelectorProfile = document.querySelector('.popup__profile-valid')
export const formSelectorCard = document.querySelector('.popup__new-card-valid')
export const formSelectorAvatar = document.querySelector('.popup__profile-avatar-valid')