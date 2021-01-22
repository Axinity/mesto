import { popupImageName, popupImageLink, popupOpenImage, openPopup } from './index.js';

export class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
    }

     _getTemplate() {
        const cardElement = document.getElementById('card-template').content.cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', (evt) =>
            evt.target.classList.toggle('element__like-button_active'));
        
        this._element.querySelector('.element__delete-button').addEventListener('click', function (evt) {
            const card = evt.target.closest('.element');
            card.remove();
        })
        this._element.querySelector('.element__photo').addEventListener('click', () => this._openCardImage());
    }

    _openCardImage() {
        popupImageName.textContent = this._name;
        popupImageLink.src = this._link;
        openPopup(popupOpenImage);
    }
}




