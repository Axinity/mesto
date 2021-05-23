import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__container');
    }

    // так как id всегда меняется, мы будем менять submitHanlder
    // каждый раз как открываем модалку с подтверждением
    // эту фнукцию перенести нужно в другой класс
    // который нужно создать в этой работе
    setSubmitHandler(newSubmitHandler) {
        this._submitHandler = newSubmitHandler
    }
    
    deleteCard(element) {
        element.remove()
    }

    setEventListeners() {
        // super.setEventListeners()
        // this._popup.querySelector('.popup__button_delete-confirm').addEventListener('click', this._removeCard)
        // this._form.addEventListener('submit', () => this._submitHandler);
        this._form.querySelector('.popup__button_delete-confirm').addEventListener('click', (e) => {
            e.preventDefault() 
            this._submitHandler(e)
        });
        super.setEventListeners()
    }
}