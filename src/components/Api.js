export default class Api {
    constructor({ address, token }) {
        this._address = address;
        this._token = token;
    }

    _errorDetect = (res) => {
        if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }
            return res.json();
    }

    getInitialCards() {
        return fetch(`${this._address}cards`, {
            headers: {
                authorization: this._token
            }
        })
        .then((res) => this._errorDetect(res))
    }
    
    getInfoUser() {
        return fetch(`${this._address}users/me`, {
            headers: {
                authorization: this._token
            }
        })
        .then((res) => this._errorDetect(res))
    }
    
    sendUserInfo({ name, about }) {
        this._name = name
        this._about = about
        return fetch(`${this._address}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this._name,
                about: this._about
            })
        })
        .then((res) => this._errorDetect(res))
    }

    sendNewCard({_name, _link}) {
        return fetch(`${this._address}cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: _name,
                link: _link
            })
        })
        .then((res) => this._errorDetect(res))
    }

    apiDeleteCard(id) {
        return fetch(`${this._address}cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
        .then((res) => this._errorDetect(res))
    }

    likeCard(id) {
        return fetch(`${this._address}cards/likes/${id}`, {
           method: 'PUT',
            headers: {
                authorization: this._token
            },           
        })
        .then((res) => this._errorDetect(res))
    }

    unLikeCard(id) {
        return fetch(`${this._address}cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }            
        })
        .then((res) => this._errorDetect(res))
    }

    avatarUpdate(item) {
        return fetch(`${this._address}users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: item.avatar
            })
        })
        .then((res) => this._errorDetect(res))
    }
}