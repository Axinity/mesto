export default class UserInfo {
    constructor({ profileNameSelector, profileDescSelector }) {
        this._userName = document.querySelector(profileNameSelector);
        this._userDescription = document.querySelector(profileDescSelector);
    }

    getUserInfo ()  {
        const userSet = {
            name: this._userName.textContent,
            description: this._userDescription.textContent
        }

        return userSet;
    }

    setUserInfo({ name, description }) {
        this._userName.textContent = name;
        this._userDescription.textContent = description;
    }
}
