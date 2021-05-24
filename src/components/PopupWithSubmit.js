import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__container');
        this._saveButton = this._popup.querySelector('.popup__button')
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._saveButton.textContent = 'Удаление...'
        } else {
            this._saveButton.textContent = 'Да'
        }
    }

    setSubmitHandler(newSubmitHandler) {
        this._submitHandler = newSubmitHandler
    }
    
    deleteCard(element) {
        element.remove()
    }

    setEventListeners() {
        this._form.querySelector('.popup__button_delete-confirm').addEventListener('click', (e) => {
            e.preventDefault() 
            this._submitHandler(e)
        });
        super.setEventListeners()
    }
}