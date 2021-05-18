import Popup from './Popup.js'

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        
    }

    open(url, text) {
        this._popup.querySelector('.popup__figcaption').textContent = text
        this._popup.querySelector('.popup__image').src = url
        super.open()
    }
}

export default PopupWithImage