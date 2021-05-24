import Popup from './Popup.js'

class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector)
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector('.popup__container');
        this._inputs = this._form.querySelectorAll('.popup__text')
        this._saveButton = this._popup.querySelector('.popup__button')
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._saveButton.textContent = 'Сохранение...'
        } else {
            this._saveButton.textContent = 'Сохранить'
        }
    }

    _getInputValues() {
        this._values = {}
        this._inputs.forEach(item => {
            this._values[item.name] = item.value;
        });
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (event) => {
            this._submitHandler(event)
        });
    }

    close() {
        this._form.reset()
        super.close()
    }
}

export default PopupWithForm