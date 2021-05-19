export class Card {
    constructor({name,link}, cardSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;

    }

     _getTemplate() {
        this._template = document.querySelector(this._cardSelector).content.cloneNode(true);
        return this._template;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__photo').alt = this._name;

        return this._element;
    }

    _likeCard(evt) {
        evt.target.classList.toggle('element__like-button_active')
    }

    _removeCard(evt) {
        evt.target.closest('.element').remove();
    }

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', this._likeCard);     
        this._element.querySelector('.element__delete-button').addEventListener('click', this._removeCard);
        this._element.querySelector('.element__photo').addEventListener('click', () => this._handleCardClick(this._link, this._name));
    }


    
}