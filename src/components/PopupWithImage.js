import Popup from './Popup.js'

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupCardImage = this._popup.querySelector('.popup__figcaption')
        this._captionImage = this._popup.querySelector('.popup__image')
        
    }

    open(url, text) {
        this._popupCardImage.textContent = text
        this._captionImage.src = url
        super.open()
    }
}

export default PopupWithImage