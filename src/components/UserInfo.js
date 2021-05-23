export default class UserInfo {
    constructor({ profileNameSelector, profileDescSelector, profileAvatar }) {
        this._userName = document.querySelector(profileNameSelector);
        this._userDescription = document.querySelector(profileDescSelector);
        this._profileAvatar = document.querySelector(profileAvatar);
    }

    getUserInfo ()  {
        const userSet = {
            name: this._userName.textContent,
            description: this._userDescription.textContent
        }

        return userSet;
    }

    setUserInfo({ name, about }) {
        this._userName.textContent = name;
        this._userDescription.textContent = about;
    }

    setUserInfoOnLoad({ name, about, avatar }) {
        this.setUserInfo({name, about});
        this._profileAvatar.src = avatar;
    }
}
