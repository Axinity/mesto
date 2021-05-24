export class Card {
    constructor({name,link, _id, likes, owner}, cardSelector, handleCardClick, handleDeleteCard, api, userId) {
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._id = _id
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard
        this._owner = owner
        this.api = api
        this.userId = userId
    }

     _getTemplate() {
        this._template = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return this._template;
    }

    generateCard() {
        this._element = this._getTemplate(); 
        this._setEventListeners();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__photo').alt = this._name;
        this._element.querySelector('.element__like-count').textContent = this._likes.length
        if (this._likes.some(item => item._id === this.userId)) {
            this._element.querySelector('.element__like-button').classList.add('element__like-button_active');
        };
        if (this._owner._id !== this.userId) {
            this._element.querySelector('.element__delete-button').remove()
        }
        return this._element;  
    }

    generateNewCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__photo').alt = this._name;
        return this._element;
    }

    _likeCard(evt, cardId) {
        if (this._checkLikes()) {
            this.api.unLikeCard(cardId)
            .then((res) => {
                this._likes = res.likes;
                evt.target.classList.remove('element__like-button_active');
                this._element.querySelector('.element__like-count').textContent = res.likes.length;
                
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            this.api.likeCard(cardId)
            .then((res) => {
                this._likes = res.likes;
                evt.target.classList.add('element__like-button_active');
                this._element.querySelector('.element__like-count').textContent = res.likes.length;
                })
            .catch((err) => {
                    console.log(err);
            })
        }
    }

    _checkLikes() {
        return this._likes.some((item) => {
            return item._id === this.userId
        })
    }

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', (evt) => this._likeCard(evt, this._id));     
        this._element.querySelector('.element__photo').addEventListener('click', () => this._handleCardClick(this._link, this._name));
        this._element.querySelector('.element__delete-button').addEventListener('click', (evt) => this._handleDeleteCard(this._id, evt.target.closest('.element')))
    }
}