import {escKeyCode} from '../scripts/constants.js'

class Popup {
    constructor(popupSelector) { 
        this._popup = document.querySelector(popupSelector)
    }

    open ()  {
        this._popup.classList.add('popup_opened')
        document.addEventListener('keydown', this._handlerEscClose);
    }

    close () {
        this._popup.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handlerEscClose);        
    }

    _handlerEscClose = (event) => {
        if (event.keyCode === escKeyCode) {
            this.close()
        }
    }

    _handlerClickOverlay = (event) => {
         if (event.target === this._popup) {
           this.close()
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
            this.close()
        })
        this._popup.addEventListener('click', this._handlerClickOverlay);
    }
}

export default Popup