class Popup {
    constructor(popupSelector) { 
        this._popup = document.querySelector(popupSelector)
    }

    open ()  {
        this._popup.classList.add('popup_opened')
        document.addEventListener('keydown', this._handlerEscClose);
        document.addEventListener('click', this._handlerClickOverlay);
    }

    close = () =>  {
        console.log('here')
        this._popup.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handlerEscClose);
        document.removeEventListener('click', this._handlerClickOverlay);
    }

    _handlerEscClose = (event) => {
        if (event.keyCode === 27) {
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
    }
}

export default Popup