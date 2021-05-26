/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var address = _ref.address,
        token = _ref.token;

    _classCallCheck(this, Api);

    _defineProperty(this, "_errorDetect", function (res) {
      if (!res.ok) {
        return Promise.reject("Error: ".concat(res.status));
      }

      return res.json();
    });

    this._address = address;
    this._token = token;
  }

  _createClass(Api, [{
    key: "getInitialCards",
    value: function getInitialCards() {
      var _this = this;

      return fetch("".concat(this._address, "cards"), {
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        return _this._errorDetect(res);
      });
    }
  }, {
    key: "getInfoUser",
    value: function getInfoUser() {
      var _this2 = this;

      return fetch("".concat(this._address, "users/me"), {
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        return _this2._errorDetect(res);
      });
    }
  }, {
    key: "sendUserInfo",
    value: function sendUserInfo(_ref2) {
      var _this3 = this;

      var name = _ref2.name,
          about = _ref2.about;
      this._name = name;
      this._about = about;
      return fetch("".concat(this._address, "users/me"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this._name,
          about: this._about
        })
      }).then(function (res) {
        return _this3._errorDetect(res);
      });
    }
  }, {
    key: "sendNewCard",
    value: function sendNewCard(_ref3) {
      var _this4 = this;

      var _name = _ref3._name,
          _link = _ref3._link;
      return fetch("".concat(this._address, "cards"), {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: _name,
          link: _link
        })
      }).then(function (res) {
        return _this4._errorDetect(res);
      });
    }
  }, {
    key: "apiDeleteCard",
    value: function apiDeleteCard(id) {
      var _this5 = this;

      return fetch("".concat(this._address, "cards/").concat(id), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        return _this5._errorDetect(res);
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard(id) {
      var _this6 = this;

      return fetch("".concat(this._address, "cards/likes/").concat(id), {
        method: 'PUT',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        return _this6._errorDetect(res);
      });
    }
  }, {
    key: "unLikeCard",
    value: function unLikeCard(id) {
      var _this7 = this;

      return fetch("".concat(this._address, "cards/likes/").concat(id), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        return _this7._errorDetect(res);
      });
    }
  }, {
    key: "avatarUpdate",
    value: function avatarUpdate(item) {
      var _this8 = this;

      return fetch("".concat(this._address, "users/me/avatar"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: item.avatar
        })
      }).then(function (res) {
        return _this8._errorDetect(res);
      });
    }
  }]);

  return Api;
}();



/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, cardSelector, handleCardClick, handleDeleteCard, api, userId) {
    var name = _ref.name,
        link = _ref.link,
        _id = _ref._id,
        likes = _ref.likes,
        owner = _ref.owner;

    _classCallCheck(this, Card);

    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._owner = owner;
    this.api = api;
    this.userId = userId;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      this._template = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
      return this._template;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      var _this = this;

      this._element = this._getTemplate();

      this._setEventListeners();

      this._element.querySelector('.element__photo').src = this._link;
      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__photo').alt = this._name;
      this._element.querySelector('.element__like-count').textContent = this._likes.length;

      if (this._likes.some(function (item) {
        return item._id === _this.userId;
      })) {
        this._element.querySelector('.element__like-button').classList.add('element__like-button_active');
      }

      ;

      if (this._owner._id !== this.userId) {
        this._element.querySelector('.element__delete-button').remove();
      }

      return this._element;
    }
  }, {
    key: "generateNewCard",
    value: function generateNewCard() {
      this._element = this._getTemplate();

      this._setEventListeners();

      this._element.querySelector('.element__photo').src = this._link;
      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__photo').alt = this._name;
      return this._element;
    }
  }, {
    key: "_likeCard",
    value: function _likeCard(evt, cardId) {
      var _this2 = this;

      if (this._checkLikes()) {
        this.api.unLikeCard(cardId).then(function (res) {
          _this2._likes = res.likes;
          evt.target.classList.remove('element__like-button_active');
          _this2._element.querySelector('.element__like-count').textContent = res.likes.length;
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        this.api.likeCard(cardId).then(function (res) {
          _this2._likes = res.likes;
          evt.target.classList.add('element__like-button_active');
          _this2._element.querySelector('.element__like-count').textContent = res.likes.length;
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: "_checkLikes",
    value: function _checkLikes() {
      var _this3 = this;

      return this._likes.some(function (item) {
        return item._id === _this3.userId;
      });
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this4 = this;

      this._element.querySelector('.element__like-button').addEventListener('click', function (evt) {
        return _this4._likeCard(evt, _this4._id);
      });

      this._element.querySelector('.element__photo').addEventListener('click', function () {
        return _this4._handleCardClick(_this4._link, _this4._name);
      });

      this._element.querySelector('.element__delete-button').addEventListener('click', function (evt) {
        return _this4._handleDeleteCard(_this4._id, evt.target.closest('.element'));
      });
    }
  }]);

  return Card;
}();

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(data, formElement) {
    var _this = this;

    _classCallCheck(this, FormValidator);

    _defineProperty(this, "_setEventListeners", function () {
      var inputList = Array.from(_this._formElement.querySelectorAll(_this._inputSelector));

      var saveButton = _this._formElement.querySelector(_this._submitButtonSelector);

      _this._setButtonState(inputList, saveButton);

      inputList.forEach(function (input) {
        if (input.validity.valid) {
          _this._hideError(input);
        }

        input.addEventListener('input', function () {
          _this._checkInputValidity(input);

          _this._setButtonState(inputList, saveButton);
        });
      });
    });

    _defineProperty(this, "_checkInputValidity", function (input) {
      _this._checkTextValidity(input);

      _this._checkUrlValidity(input);

      if (input.validity.valid) {
        _this._hideError(input);
      } else {
        _this._showError(input, input.validationMessage);
      }
    });

    _defineProperty(this, "_setButtonState", function (inputList, saveButton) {
      if (_this._hasInvalidInput(inputList)) {
        _this.disableSubmitButton();
      } else {
        saveButton.classList.remove(_this._inactiveButtonClass);
        saveButton.disabled = false;
      }
    });

    _defineProperty(this, "_hasInvalidInput", function (inputList) {
      return inputList.some(function (input) {
        return !input.validity.valid;
      });
    });

    _defineProperty(this, "_showError", function (input, errorMessage) {
      var error = _this._formElement.querySelector("#".concat(input.id, "-error"));

      input.classList.add(_this._inputErrorClass);
      error.textContent = errorMessage;
    });

    _defineProperty(this, "_hideError", function (input) {
      var error = _this._formElement.querySelector("#".concat(input.id, "-error"));

      input.classList.remove(_this._inputErrorClass);
      error.textContent = "";
    });

    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._formElement = formElement;
    this._submitButton = document.querySelector(this._submitButtonSelector);
  }

  _createClass(FormValidator, [{
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener('submit', function (event) {
        event.preventDefault();
      });

      this._setEventListeners(this._formElement);
    } // запуск валидации 

  }, {
    key: "disableSubmitButton",
    value: function disableSubmitButton() {
      this._submitButton.classList.add(this._inactiveButtonClass);

      this._submitButton.disabled = true;
    }
  }, {
    key: "_checkTextValidity",
    value: //скрытие ошибки валидации
    function _checkTextValidity(input) {
      if (input.type === 'text' && input.value.length < 1) {
        input.setCustomValidity('Вы пропустили это поле');
      } else {
        input.setCustomValidity('');
      }
    } // кастомный текст для полей с "текстом"

  }, {
    key: "_checkUrlValidity",
    value: function _checkUrlValidity(input) {
      if (input.type === 'url' && input.validity.typeMismatch === true) {
        input.setCustomValidity('Введите адрес сайта');
      }
    } // кастомный текст для полей с ссылкой

  }]);

  return FormValidator;
}();

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/constants.js */ "./src/scripts/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    var _this = this;

    _classCallCheck(this, Popup);

    _defineProperty(this, "_handlerEscClose", function (event) {
      if (event.keyCode === _scripts_constants_js__WEBPACK_IMPORTED_MODULE_0__.escKeyCode) {
        _this.close();
      }
    });

    _defineProperty(this, "_handlerClickOverlay", function (event) {
      if (event.target === _this._popup) {
        _this.close();
      }
    });

    this._popup = document.querySelector(popupSelector);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');

      document.addEventListener('keydown', this._handlerEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');

      document.removeEventListener('keydown', this._handlerEscClose);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      this._popup.querySelector('.popup__close-button').addEventListener('click', function () {
        _this2.close();
      });

      this._popup.addEventListener('click', this._handlerClickOverlay);
    }
  }]);

  return Popup;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, submitHandler) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._submitHandler = submitHandler;
    _this._form = _this._popup.querySelector('.popup__container');
    _this._inputs = _this._form.querySelectorAll('.popup__text');
    _this._saveButton = _this._popup.querySelector('.popup__button');
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      if (isLoading) {
        this._saveButton.textContent = 'Сохранение...';
      } else {
        this._saveButton.textContent = 'Сохранить';
      }
    }
  }, {
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._values = {};

      this._inputs.forEach(function (item) {
        _this2._values[item.name] = item.value;
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('submit', function (event) {
        event.preventDefault();

        _this3._submitHandler(event);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this._form.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithForm);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._popupCardImage = _this._popup.querySelector('.popup__figcaption');
    _this._captionImage = _this._popup.querySelector('.popup__image');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(url, text) {
      this._popupCardImage.textContent = text;
      this._captionImage.src = url;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithImage);

/***/ }),

/***/ "./src/components/PopupWithSubmit.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithSubmit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithSubmit)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithSubmit = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithSubmit, _Popup);

  var _super = _createSuper(PopupWithSubmit);

  function PopupWithSubmit(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithSubmit);

    _this = _super.call(this, popupSelector);
    _this._form = _this._popup.querySelector('.popup__container');
    _this._saveButton = _this._popup.querySelector('.popup__button');
    return _this;
  }

  _createClass(PopupWithSubmit, [{
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      if (isLoading) {
        this._saveButton.textContent = 'Удаление...';
      } else {
        this._saveButton.textContent = 'Да';
      }
    }
  }, {
    key: "setSubmitHandler",
    value: function setSubmitHandler(newSubmitHandler) {
      this._submitHandler = newSubmitHandler;
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(element) {
      element.remove();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      this._form.querySelector('.popup__button_delete-confirm').addEventListener('click', function (e) {
        e.preventDefault();

        _this2._submitHandler(e);
      });

      _get(_getPrototypeOf(PopupWithSubmit.prototype), "setEventListeners", this).call(this);
    }
  }]);

  return PopupWithSubmit;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, container) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderedItems = items;
    this._renderer = renderer;
    this._container = container;
    this._addNewItemName = document.querySelector('.popup__text_name-card');
    this._addNewItemLink = document.querySelector('.popup__text_link-card');
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.append(element);
    }
  }, {
    key: "addNewItem",
    value: function addNewItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "clear",
    value: function clear() {
      this._container.innerHTML = '';
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this.clear();

      this._renderedItems.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profileNameSelector = _ref.profileNameSelector,
        profileDescSelector = _ref.profileDescSelector,
        profileAvatar = _ref.profileAvatar;

    _classCallCheck(this, UserInfo);

    this._userName = document.querySelector(profileNameSelector);
    this._userDescription = document.querySelector(profileDescSelector);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var userSet = {
        name: this._userName.textContent,
        description: this._userDescription.textContent
      };
      return userSet;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
          about = _ref2.about;
      this._userName.textContent = name;
      this._userDescription.textContent = about;
    }
  }, {
    key: "setUserInfoOnLoad",
    value: function setUserInfoOnLoad(_ref3) {
      var name = _ref3.name,
          about = _ref3.about,
          avatar = _ref3.avatar;
      this.setUserInfo({
        name: name,
        about: about
      });
      this._profileAvatar.src = avatar;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editButton": () => (/* binding */ editButton),
/* harmony export */   "editProfilePopup": () => (/* binding */ editProfilePopup),
/* harmony export */   "newCardPopup": () => (/* binding */ newCardPopup),
/* harmony export */   "cardList": () => (/* binding */ cardList),
/* harmony export */   "popupCardOpen": () => (/* binding */ popupCardOpen),
/* harmony export */   "popupOpenImage": () => (/* binding */ popupOpenImage),
/* harmony export */   "popUpImageTitleInput": () => (/* binding */ popUpImageTitleInput),
/* harmony export */   "popUpImageLinkInput": () => (/* binding */ popUpImageLinkInput),
/* harmony export */   "formAdd": () => (/* binding */ formAdd),
/* harmony export */   "popupUserName": () => (/* binding */ popupUserName),
/* harmony export */   "popupUserDesc": () => (/* binding */ popupUserDesc),
/* harmony export */   "profileSelectors": () => (/* binding */ profileSelectors),
/* harmony export */   "deleteCardPopup": () => (/* binding */ deleteCardPopup),
/* harmony export */   "popupAvatarUpdateButton": () => (/* binding */ popupAvatarUpdateButton),
/* harmony export */   "profileAvatar": () => (/* binding */ profileAvatar),
/* harmony export */   "profileAvatarButton": () => (/* binding */ profileAvatarButton),
/* harmony export */   "escKeyCode": () => (/* binding */ escKeyCode)
/* harmony export */ });
var editButton = document.querySelector('.profile__edit-button');
var editProfilePopup = '.popup_edit';
var newCardPopup = '.popup_card';
var cardList = document.querySelector('.elements');
var popupCardOpen = document.querySelector('.profile__add-button');
var popupOpenImage = '.popup_pic';
var popUpImageTitleInput = document.querySelector('.popup__text_name-card');
var popUpImageLinkInput = document.querySelector('.popup__text_link-card');
var formAdd = document.querySelector('.popup__container_card');
var popupUserName = document.querySelector('.popup__text_title_name');
var popupUserDesc = document.querySelector('.popup__text_title_desc');
var profileSelectors = {
  profileNameSelector: '.profile__title',
  profileDescSelector: '.profile__description',
  profileAvatar: '.profile__avatar'
};
var deleteCardPopup = '.popup_delete-confirm';
var popupAvatarUpdateButton = '.popup_avatar';
var profileAvatar = document.querySelector('.profile__avatar');
var profileAvatarButton = document.querySelector('.profile__avatar-container');
var escKeyCode = 27;

/***/ }),

/***/ "./src/scripts/validation-Data.js":
/*!****************************************!*\
  !*** ./src/scripts/validation-Data.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validationConfigProfile": () => (/* binding */ validationConfigProfile),
/* harmony export */   "validationConfigCard": () => (/* binding */ validationConfigCard),
/* harmony export */   "validationConfigAvatar": () => (/* binding */ validationConfigAvatar),
/* harmony export */   "formSelectorProfile": () => (/* binding */ formSelectorProfile),
/* harmony export */   "formSelectorCard": () => (/* binding */ formSelectorCard),
/* harmony export */   "formSelectorAvatar": () => (/* binding */ formSelectorAvatar)
/* harmony export */ });
var validationConfigProfile = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button_profile',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error'
}; // data для валидации профиля

var validationConfigCard = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button_card',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error'
}; // data для валидации новой карточки 

var validationConfigAvatar = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button_avatar',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__text_error'
};
var formSelectorProfile = document.querySelector('.popup__profile-valid');
var formSelectorCard = document.querySelector('.popup__new-card-valid');
var formSelectorAvatar = document.querySelector('.popup__profile-avatar-valid');

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopupWithSubmit */ "./src/components/PopupWithSubmit.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _scripts_validation_Data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/validation-Data.js */ "./src/scripts/validation-Data.js");
/* harmony import */ var _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/constants.js */ "./src/scripts/constants.js");
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var initialSection;
var userId;
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_5__.default({
  address: 'https://mesto.nomoreparties.co/v1/cohort-24/',
  token: '7b3f69ee-7b91-4649-926c-d71156200cb0'
}); // -----------------------------Валидация-------------------------

var formValidationProfile = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(_scripts_validation_Data_js__WEBPACK_IMPORTED_MODULE_8__.validationConfigProfile, _scripts_validation_Data_js__WEBPACK_IMPORTED_MODULE_8__.formSelectorProfile);
formValidationProfile.enableValidation(); // запуск валидации провиля

var formValidationCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(_scripts_validation_Data_js__WEBPACK_IMPORTED_MODULE_8__.validationConfigCard, _scripts_validation_Data_js__WEBPACK_IMPORTED_MODULE_8__.formSelectorCard);
formValidationCard.enableValidation(); // запуск валидации попапа новой карточки 

var formValidationAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(_scripts_validation_Data_js__WEBPACK_IMPORTED_MODULE_8__.validationConfigAvatar, _scripts_validation_Data_js__WEBPACK_IMPORTED_MODULE_8__.formSelectorAvatar);
formValidationAvatar.enableValidation(); // запуск валидации поапа смены аватара юзера
// -----------------------------Валидация-------------------------

var createCard = function createCard(item) {
  return new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__.Card(item, '.card-template', cardImageClickHandler, cardDeleteHandler, api, userId);
}; //функция создания экземпляра касса Card


var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__.default(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileSelectors);
_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.editButton.addEventListener('click', function () {
  profileEditPopup.open();
  var newInfo = userInfo.getUserInfo();
  _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupUserName.value = newInfo.name;
  _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupUserDesc.value = newInfo.description;
}); // слушатель открытия и подстановки значение в попап профиля

var formSubmitHandler = function formSubmitHandler() {
  profileEditPopup.renderLoading(true);
  var info = {
    name: _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupUserName.value,
    about: _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupUserDesc.value
  };
  api.sendUserInfo(info).then(function () {
    userInfo.setUserInfo(info);
    profileEditPopup.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    return profileEditPopup.renderLoading(false);
  });
}; // сабмит кнопки рекатирования профиля


var formSubmitAddHandler = function formSubmitAddHandler() {
  addNewCardPopup.renderLoading(true);
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__.Card({
    name: _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.popUpImageTitleInput.value,
    link: _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.popUpImageLinkInput.value
  }, '.card-template', cardImageClickHandler, cardDeleteHandler, api, userId);
  api.sendNewCard(card).then(function () {
    initialSection.addNewItem(card.generateNewCard());
    addNewCardPopup.close();
    _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.formAdd.reset();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    return addNewCardPopup.renderLoading(false);
  });
}; // добавление новой карточки 


var addNewCardPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__.default(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.newCardPopup, formSubmitAddHandler); // форма новой карточки

addNewCardPopup.setEventListeners();
_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupCardOpen.addEventListener('click', function () {
  formValidationCard.disableSubmitButton();
  addNewCardPopup.open();
});
var profileEditPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__.default(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.editProfilePopup, formSubmitHandler); // форма профиля

profileEditPopup.setEventListeners();
_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.editButton.addEventListener('click', function () {
  formValidationProfile.disableSubmitButton();
  profileEditPopup.open();
});

var formSubmitAvatarHandler = function formSubmitAvatarHandler() {
  //сабмит кнопки редактирования аватарки 
  profileAvatarUpdate.renderLoading(true);
  var avatar = {
    avatar: document.querySelector('.popup__text_link-avatar').value
  };
  api.avatarUpdate(avatar).then(function () {
    _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileAvatar.src = document.querySelector('.popup__text_link-avatar').value;
    profileAvatarUpdate.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    return profileAvatarUpdate.renderLoading(false);
  });
};

var profileAvatarUpdate = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__.default(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupAvatarUpdateButton, formSubmitAvatarHandler); // форма изменения аватарки

profileAvatarUpdate.setEventListeners();
_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileAvatarButton.addEventListener('click', function () {
  formValidationAvatar.disableSubmitButton();
  profileAvatarUpdate.open();
});
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__.default(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupOpenImage); // большая картинка 

popupWithImage.setEventListeners();

function cardImageClickHandler(url, text) {
  // изображение и текст для большой картики
  popupWithImage.open(url, text);
}

var deleteCard = new _components_PopupWithSubmit__WEBPACK_IMPORTED_MODULE_2__.default(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.deleteCardPopup);
deleteCard.setEventListeners();

function cardDeleteHandler(id, element) {
  var newHandler = function newHandler() {
    deleteCard.renderLoading(true);
    api.apiDeleteCard(id).then(function () {
      deleteCard.deleteCard(element);
      deleteCard.close();
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      return deleteCard.renderLoading(false);
    });
  };

  deleteCard.setSubmitHandler(newHandler);
  deleteCard.open();
} //-----------------------Создание начальных карточке и установка инфы юзера-------------------


Promise.all([api.getInfoUser(), api.getInitialCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      userData = _ref2[0],
      cards = _ref2[1];

  userInfo.setUserInfoOnLoad(userData);
  userId = userData._id;
  initialSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_6__.default({
    items: cards,
    renderer: function renderer(item) {
      var card = createCard(item);
      initialSection.addItem(card.generateCard());
    }
  }, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardList);
  initialSection.renderItems();
}).catch(function (err) {
  console.log(err);
}); //-----------------------Создание начальных карточке и установка инфы юзера-------------------
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy92YWxpZGF0aW9uLURhdGEuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBpIiwiYWRkcmVzcyIsInRva2VuIiwicmVzIiwib2siLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwianNvbiIsIl9hZGRyZXNzIiwiX3Rva2VuIiwiZmV0Y2giLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRoZW4iLCJfZXJyb3JEZXRlY3QiLCJuYW1lIiwiYWJvdXQiLCJfbmFtZSIsIl9hYm91dCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiX2xpbmsiLCJsaW5rIiwiaWQiLCJpdGVtIiwiYXZhdGFyIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZURlbGV0ZUNhcmQiLCJhcGkiLCJ1c2VySWQiLCJfaWQiLCJsaWtlcyIsIm93bmVyIiwiX2xpa2VzIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9vd25lciIsIl90ZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsInNyYyIsInRleHRDb250ZW50IiwiYWx0IiwibGVuZ3RoIiwic29tZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImV2dCIsImNhcmRJZCIsIl9jaGVja0xpa2VzIiwidW5MaWtlQ2FyZCIsInRhcmdldCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxpa2VDYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9saWtlQ2FyZCIsImNsb3Nlc3QiLCJGb3JtVmFsaWRhdG9yIiwiZGF0YSIsImZvcm1FbGVtZW50IiwiaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwiX2Zvcm1FbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIl9pbnB1dFNlbGVjdG9yIiwic2F2ZUJ1dHRvbiIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsIl9zZXRCdXR0b25TdGF0ZSIsImZvckVhY2giLCJpbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUVycm9yIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl9jaGVja1RleHRWYWxpZGl0eSIsIl9jaGVja1VybFZhbGlkaXR5IiwiX3Nob3dFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImRpc2FibGVkIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9zdWJtaXRCdXR0b24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInZhbHVlIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJ0eXBlTWlzbWF0Y2giLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJrZXlDb2RlIiwiZXNjS2V5Q29kZSIsImNsb3NlIiwiX3BvcHVwIiwiX2hhbmRsZXJFc2NDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlckNsaWNrT3ZlcmxheSIsIlBvcHVwV2l0aEZvcm0iLCJzdWJtaXRIYW5kbGVyIiwiX3N1Ym1pdEhhbmRsZXIiLCJfZm9ybSIsIl9pbnB1dHMiLCJfc2F2ZUJ1dHRvbiIsImlzTG9hZGluZyIsIl92YWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX3BvcHVwQ2FyZEltYWdlIiwiX2NhcHRpb25JbWFnZSIsInVybCIsInRleHQiLCJQb3B1cFdpdGhTdWJtaXQiLCJuZXdTdWJtaXRIYW5kbGVyIiwiZWxlbWVudCIsImUiLCJTZWN0aW9uIiwiY29udGFpbmVyIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlZEl0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIl9hZGROZXdJdGVtTmFtZSIsIl9hZGROZXdJdGVtTGluayIsImFwcGVuZCIsInByZXBlbmQiLCJpbm5lckhUTUwiLCJjbGVhciIsIlVzZXJJbmZvIiwicHJvZmlsZU5hbWVTZWxlY3RvciIsInByb2ZpbGVEZXNjU2VsZWN0b3IiLCJwcm9maWxlQXZhdGFyIiwiX3VzZXJOYW1lIiwiX3VzZXJEZXNjcmlwdGlvbiIsIl9wcm9maWxlQXZhdGFyIiwidXNlclNldCIsImRlc2NyaXB0aW9uIiwic2V0VXNlckluZm8iLCJlZGl0QnV0dG9uIiwiZWRpdFByb2ZpbGVQb3B1cCIsIm5ld0NhcmRQb3B1cCIsImNhcmRMaXN0IiwicG9wdXBDYXJkT3BlbiIsInBvcHVwT3BlbkltYWdlIiwicG9wVXBJbWFnZVRpdGxlSW5wdXQiLCJwb3BVcEltYWdlTGlua0lucHV0IiwiZm9ybUFkZCIsInBvcHVwVXNlck5hbWUiLCJwb3B1cFVzZXJEZXNjIiwicHJvZmlsZVNlbGVjdG9ycyIsImRlbGV0ZUNhcmRQb3B1cCIsInBvcHVwQXZhdGFyVXBkYXRlQnV0dG9uIiwicHJvZmlsZUF2YXRhckJ1dHRvbiIsInZhbGlkYXRpb25Db25maWdQcm9maWxlIiwidmFsaWRhdGlvbkNvbmZpZ0NhcmQiLCJ2YWxpZGF0aW9uQ29uZmlnQXZhdGFyIiwiZm9ybVNlbGVjdG9yUHJvZmlsZSIsImZvcm1TZWxlY3RvckNhcmQiLCJmb3JtU2VsZWN0b3JBdmF0YXIiLCJpbml0aWFsU2VjdGlvbiIsImZvcm1WYWxpZGF0aW9uUHJvZmlsZSIsImVuYWJsZVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbkNhcmQiLCJmb3JtVmFsaWRhdGlvbkF2YXRhciIsImNyZWF0ZUNhcmQiLCJjYXJkSW1hZ2VDbGlja0hhbmRsZXIiLCJjYXJkRGVsZXRlSGFuZGxlciIsInVzZXJJbmZvIiwicHJvZmlsZUVkaXRQb3B1cCIsIm9wZW4iLCJuZXdJbmZvIiwiZ2V0VXNlckluZm8iLCJmb3JtU3VibWl0SGFuZGxlciIsInJlbmRlckxvYWRpbmciLCJpbmZvIiwic2VuZFVzZXJJbmZvIiwiZmluYWxseSIsImZvcm1TdWJtaXRBZGRIYW5kbGVyIiwiYWRkTmV3Q2FyZFBvcHVwIiwiY2FyZCIsInNlbmROZXdDYXJkIiwiYWRkTmV3SXRlbSIsImdlbmVyYXRlTmV3Q2FyZCIsInNldEV2ZW50TGlzdGVuZXJzIiwiZm9ybVN1Ym1pdEF2YXRhckhhbmRsZXIiLCJwcm9maWxlQXZhdGFyVXBkYXRlIiwiYXZhdGFyVXBkYXRlIiwicG9wdXBXaXRoSW1hZ2UiLCJkZWxldGVDYXJkIiwibmV3SGFuZGxlciIsImFwaURlbGV0ZUNhcmQiLCJzZXRTdWJtaXRIYW5kbGVyIiwiYWxsIiwiZ2V0SW5mb1VzZXIiLCJnZXRJbml0aWFsQ2FyZHMiLCJ1c2VyRGF0YSIsImNhcmRzIiwic2V0VXNlckluZm9PbkxvYWQiLCJhZGRJdGVtIiwiZ2VuZXJhdGVDYXJkIiwicmVuZGVySXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEc7QUFDakIscUJBQWdDO0FBQUEsUUFBbEJDLE9BQWtCLFFBQWxCQSxPQUFrQjtBQUFBLFFBQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQTs7QUFBQSwwQ0FLakIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BCLFVBQUksQ0FBQ0EsR0FBRyxDQUFDQyxFQUFULEVBQWE7QUFDVCxlQUFPQyxPQUFPLENBQUNDLE1BQVIsa0JBQXlCSCxHQUFHLENBQUNJLE1BQTdCLEVBQVA7QUFDSDs7QUFDRyxhQUFPSixHQUFHLENBQUNLLElBQUosRUFBUDtBQUNQLEtBVitCOztBQUM1QixTQUFLQyxRQUFMLEdBQWdCUixPQUFoQjtBQUNBLFNBQUtTLE1BQUwsR0FBY1IsS0FBZDtBQUNIOzs7O1dBU0QsMkJBQWtCO0FBQUE7O0FBQ2QsYUFBT1MsS0FBSyxXQUFJLEtBQUtGLFFBQVQsWUFBMEI7QUFDbENHLGVBQU8sRUFBRTtBQUNMQyx1QkFBYSxFQUFFLEtBQUtIO0FBRGY7QUFEeUIsT0FBMUIsQ0FBTCxDQUtOSSxJQUxNLENBS0QsVUFBQ1gsR0FBRDtBQUFBLGVBQVMsS0FBSSxDQUFDWSxZQUFMLENBQWtCWixHQUFsQixDQUFUO0FBQUEsT0FMQyxDQUFQO0FBTUg7OztXQUVELHVCQUFjO0FBQUE7O0FBQ1YsYUFBT1EsS0FBSyxXQUFJLEtBQUtGLFFBQVQsZUFBNkI7QUFDckNHLGVBQU8sRUFBRTtBQUNMQyx1QkFBYSxFQUFFLEtBQUtIO0FBRGY7QUFENEIsT0FBN0IsQ0FBTCxDQUtOSSxJQUxNLENBS0QsVUFBQ1gsR0FBRDtBQUFBLGVBQVMsTUFBSSxDQUFDWSxZQUFMLENBQWtCWixHQUFsQixDQUFUO0FBQUEsT0FMQyxDQUFQO0FBTUg7OztXQUVELDZCQUE4QjtBQUFBOztBQUFBLFVBQWZhLElBQWUsU0FBZkEsSUFBZTtBQUFBLFVBQVRDLEtBQVMsU0FBVEEsS0FBUztBQUMxQixXQUFLQyxLQUFMLEdBQWFGLElBQWI7QUFDQSxXQUFLRyxNQUFMLEdBQWNGLEtBQWQ7QUFDQSxhQUFPTixLQUFLLFdBQUksS0FBS0YsUUFBVCxlQUE2QjtBQUNyQ1csY0FBTSxFQUFFLE9BRDZCO0FBRXJDUixlQUFPLEVBQUU7QUFDTEMsdUJBQWEsRUFBRSxLQUFLSCxNQURmO0FBRUwsMEJBQWdCO0FBRlgsU0FGNEI7QUFNckNXLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJQLGNBQUksRUFBRSxLQUFLRSxLQURNO0FBRWpCRCxlQUFLLEVBQUUsS0FBS0U7QUFGSyxTQUFmO0FBTitCLE9BQTdCLENBQUwsQ0FXTkwsSUFYTSxDQVdELFVBQUNYLEdBQUQ7QUFBQSxlQUFTLE1BQUksQ0FBQ1ksWUFBTCxDQUFrQlosR0FBbEIsQ0FBVDtBQUFBLE9BWEMsQ0FBUDtBQVlIOzs7V0FFRCw0QkFBNEI7QUFBQTs7QUFBQSxVQUFmZSxLQUFlLFNBQWZBLEtBQWU7QUFBQSxVQUFSTSxLQUFRLFNBQVJBLEtBQVE7QUFDeEIsYUFBT2IsS0FBSyxXQUFJLEtBQUtGLFFBQVQsWUFBMEI7QUFDbENXLGNBQU0sRUFBRSxNQUQwQjtBQUVsQ1IsZUFBTyxFQUFFO0FBQ0xDLHVCQUFhLEVBQUUsS0FBS0gsTUFEZjtBQUVMLDBCQUFnQjtBQUZYLFNBRnlCO0FBTWxDVyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCUCxjQUFJLEVBQUVFLEtBRFc7QUFFakJPLGNBQUksRUFBRUQ7QUFGVyxTQUFmO0FBTjRCLE9BQTFCLENBQUwsQ0FXTlYsSUFYTSxDQVdELFVBQUNYLEdBQUQ7QUFBQSxlQUFTLE1BQUksQ0FBQ1ksWUFBTCxDQUFrQlosR0FBbEIsQ0FBVDtBQUFBLE9BWEMsQ0FBUDtBQVlIOzs7V0FFRCx1QkFBY3VCLEVBQWQsRUFBa0I7QUFBQTs7QUFDZCxhQUFPZixLQUFLLFdBQUksS0FBS0YsUUFBVCxtQkFBMEJpQixFQUExQixHQUFnQztBQUN4Q04sY0FBTSxFQUFFLFFBRGdDO0FBRXhDUixlQUFPLEVBQUU7QUFDTEMsdUJBQWEsRUFBRSxLQUFLSDtBQURmO0FBRitCLE9BQWhDLENBQUwsQ0FNTkksSUFOTSxDQU1ELFVBQUNYLEdBQUQ7QUFBQSxlQUFTLE1BQUksQ0FBQ1ksWUFBTCxDQUFrQlosR0FBbEIsQ0FBVDtBQUFBLE9BTkMsQ0FBUDtBQU9IOzs7V0FFRCxrQkFBU3VCLEVBQVQsRUFBYTtBQUFBOztBQUNULGFBQU9mLEtBQUssV0FBSSxLQUFLRixRQUFULHlCQUFnQ2lCLEVBQWhDLEdBQXNDO0FBQy9DTixjQUFNLEVBQUUsS0FEdUM7QUFFOUNSLGVBQU8sRUFBRTtBQUNMQyx1QkFBYSxFQUFFLEtBQUtIO0FBRGY7QUFGcUMsT0FBdEMsQ0FBTCxDQU1OSSxJQU5NLENBTUQsVUFBQ1gsR0FBRDtBQUFBLGVBQVMsTUFBSSxDQUFDWSxZQUFMLENBQWtCWixHQUFsQixDQUFUO0FBQUEsT0FOQyxDQUFQO0FBT0g7OztXQUVELG9CQUFXdUIsRUFBWCxFQUFlO0FBQUE7O0FBQ1gsYUFBT2YsS0FBSyxXQUFJLEtBQUtGLFFBQVQseUJBQWdDaUIsRUFBaEMsR0FBc0M7QUFDOUNOLGNBQU0sRUFBRSxRQURzQztBQUU5Q1IsZUFBTyxFQUFFO0FBQ0xDLHVCQUFhLEVBQUUsS0FBS0g7QUFEZjtBQUZxQyxPQUF0QyxDQUFMLENBTU5JLElBTk0sQ0FNRCxVQUFDWCxHQUFEO0FBQUEsZUFBUyxNQUFJLENBQUNZLFlBQUwsQ0FBa0JaLEdBQWxCLENBQVQ7QUFBQSxPQU5DLENBQVA7QUFPSDs7O1dBRUQsc0JBQWF3QixJQUFiLEVBQW1CO0FBQUE7O0FBQ2YsYUFBT2hCLEtBQUssV0FBSSxLQUFLRixRQUFULHNCQUFvQztBQUM1Q1csY0FBTSxFQUFFLE9BRG9DO0FBRTVDUixlQUFPLEVBQUU7QUFDTEMsdUJBQWEsRUFBRSxLQUFLSCxNQURmO0FBRUwsMEJBQWdCO0FBRlgsU0FGbUM7QUFNNUNXLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJLLGdCQUFNLEVBQUVELElBQUksQ0FBQ0M7QUFESSxTQUFmO0FBTnNDLE9BQXBDLENBQUwsQ0FVTmQsSUFWTSxDQVVELFVBQUNYLEdBQUQ7QUFBQSxlQUFTLE1BQUksQ0FBQ1ksWUFBTCxDQUFrQlosR0FBbEIsQ0FBVDtBQUFBLE9BVkMsQ0FBUDtBQVdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHRSxJQUFNMEIsSUFBYjtBQUNJLHNCQUE0Q0MsWUFBNUMsRUFBMERDLGVBQTFELEVBQTJFQyxnQkFBM0UsRUFBNkZDLEdBQTdGLEVBQWtHQyxNQUFsRyxFQUEwRztBQUFBLFFBQTdGbEIsSUFBNkYsUUFBN0ZBLElBQTZGO0FBQUEsUUFBeEZTLElBQXdGLFFBQXhGQSxJQUF3RjtBQUFBLFFBQWxGVSxHQUFrRixRQUFsRkEsR0FBa0Y7QUFBQSxRQUE3RUMsS0FBNkUsUUFBN0VBLEtBQTZFO0FBQUEsUUFBdEVDLEtBQXNFLFFBQXRFQSxLQUFzRTs7QUFBQTs7QUFDdEcsU0FBS25CLEtBQUwsR0FBYUYsSUFBYjtBQUNBLFNBQUtRLEtBQUwsR0FBYUMsSUFBYjtBQUNBLFNBQUthLE1BQUwsR0FBY0YsS0FBZDtBQUNBLFNBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtJLGFBQUwsR0FBcUJULFlBQXJCO0FBQ0EsU0FBS1UsZ0JBQUwsR0FBd0JULGVBQXhCO0FBQ0EsU0FBS1UsaUJBQUwsR0FBeUJULGdCQUF6QjtBQUNBLFNBQUtVLE1BQUwsR0FBY0wsS0FBZDtBQUNBLFNBQUtKLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNIOztBQVpMO0FBQUE7QUFBQSxXQWNLLHdCQUFlO0FBQ1osV0FBS1MsU0FBTCxHQUFpQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQUtOLGFBQTVCLEVBQTJDTyxPQUEzQyxDQUFtREQsYUFBbkQsQ0FBaUUsVUFBakUsRUFBNkVFLFNBQTdFLENBQXVGLElBQXZGLENBQWpCO0FBQ0EsYUFBTyxLQUFLSixTQUFaO0FBQ0g7QUFqQkw7QUFBQTtBQUFBLFdBbUJJLHdCQUFlO0FBQUE7O0FBQ1gsV0FBS0ssUUFBTCxHQUFnQixLQUFLQyxZQUFMLEVBQWhCOztBQUNBLFdBQUtDLGtCQUFMOztBQUNBLFdBQUtGLFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixpQkFBNUIsRUFBK0NNLEdBQS9DLEdBQXFELEtBQUszQixLQUExRDtBQUNBLFdBQUt3QixRQUFMLENBQWNILGFBQWQsQ0FBNEIsaUJBQTVCLEVBQStDTyxXQUEvQyxHQUE2RCxLQUFLbEMsS0FBbEU7QUFDQSxXQUFLOEIsUUFBTCxDQUFjSCxhQUFkLENBQTRCLGlCQUE1QixFQUErQ1EsR0FBL0MsR0FBcUQsS0FBS25DLEtBQTFEO0FBQ0EsV0FBSzhCLFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixzQkFBNUIsRUFBb0RPLFdBQXBELEdBQWtFLEtBQUtkLE1BQUwsQ0FBWWdCLE1BQTlFOztBQUNBLFVBQUksS0FBS2hCLE1BQUwsQ0FBWWlCLElBQVosQ0FBaUIsVUFBQTVCLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNRLEdBQUwsS0FBYSxLQUFJLENBQUNELE1BQXRCO0FBQUEsT0FBckIsQ0FBSixFQUF3RDtBQUNwRCxhQUFLYyxRQUFMLENBQWNILGFBQWQsQ0FBNEIsdUJBQTVCLEVBQXFEVyxTQUFyRCxDQUErREMsR0FBL0QsQ0FBbUUsNkJBQW5FO0FBQ0g7O0FBQUE7O0FBQ0QsVUFBSSxLQUFLZixNQUFMLENBQVlQLEdBQVosS0FBb0IsS0FBS0QsTUFBN0IsRUFBcUM7QUFDakMsYUFBS2MsUUFBTCxDQUFjSCxhQUFkLENBQTRCLHlCQUE1QixFQUF1RGEsTUFBdkQ7QUFDSDs7QUFDRCxhQUFPLEtBQUtWLFFBQVo7QUFDSDtBQWpDTDtBQUFBO0FBQUEsV0FtQ0ksMkJBQWtCO0FBQ2QsV0FBS0EsUUFBTCxHQUFnQixLQUFLQyxZQUFMLEVBQWhCOztBQUNBLFdBQUtDLGtCQUFMOztBQUNBLFdBQUtGLFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixpQkFBNUIsRUFBK0NNLEdBQS9DLEdBQXFELEtBQUszQixLQUExRDtBQUNBLFdBQUt3QixRQUFMLENBQWNILGFBQWQsQ0FBNEIsaUJBQTVCLEVBQStDTyxXQUEvQyxHQUE2RCxLQUFLbEMsS0FBbEU7QUFDQSxXQUFLOEIsUUFBTCxDQUFjSCxhQUFkLENBQTRCLGlCQUE1QixFQUErQ1EsR0FBL0MsR0FBcUQsS0FBS25DLEtBQTFEO0FBQ0EsYUFBTyxLQUFLOEIsUUFBWjtBQUNIO0FBMUNMO0FBQUE7QUFBQSxXQTRDSSxtQkFBVVcsR0FBVixFQUFlQyxNQUFmLEVBQXVCO0FBQUE7O0FBQ25CLFVBQUksS0FBS0MsV0FBTCxFQUFKLEVBQXdCO0FBQ3BCLGFBQUs1QixHQUFMLENBQVM2QixVQUFULENBQW9CRixNQUFwQixFQUNDOUMsSUFERCxDQUNNLFVBQUNYLEdBQUQsRUFBUztBQUNYLGdCQUFJLENBQUNtQyxNQUFMLEdBQWNuQyxHQUFHLENBQUNpQyxLQUFsQjtBQUNBdUIsYUFBRyxDQUFDSSxNQUFKLENBQVdQLFNBQVgsQ0FBcUJFLE1BQXJCLENBQTRCLDZCQUE1QjtBQUNBLGdCQUFJLENBQUNWLFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixzQkFBNUIsRUFBb0RPLFdBQXBELEdBQWtFakQsR0FBRyxDQUFDaUMsS0FBSixDQUFVa0IsTUFBNUU7QUFFSCxTQU5ELEVBT0NVLEtBUEQsQ0FPTyxVQUFDQyxHQUFELEVBQVM7QUFDWkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsU0FURDtBQVVILE9BWEQsTUFXTztBQUNILGFBQUtoQyxHQUFMLENBQVNtQyxRQUFULENBQWtCUixNQUFsQixFQUNDOUMsSUFERCxDQUNNLFVBQUNYLEdBQUQsRUFBUztBQUNYLGdCQUFJLENBQUNtQyxNQUFMLEdBQWNuQyxHQUFHLENBQUNpQyxLQUFsQjtBQUNBdUIsYUFBRyxDQUFDSSxNQUFKLENBQVdQLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLDZCQUF6QjtBQUNBLGdCQUFJLENBQUNULFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixzQkFBNUIsRUFBb0RPLFdBQXBELEdBQWtFakQsR0FBRyxDQUFDaUMsS0FBSixDQUFVa0IsTUFBNUU7QUFDQyxTQUxMLEVBTUNVLEtBTkQsQ0FNTyxVQUFDQyxHQUFELEVBQVM7QUFDUkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ1AsU0FSRDtBQVNIO0FBQ0o7QUFuRUw7QUFBQTtBQUFBLFdBcUVJLHVCQUFjO0FBQUE7O0FBQ1YsYUFBTyxLQUFLM0IsTUFBTCxDQUFZaUIsSUFBWixDQUFpQixVQUFDNUIsSUFBRCxFQUFVO0FBQzlCLGVBQU9BLElBQUksQ0FBQ1EsR0FBTCxLQUFhLE1BQUksQ0FBQ0QsTUFBekI7QUFDSCxPQUZNLENBQVA7QUFHSDtBQXpFTDtBQUFBO0FBQUEsV0EyRUksOEJBQXFCO0FBQUE7O0FBQ2pCLFdBQUtjLFFBQUwsQ0FBY0gsYUFBZCxDQUE0Qix1QkFBNUIsRUFBcUR3QixnQkFBckQsQ0FBc0UsT0FBdEUsRUFBK0UsVUFBQ1YsR0FBRDtBQUFBLGVBQVMsTUFBSSxDQUFDVyxTQUFMLENBQWVYLEdBQWYsRUFBb0IsTUFBSSxDQUFDeEIsR0FBekIsQ0FBVDtBQUFBLE9BQS9FOztBQUNBLFdBQUthLFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixpQkFBNUIsRUFBK0N3QixnQkFBL0MsQ0FBZ0UsT0FBaEUsRUFBeUU7QUFBQSxlQUFNLE1BQUksQ0FBQzdCLGdCQUFMLENBQXNCLE1BQUksQ0FBQ2hCLEtBQTNCLEVBQWtDLE1BQUksQ0FBQ04sS0FBdkMsQ0FBTjtBQUFBLE9BQXpFOztBQUNBLFdBQUs4QixRQUFMLENBQWNILGFBQWQsQ0FBNEIseUJBQTVCLEVBQXVEd0IsZ0JBQXZELENBQXdFLE9BQXhFLEVBQWlGLFVBQUNWLEdBQUQ7QUFBQSxlQUFTLE1BQUksQ0FBQ2xCLGlCQUFMLENBQXVCLE1BQUksQ0FBQ04sR0FBNUIsRUFBaUN3QixHQUFHLENBQUNJLE1BQUosQ0FBV1EsT0FBWCxDQUFtQixVQUFuQixDQUFqQyxDQUFUO0FBQUEsT0FBakY7QUFDSDtBQS9FTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNQyxhQUFiO0FBQ0kseUJBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsZ0RBcUJWLFlBQU07QUFDdkIsVUFBTUMsU0FBUyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxLQUFJLENBQUNDLFlBQUwsQ0FBa0JDLGdCQUFsQixDQUFtQyxLQUFJLENBQUNDLGNBQXhDLENBQVgsQ0FBbEI7O0FBQ0EsVUFBTUMsVUFBVSxHQUFHLEtBQUksQ0FBQ0gsWUFBTCxDQUFrQmpDLGFBQWxCLENBQWdDLEtBQUksQ0FBQ3FDLHFCQUFyQyxDQUFuQjs7QUFDQSxXQUFJLENBQUNDLGVBQUwsQ0FBcUJSLFNBQXJCLEVBQWdDTSxVQUFoQzs7QUFDQU4sZUFBUyxDQUFDUyxPQUFWLENBQWtCLFVBQUFDLEtBQUssRUFBSTtBQUN2QixZQUFJQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsS0FBbkIsRUFBMEI7QUFDdEIsZUFBSSxDQUFDQyxVQUFMLENBQWdCSCxLQUFoQjtBQUNIOztBQUVEQSxhQUFLLENBQUNoQixnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ2xDLGVBQUksQ0FBQ29CLG1CQUFMLENBQTBCSixLQUExQjs7QUFDQSxlQUFJLENBQUNGLGVBQUwsQ0FBcUJSLFNBQXJCLEVBQWdDTSxVQUFoQztBQUNILFNBSEQ7QUFJSCxPQVREO0FBVUgsS0FuQzhCOztBQUFBLGlEQXFDVCxVQUFFSSxLQUFGLEVBQVk7QUFDOUIsV0FBSSxDQUFDSyxrQkFBTCxDQUF3QkwsS0FBeEI7O0FBQ0EsV0FBSSxDQUFDTSxpQkFBTCxDQUF1Qk4sS0FBdkI7O0FBQ0EsVUFBSUEsS0FBSyxDQUFDQyxRQUFOLENBQWVDLEtBQW5CLEVBQTBCO0FBQ3RCLGFBQUksQ0FBQ0MsVUFBTCxDQUFnQkgsS0FBaEI7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFJLENBQUNPLFVBQUwsQ0FBZ0JQLEtBQWhCLEVBQXVCQSxLQUFLLENBQUNRLGlCQUE3QjtBQUNIO0FBQ0osS0E3QzhCOztBQUFBLDZDQStDYixVQUFDbEIsU0FBRCxFQUFZTSxVQUFaLEVBQTJCO0FBQ3pDLFVBQUksS0FBSSxDQUFDYSxnQkFBTCxDQUFzQm5CLFNBQXRCLENBQUosRUFBc0M7QUFDbEMsYUFBSSxDQUFDb0IsbUJBQUw7QUFDSCxPQUZELE1BRU87QUFDSGQsa0JBQVUsQ0FBQ3pCLFNBQVgsQ0FBcUJFLE1BQXJCLENBQTRCLEtBQUksQ0FBQ3NDLG9CQUFqQztBQUNBZixrQkFBVSxDQUFDZ0IsUUFBWCxHQUFzQixLQUF0QjtBQUNIO0FBQ0osS0F0RDhCOztBQUFBLDhDQXdEWixVQUFDdEIsU0FBRCxFQUFlO0FBQzlCLGFBQU9BLFNBQVMsQ0FBQ3BCLElBQVYsQ0FBZSxVQUFDOEIsS0FBRCxFQUFXO0FBQy9CLGVBQU8sQ0FBQ0EsS0FBSyxDQUFDQyxRQUFOLENBQWVDLEtBQXZCO0FBQ0QsT0FGTSxDQUFQO0FBR0gsS0E1RDhCOztBQUFBLHdDQThEbEIsVUFBRUYsS0FBRixFQUFTYSxZQUFULEVBQTBCO0FBQ25DLFVBQU1DLEtBQUssR0FBRyxLQUFJLENBQUNyQixZQUFMLENBQWtCakMsYUFBbEIsWUFBb0N3QyxLQUFLLENBQUMzRCxFQUExQyxZQUFkOztBQUNBMkQsV0FBSyxDQUFDN0IsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsS0FBSSxDQUFDMkMsZ0JBQXpCO0FBQ0FELFdBQUssQ0FBQy9DLFdBQU4sR0FBb0I4QyxZQUFwQjtBQUNILEtBbEU4Qjs7QUFBQSx3Q0FvRWxCLFVBQUNiLEtBQUQsRUFBVztBQUNwQixVQUFNYyxLQUFLLEdBQUcsS0FBSSxDQUFDckIsWUFBTCxDQUFrQmpDLGFBQWxCLFlBQW9Dd0MsS0FBSyxDQUFDM0QsRUFBMUMsWUFBZDs7QUFDQTJELFdBQUssQ0FBQzdCLFNBQU4sQ0FBZ0JFLE1BQWhCLENBQXVCLEtBQUksQ0FBQzBDLGdCQUE1QjtBQUNBRCxXQUFLLENBQUMvQyxXQUFOLEdBQW9CLEVBQXBCO0FBQ0gsS0F4RThCOztBQUMzQixTQUFLNEIsY0FBTCxHQUFzQlAsSUFBSSxDQUFDNEIsYUFBM0I7QUFDQSxTQUFLbkIscUJBQUwsR0FBNkJULElBQUksQ0FBQzZCLG9CQUFsQztBQUNBLFNBQUtOLG9CQUFMLEdBQTRCdkIsSUFBSSxDQUFDOEIsbUJBQWpDO0FBQ0EsU0FBS0gsZ0JBQUwsR0FBd0IzQixJQUFJLENBQUMrQixlQUE3QjtBQUNBLFNBQUsxQixZQUFMLEdBQW9CSixXQUFwQjtBQUNBLFNBQUsrQixhQUFMLEdBQXFCN0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQUtxQyxxQkFBNUIsQ0FBckI7QUFDSDs7QUFSTDtBQUFBO0FBQUEsV0FVSSw0QkFBbUI7QUFDZCxXQUFLSixZQUFMLENBQWtCVCxnQkFBbEIsQ0FBbUMsUUFBbkMsRUFBNkMsVUFBQ3FDLEtBQUQsRUFBVztBQUNyREEsYUFBSyxDQUFDQyxjQUFOO0FBQ0YsT0FGRDs7QUFHRCxXQUFLekQsa0JBQUwsQ0FBd0IsS0FBSzRCLFlBQTdCO0FBQ0gsS0FmTCxDQWVNOztBQWZOO0FBQUE7QUFBQSxXQWlCSSwrQkFBdUI7QUFDbkIsV0FBSzJCLGFBQUwsQ0FBbUJqRCxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsS0FBS3VDLG9CQUF0Qzs7QUFDQSxXQUFLUyxhQUFMLENBQW1CUixRQUFuQixHQUE4QixJQUE5QjtBQUNIO0FBcEJMO0FBQUE7QUFBQSxXQXlFSztBQUVELGdDQUFtQlosS0FBbkIsRUFBMEI7QUFDdEIsVUFBSUEsS0FBSyxDQUFDdUIsSUFBTixLQUFlLE1BQWYsSUFBeUJ2QixLQUFLLENBQUN3QixLQUFOLENBQVl2RCxNQUFaLEdBQXFCLENBQWxELEVBQXFEO0FBQ2pEK0IsYUFBSyxDQUFDeUIsaUJBQU4sQ0FBd0Isd0JBQXhCO0FBQ0gsT0FGRCxNQUVPO0FBQ0h6QixhQUFLLENBQUN5QixpQkFBTixDQUF3QixFQUF4QjtBQUNIO0FBQ0osS0FqRkwsQ0FpRk07O0FBakZOO0FBQUE7QUFBQSxXQW1GSSwyQkFBa0J6QixLQUFsQixFQUF5QjtBQUNyQixVQUFJQSxLQUFLLENBQUN1QixJQUFOLEtBQWUsS0FBZixJQUF3QnZCLEtBQUssQ0FBQ0MsUUFBTixDQUFleUIsWUFBZixLQUFnQyxJQUE1RCxFQUFrRTtBQUM5RDFCLGFBQUssQ0FBQ3lCLGlCQUFOLENBQXdCLHFCQUF4QjtBQUNIO0FBQ0osS0F2RkwsQ0F1Rks7O0FBdkZMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7SUFFTUUsSztBQUNGLGlCQUFZQyxhQUFaLEVBQTJCO0FBQUE7O0FBQUE7O0FBQUEsOENBY1IsVUFBQ1AsS0FBRCxFQUFXO0FBQzFCLFVBQUlBLEtBQUssQ0FBQ1EsT0FBTixLQUFrQkMsNkRBQXRCLEVBQWtDO0FBQzlCLGFBQUksQ0FBQ0MsS0FBTDtBQUNIO0FBQ0osS0FsQjBCOztBQUFBLGtEQW9CSixVQUFDVixLQUFELEVBQVc7QUFDN0IsVUFBSUEsS0FBSyxDQUFDM0MsTUFBTixLQUFpQixLQUFJLENBQUNzRCxNQUExQixFQUFrQztBQUNoQyxhQUFJLENBQUNELEtBQUw7QUFDRjtBQUNKLEtBeEIwQjs7QUFDdkIsU0FBS0MsTUFBTCxHQUFjekUsUUFBUSxDQUFDQyxhQUFULENBQXVCb0UsYUFBdkIsQ0FBZDtBQUNIOzs7O1dBRUQsZ0JBQVM7QUFDTCxXQUFLSSxNQUFMLENBQVk3RCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixjQUExQjs7QUFDQWIsY0FBUSxDQUFDeUIsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS2lELGdCQUExQztBQUNIOzs7V0FFRCxpQkFBUztBQUNMLFdBQUtELE1BQUwsQ0FBWTdELFNBQVosQ0FBc0JFLE1BQXRCLENBQTZCLGNBQTdCOztBQUNBZCxjQUFRLENBQUMyRSxtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFLRCxnQkFBN0M7QUFDSDs7O1dBY0QsNkJBQW9CO0FBQUE7O0FBQ2hCLFdBQUtELE1BQUwsQ0FBWXhFLGFBQVosQ0FBMEIsc0JBQTFCLEVBQWtEd0IsZ0JBQWxELENBQW1FLE9BQW5FLEVBQTRFLFlBQU07QUFDOUUsY0FBSSxDQUFDK0MsS0FBTDtBQUNILE9BRkQ7O0FBR0EsV0FBS0MsTUFBTCxDQUFZaEQsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS21ELG9CQUEzQztBQUNIOzs7Ozs7QUFHTCxpRUFBZVIsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTs7SUFFTVMsYTs7Ozs7QUFDRix5QkFBWVIsYUFBWixFQUEyQlMsYUFBM0IsRUFBMEM7QUFBQTs7QUFBQTs7QUFDdEMsOEJBQU1ULGFBQU47QUFDQSxVQUFLVSxjQUFMLEdBQXNCRCxhQUF0QjtBQUNBLFVBQUtFLEtBQUwsR0FBYSxNQUFLUCxNQUFMLENBQVl4RSxhQUFaLENBQTBCLG1CQUExQixDQUFiO0FBQ0EsVUFBS2dGLE9BQUwsR0FBZSxNQUFLRCxLQUFMLENBQVc3QyxnQkFBWCxDQUE0QixjQUE1QixDQUFmO0FBQ0EsVUFBSytDLFdBQUwsR0FBbUIsTUFBS1QsTUFBTCxDQUFZeEUsYUFBWixDQUEwQixnQkFBMUIsQ0FBbkI7QUFMc0M7QUFNekM7Ozs7V0FFRCx1QkFBY2tGLFNBQWQsRUFBeUI7QUFDckIsVUFBSUEsU0FBSixFQUFlO0FBQ1gsYUFBS0QsV0FBTCxDQUFpQjFFLFdBQWpCLEdBQStCLGVBQS9CO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBSzBFLFdBQUwsQ0FBaUIxRSxXQUFqQixHQUErQixXQUEvQjtBQUNIO0FBQ0o7OztXQUVELDJCQUFrQjtBQUFBOztBQUNkLFdBQUs0RSxPQUFMLEdBQWUsRUFBZjs7QUFDQSxXQUFLSCxPQUFMLENBQWF6QyxPQUFiLENBQXFCLFVBQUF6RCxJQUFJLEVBQUk7QUFDekIsY0FBSSxDQUFDcUcsT0FBTCxDQUFhckcsSUFBSSxDQUFDWCxJQUFsQixJQUEwQlcsSUFBSSxDQUFDa0YsS0FBL0I7QUFDSCxPQUZEO0FBR0g7OztXQUVELDZCQUFvQjtBQUFBOztBQUNoQjs7QUFDQSxXQUFLZSxLQUFMLENBQVd2RCxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxVQUFDcUMsS0FBRCxFQUFXO0FBQzdDQSxhQUFLLENBQUNDLGNBQU47O0FBQ0EsY0FBSSxDQUFDZ0IsY0FBTCxDQUFvQmpCLEtBQXBCO0FBQ0gsT0FIRDtBQUlIOzs7V0FFRCxpQkFBUTtBQUNKLFdBQUtrQixLQUFMLENBQVdLLEtBQVg7O0FBQ0E7QUFDSDs7OztFQW5DdUJqQiw4Qzs7QUFzQzVCLGlFQUFlUyxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBOztJQUVNUyxjOzs7OztBQUNGLDBCQUFZakIsYUFBWixFQUEyQjtBQUFBOztBQUFBOztBQUN2Qiw4QkFBTUEsYUFBTjtBQUNBLFVBQUtrQixlQUFMLEdBQXVCLE1BQUtkLE1BQUwsQ0FBWXhFLGFBQVosQ0FBMEIsb0JBQTFCLENBQXZCO0FBQ0EsVUFBS3VGLGFBQUwsR0FBcUIsTUFBS2YsTUFBTCxDQUFZeEUsYUFBWixDQUEwQixlQUExQixDQUFyQjtBQUh1QjtBQUsxQjs7OztXQUVELGNBQUt3RixHQUFMLEVBQVVDLElBQVYsRUFBZ0I7QUFDWixXQUFLSCxlQUFMLENBQXFCL0UsV0FBckIsR0FBbUNrRixJQUFuQztBQUNBLFdBQUtGLGFBQUwsQ0FBbUJqRixHQUFuQixHQUF5QmtGLEdBQXpCOztBQUNBO0FBQ0g7Ozs7RUFad0JyQiw4Qzs7QUFlN0IsaUVBQWVrQixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztJQUNxQkssZTs7Ozs7QUFDakIsMkJBQVl0QixhQUFaLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3ZCLDhCQUFNQSxhQUFOO0FBQ0EsVUFBS1csS0FBTCxHQUFhLE1BQUtQLE1BQUwsQ0FBWXhFLGFBQVosQ0FBMEIsbUJBQTFCLENBQWI7QUFDQSxVQUFLaUYsV0FBTCxHQUFtQixNQUFLVCxNQUFMLENBQVl4RSxhQUFaLENBQTBCLGdCQUExQixDQUFuQjtBQUh1QjtBQUkxQjs7OztXQUVELHVCQUFja0YsU0FBZCxFQUF5QjtBQUNyQixVQUFJQSxTQUFKLEVBQWU7QUFDWCxhQUFLRCxXQUFMLENBQWlCMUUsV0FBakIsR0FBK0IsYUFBL0I7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLMEUsV0FBTCxDQUFpQjFFLFdBQWpCLEdBQStCLElBQS9CO0FBQ0g7QUFDSjs7O1dBRUQsMEJBQWlCb0YsZ0JBQWpCLEVBQW1DO0FBQy9CLFdBQUtiLGNBQUwsR0FBc0JhLGdCQUF0QjtBQUNIOzs7V0FFRCxvQkFBV0MsT0FBWCxFQUFvQjtBQUNoQkEsYUFBTyxDQUFDL0UsTUFBUjtBQUNIOzs7V0FFRCw2QkFBb0I7QUFBQTs7QUFDaEIsV0FBS2tFLEtBQUwsQ0FBVy9FLGFBQVgsQ0FBeUIsK0JBQXpCLEVBQTBEd0IsZ0JBQTFELENBQTJFLE9BQTNFLEVBQW9GLFVBQUNxRSxDQUFELEVBQU87QUFDdkZBLFNBQUMsQ0FBQy9CLGNBQUY7O0FBQ0EsY0FBSSxDQUFDZ0IsY0FBTCxDQUFvQmUsQ0FBcEI7QUFDSCxPQUhEOztBQUlBO0FBQ0g7Ozs7RUE3QndDMUIsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNEeEIyQixPO0FBQ2pCLHlCQUFpQ0MsU0FBakMsRUFBNEM7QUFBQSxRQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsUUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1Qjs7QUFBQTs7QUFDeEMsU0FBS0MsY0FBTCxHQUFzQkYsS0FBdEI7QUFDQSxTQUFLRyxTQUFMLEdBQWlCRixRQUFqQjtBQUNBLFNBQUtHLFVBQUwsR0FBa0JMLFNBQWxCO0FBQ0EsU0FBS00sZUFBTCxHQUF1QnRHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBdkI7QUFDQSxTQUFLc0csZUFBTCxHQUF1QnZHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBdkI7QUFDSDs7OztXQUVELGlCQUFRNEYsT0FBUixFQUFpQjtBQUNiLFdBQUtRLFVBQUwsQ0FBZ0JHLE1BQWhCLENBQXVCWCxPQUF2QjtBQUNIOzs7V0FFRCxvQkFBV0EsT0FBWCxFQUFvQjtBQUNoQixXQUFLUSxVQUFMLENBQWdCSSxPQUFoQixDQUF3QlosT0FBeEI7QUFDSDs7O1dBRUQsaUJBQVE7QUFDSixXQUFLUSxVQUFMLENBQWdCSyxTQUFoQixHQUE0QixFQUE1QjtBQUNIOzs7V0FFRCx1QkFBYztBQUFBOztBQUNWLFdBQUtDLEtBQUw7O0FBQ0EsV0FBS1IsY0FBTCxDQUFvQjNELE9BQXBCLENBQTRCLFVBQUF6RCxJQUFJLEVBQUk7QUFDaEMsYUFBSSxDQUFDcUgsU0FBTCxDQUFlckgsSUFBZjtBQUNILE9BRkQ7QUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMxQmdCNkgsUTtBQUNqQiwwQkFBeUU7QUFBQSxRQUEzREMsbUJBQTJELFFBQTNEQSxtQkFBMkQ7QUFBQSxRQUF0Q0MsbUJBQXNDLFFBQXRDQSxtQkFBc0M7QUFBQSxRQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCOztBQUFBOztBQUNyRSxTQUFLQyxTQUFMLEdBQWlCaEgsUUFBUSxDQUFDQyxhQUFULENBQXVCNEcsbUJBQXZCLENBQWpCO0FBQ0EsU0FBS0ksZ0JBQUwsR0FBd0JqSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUI2RyxtQkFBdkIsQ0FBeEI7QUFDQSxTQUFLSSxjQUFMLEdBQXNCbEgsUUFBUSxDQUFDQyxhQUFULENBQXVCOEcsYUFBdkIsQ0FBdEI7QUFDSDs7OztXQUVELHVCQUFnQjtBQUNaLFVBQU1JLE9BQU8sR0FBRztBQUNaL0ksWUFBSSxFQUFFLEtBQUs0SSxTQUFMLENBQWV4RyxXQURUO0FBRVo0RyxtQkFBVyxFQUFFLEtBQUtILGdCQUFMLENBQXNCekc7QUFGdkIsT0FBaEI7QUFJQSxhQUFPMkcsT0FBUDtBQUNIOzs7V0FFRCw0QkFBNkI7QUFBQSxVQUFmL0ksSUFBZSxTQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxTQUFUQSxLQUFTO0FBQ3pCLFdBQUsySSxTQUFMLENBQWV4RyxXQUFmLEdBQTZCcEMsSUFBN0I7QUFDQSxXQUFLNkksZ0JBQUwsQ0FBc0J6RyxXQUF0QixHQUFvQ25DLEtBQXBDO0FBQ0g7OztXQUVELGtDQUEyQztBQUFBLFVBQXZCRCxJQUF1QixTQUF2QkEsSUFBdUI7QUFBQSxVQUFqQkMsS0FBaUIsU0FBakJBLEtBQWlCO0FBQUEsVUFBVlcsTUFBVSxTQUFWQSxNQUFVO0FBQ3ZDLFdBQUtxSSxXQUFMLENBQWlCO0FBQUNqSixZQUFJLEVBQUpBLElBQUQ7QUFBT0MsYUFBSyxFQUFMQTtBQUFQLE9BQWpCO0FBQ0EsV0FBSzZJLGNBQUwsQ0FBb0IzRyxHQUFwQixHQUEwQnZCLE1BQTFCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRSxJQUFNc0ksVUFBVSxHQUFHdEgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixDQUFuQjtBQUNBLElBQU1zSCxnQkFBZ0IsR0FBRyxhQUF6QjtBQUNBLElBQU1DLFlBQVksR0FBRyxhQUFyQjtBQUNBLElBQU1DLFFBQVEsR0FBR3pILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFqQjtBQUNBLElBQU15SCxhQUFhLEdBQUcxSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQXRCO0FBQ0EsSUFBTTBILGNBQWMsR0FBRyxZQUF2QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHNUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUE3QjtBQUNBLElBQU00SCxtQkFBbUIsR0FBRzdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBNUI7QUFDQSxJQUFNNkgsT0FBTyxHQUFHOUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFoQjtBQUNBLElBQU04SCxhQUFhLEdBQUcvSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQXRCO0FBQ0EsSUFBTStILGFBQWEsR0FBR2hJLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBdEI7QUFDQSxJQUFNZ0ksZ0JBQWdCLEdBQUc7QUFDNUJwQixxQkFBbUIsRUFBRSxpQkFETztBQUU1QkMscUJBQW1CLEVBQUUsdUJBRk87QUFHNUJDLGVBQWEsRUFBRTtBQUhhLENBQXpCO0FBS0EsSUFBTW1CLGVBQWUsR0FBRyx1QkFBeEI7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyxlQUFoQztBQUNBLElBQU1wQixhQUFhLEdBQUcvRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCO0FBQ0EsSUFBTW1JLG1CQUFtQixHQUFHcEksUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQUE1QjtBQUNBLElBQU1zRSxVQUFVLEdBQUcsRUFBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQyxJQUFNOEQsdUJBQXVCLEdBQUc7QUFDdEM1RSxlQUFhLEVBQUUsY0FEdUI7QUFFdENDLHNCQUFvQixFQUFFLHdCQUZnQjtBQUd0Q0MscUJBQW1CLEVBQUUsdUJBSGlCO0FBSXRDQyxpQkFBZSxFQUFFO0FBSnFCLENBQWhDLEMsQ0FLTjs7QUFFSyxJQUFNMEUsb0JBQW9CLEdBQUc7QUFDbEM3RSxlQUFhLEVBQUUsY0FEbUI7QUFFbENDLHNCQUFvQixFQUFFLHFCQUZZO0FBR2xDQyxxQkFBbUIsRUFBRSx1QkFIYTtBQUlsQ0MsaUJBQWUsRUFBRTtBQUppQixDQUE3QixDLENBS0o7O0FBRUksSUFBTTJFLHNCQUFzQixHQUFHO0FBQ3BDOUUsZUFBYSxFQUFFLGNBRHFCO0FBRXBDQyxzQkFBb0IsRUFBRSx1QkFGYztBQUdwQ0MscUJBQW1CLEVBQUUsdUJBSGU7QUFJcENDLGlCQUFlLEVBQUU7QUFKbUIsQ0FBL0I7QUFPQSxJQUFNNEUsbUJBQW1CLEdBQUd4SSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQTVCO0FBQ0EsSUFBTXdJLGdCQUFnQixHQUFHekksUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUF6QjtBQUNBLElBQU15SSxrQkFBa0IsR0FBRzFJLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBM0IsQzs7Ozs7Ozs7Ozs7QUN2QlA7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBLElBQUkwSSxjQUFKO0FBQ0EsSUFBSXJKLE1BQUo7QUFDQSxJQUFNRCxHQUFHLEdBQUcsSUFBSWpDLHVEQUFKLENBQVE7QUFDaEJDLFNBQU8sRUFBRSw4Q0FETztBQUVoQkMsT0FBSyxFQUFFO0FBRlMsQ0FBUixDQUFaLEMsQ0FLQTs7QUFDQSxJQUFNc0wscUJBQXFCLEdBQUcsSUFBSWhILHVFQUFKLENBQWtCeUcsZ0ZBQWxCLEVBQTJDRyw0RUFBM0MsQ0FBOUI7QUFDQUkscUJBQXFCLENBQUNDLGdCQUF0QixHLENBQTBDOztBQUMxQyxJQUFNQyxrQkFBa0IsR0FBRyxJQUFJbEgsdUVBQUosQ0FBa0IwRyw2RUFBbEIsRUFBd0NHLHlFQUF4QyxDQUEzQjtBQUNBSyxrQkFBa0IsQ0FBQ0QsZ0JBQW5CLEcsQ0FBdUM7O0FBQ3ZDLElBQU1FLG9CQUFvQixHQUFHLElBQUluSCx1RUFBSixDQUFrQjJHLCtFQUFsQixFQUEwQ0csMkVBQTFDLENBQTdCO0FBQ0FLLG9CQUFvQixDQUFDRixnQkFBckIsRyxDQUF5QztBQUN6Qzs7QUFFQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDakssSUFBRCxFQUFVO0FBQ3pCLFNBQU8sSUFBSUUscURBQUosQ0FBU0YsSUFBVCxFQUFlLGdCQUFmLEVBQWlDa0sscUJBQWpDLEVBQXdEQyxpQkFBeEQsRUFBMkU3SixHQUEzRSxFQUFnRkMsTUFBaEYsQ0FBUDtBQUNILENBRkQsQyxDQUVHOzs7QUFFSCxJQUFNNkosUUFBUSxHQUFHLElBQUl2Qyw0REFBSixDQUFhcUIsbUVBQWIsQ0FBakI7QUFDQVgsOEVBQUEsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBVztBQUM1QzhCLGtCQUFnQixDQUFDQyxJQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0gsUUFBUSxDQUFDSSxXQUFULEVBQWhCO0FBQ0F4Qix3RUFBQSxHQUFzQnVCLE9BQU8sQ0FBQ2xMLElBQTlCO0FBQ0E0Six3RUFBQSxHQUFzQnNCLE9BQU8sQ0FBQ2xDLFdBQTlCO0FBQ0gsQ0FMRCxFLENBS0s7O0FBRUwsSUFBTW9DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1Qkosa0JBQWdCLENBQUNLLGFBQWpCLENBQStCLElBQS9CO0FBQ0EsTUFBTUMsSUFBSSxHQUFHO0FBQ1R0TCxRQUFJLEVBQUUySixzRUFERztBQUVUMUosU0FBSyxFQUFFMkosc0VBQW1CL0Q7QUFGakIsR0FBYjtBQUlBNUUsS0FBRyxDQUFDc0ssWUFBSixDQUFpQkQsSUFBakIsRUFDS3hMLElBREwsQ0FDVSxZQUFNO0FBQ1JpTCxZQUFRLENBQUM5QixXQUFULENBQXFCcUMsSUFBckI7QUFDQU4sb0JBQWdCLENBQUM1RSxLQUFqQjtBQUNILEdBSkwsRUFLS3BELEtBTEwsQ0FLVyxVQUFDQyxHQUFELEVBQVM7QUFBRUMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFBa0IsR0FMeEMsRUFNS3VJLE9BTkwsQ0FNYTtBQUFBLFdBQU1SLGdCQUFnQixDQUFDSyxhQUFqQixDQUErQixLQUEvQixDQUFOO0FBQUEsR0FOYjtBQU9ILENBYkQsQyxDQWFHOzs7QUFFSCxJQUFNSSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDL0JDLGlCQUFlLENBQUNMLGFBQWhCLENBQThCLElBQTlCO0FBQ0EsTUFBTU0sSUFBSSxHQUFHLElBQUk5SyxxREFBSixDQUFTO0FBQUViLFFBQUksRUFBRXdKLDZFQUFSO0FBQW9DL0ksUUFBSSxFQUFFZ0osNEVBQXlCNUQ7QUFBbkUsR0FBVCxFQUFnRixnQkFBaEYsRUFBa0dnRixxQkFBbEcsRUFBeUhDLGlCQUF6SCxFQUE0STdKLEdBQTVJLEVBQWlKQyxNQUFqSixDQUFiO0FBQ0FELEtBQUcsQ0FBQzJLLFdBQUosQ0FBZ0JELElBQWhCLEVBQ0s3TCxJQURMLENBQ1UsWUFBTTtBQUNSeUssa0JBQWMsQ0FBQ3NCLFVBQWYsQ0FBMEJGLElBQUksQ0FBQ0csZUFBTCxFQUExQjtBQUNBSixtQkFBZSxDQUFDdEYsS0FBaEI7QUFDQXNELG9FQUFBO0FBQ0gsR0FMTCxFQU1LMUcsS0FOTCxDQU1XLFVBQUNDLEdBQUQsRUFBUztBQUFFQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUFrQixHQU54QyxFQU9LdUksT0FQTCxDQU9hO0FBQUEsV0FBTUUsZUFBZSxDQUFDTCxhQUFoQixDQUE4QixLQUE5QixDQUFOO0FBQUEsR0FQYjtBQVNILENBWkQsQyxDQVlHOzs7QUFFSCxJQUFNSyxlQUFlLEdBQUcsSUFBSWpGLGlFQUFKLENBQWtCMkMsK0RBQWxCLEVBQWdDcUMsb0JBQWhDLENBQXhCLEMsQ0FBOEU7O0FBQzlFQyxlQUFlLENBQUNLLGlCQUFoQjtBQUNBekMsaUZBQUEsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBWTtBQUNoRG9CLG9CQUFrQixDQUFDM0YsbUJBQW5CO0FBQ0EyRyxpQkFBZSxDQUFDVCxJQUFoQjtBQUNILENBSEQ7QUFLQSxJQUFNRCxnQkFBZ0IsR0FBRyxJQUFJdkUsaUVBQUosQ0FBa0IwQyxtRUFBbEIsRUFBb0NpQyxpQkFBcEMsQ0FBekIsQyxDQUFnRjs7QUFDaEZKLGdCQUFnQixDQUFDZSxpQkFBakI7QUFDQTdDLDhFQUFBLENBQTRCLE9BQTVCLEVBQXFDLFlBQVk7QUFDN0NzQix1QkFBcUIsQ0FBQ3pGLG1CQUF0QjtBQUNBaUcsa0JBQWdCLENBQUNDLElBQWpCO0FBQ0gsQ0FIRDs7QUFLQSxJQUFNZSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFBRTtBQUNwQ0MscUJBQW1CLENBQUNaLGFBQXBCLENBQWtDLElBQWxDO0FBQ0EsTUFBTXpLLE1BQU0sR0FBRztBQUNYQSxVQUFNLEVBQUVnQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMEJBQXZCLEVBQW1EZ0U7QUFEaEQsR0FBZjtBQUdBNUUsS0FBRyxDQUFDaUwsWUFBSixDQUFpQnRMLE1BQWpCLEVBQ0tkLElBREwsQ0FDVSxZQUFNO0FBQ1I2SSx3RUFBQSxHQUFvQi9HLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwwQkFBdkIsRUFBbURnRSxLQUF2RTtBQUNBb0csdUJBQW1CLENBQUM3RixLQUFwQjtBQUNILEdBSkwsRUFLS3BELEtBTEwsQ0FLVyxVQUFDQyxHQUFELEVBQVM7QUFBRUMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFBa0IsR0FMeEMsRUFNS3VJLE9BTkwsQ0FNYTtBQUFBLFdBQU1TLG1CQUFtQixDQUFDWixhQUFwQixDQUFrQyxLQUFsQyxDQUFOO0FBQUEsR0FOYjtBQU9ILENBWkQ7O0FBY0EsSUFBTVksbUJBQW1CLEdBQUcsSUFBSXhGLGlFQUFKLENBQWtCc0QsMEVBQWxCLEVBQTJDaUMsdUJBQTNDLENBQTVCLEMsQ0FBZ0c7O0FBQ2hHQyxtQkFBbUIsQ0FBQ0YsaUJBQXBCO0FBQ0EvQix1RkFBQSxDQUFxQyxPQUFyQyxFQUE4QyxZQUFZO0FBQ3REVyxzQkFBb0IsQ0FBQzVGLG1CQUFyQjtBQUNBa0gscUJBQW1CLENBQUNoQixJQUFwQjtBQUNILENBSEQ7QUFLQSxJQUFNa0IsY0FBYyxHQUFHLElBQUlqRixrRUFBSixDQUFtQnFDLGlFQUFuQixDQUF2QixDLENBQTJEOztBQUMzRDRDLGNBQWMsQ0FBQ0osaUJBQWY7O0FBRUEsU0FBU2xCLHFCQUFULENBQStCeEQsR0FBL0IsRUFBb0NDLElBQXBDLEVBQTBDO0FBQUc7QUFDekM2RSxnQkFBYyxDQUFDbEIsSUFBZixDQUFvQjVELEdBQXBCLEVBQXlCQyxJQUF6QjtBQUNIOztBQUVELElBQU04RSxVQUFVLEdBQUcsSUFBSTdFLGdFQUFKLENBQW9CdUMsa0VBQXBCLENBQW5CO0FBQ0FzQyxVQUFVLENBQUNMLGlCQUFYOztBQUVBLFNBQVNqQixpQkFBVCxDQUEyQnBLLEVBQTNCLEVBQStCK0csT0FBL0IsRUFBd0M7QUFDcEMsTUFBTTRFLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJELGNBQVUsQ0FBQ2YsYUFBWCxDQUF5QixJQUF6QjtBQUNBcEssT0FBRyxDQUFDcUwsYUFBSixDQUFrQjVMLEVBQWxCLEVBQ0taLElBREwsQ0FDVSxZQUFNO0FBQ1JzTSxnQkFBVSxDQUFDQSxVQUFYLENBQXNCM0UsT0FBdEI7QUFDQTJFLGdCQUFVLENBQUNoRyxLQUFYO0FBQ0gsS0FKTCxFQUtLcEQsS0FMTCxDQUtXLFVBQUNDLEdBQUQsRUFBUztBQUFFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUFrQixLQUx4QyxFQU1LdUksT0FOTCxDQU1hO0FBQUEsYUFBTVksVUFBVSxDQUFDZixhQUFYLENBQXlCLEtBQXpCLENBQU47QUFBQSxLQU5iO0FBT0gsR0FURDs7QUFVQWUsWUFBVSxDQUFDRyxnQkFBWCxDQUE0QkYsVUFBNUI7QUFDQUQsWUFBVSxDQUFDbkIsSUFBWDtBQUNILEMsQ0FFRDs7O0FBQ0E1TCxPQUFPLENBQUNtTixHQUFSLENBQVksQ0FBQ3ZMLEdBQUcsQ0FBQ3dMLFdBQUosRUFBRCxFQUFvQnhMLEdBQUcsQ0FBQ3lMLGVBQUosRUFBcEIsQ0FBWixFQUNLNU0sSUFETCxDQUNVLGdCQUF1QjtBQUFBO0FBQUEsTUFBckI2TSxRQUFxQjtBQUFBLE1BQVhDLEtBQVc7O0FBQ3pCN0IsVUFBUSxDQUFDOEIsaUJBQVQsQ0FBMkJGLFFBQTNCO0FBQ0F6TCxRQUFNLEdBQUd5TCxRQUFRLENBQUN4TCxHQUFsQjtBQUNBb0osZ0JBQWMsR0FBRyxJQUFJNUMsMkRBQUosQ0FBWTtBQUN6QkUsU0FBSyxFQUFFK0UsS0FEa0I7QUFFekI5RSxZQUFRLEVBQUUsa0JBQUNuSCxJQUFELEVBQVU7QUFDaEIsVUFBTWdMLElBQUksR0FBR2YsVUFBVSxDQUFDakssSUFBRCxDQUF2QjtBQUNBNEosb0JBQWMsQ0FBQ3VDLE9BQWYsQ0FBdUJuQixJQUFJLENBQUNvQixZQUFMLEVBQXZCO0FBQ0g7QUFMd0IsR0FBWixFQU1kMUQsMkRBTmMsQ0FBakI7QUFPQWtCLGdCQUFjLENBQUN5QyxXQUFmO0FBQ0gsQ0FaTCxFQWFLaEssS0FiTCxDQWFXLFVBQUNDLEdBQUQsRUFBUztBQUFFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUFrQixDQWJ4QyxFLENBY0EsOEYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGFkZHJlc3MsIHRva2VuIH0pIHtcclxuICAgICAgICB0aGlzLl9hZGRyZXNzID0gYWRkcmVzcztcclxuICAgICAgICB0aGlzLl90b2tlbiA9IHRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIF9lcnJvckRldGVjdCA9IChyZXMpID0+IHtcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbml0aWFsQ2FyZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2FkZHJlc3N9Y2FyZHNgLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX3Rva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2Vycm9yRGV0ZWN0KHJlcykpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEluZm9Vc2VyKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9hZGRyZXNzfXVzZXJzL21lYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9lcnJvckRldGVjdChyZXMpKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZW5kVXNlckluZm8oeyBuYW1lLCBhYm91dCB9KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWVcclxuICAgICAgICB0aGlzLl9hYm91dCA9IGFib3V0XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2FkZHJlc3N9dXNlcnMvbWVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXHJcbiAgICAgICAgICAgICAgICBhYm91dDogdGhpcy5fYWJvdXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2Vycm9yRGV0ZWN0KHJlcykpXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZE5ld0NhcmQoe19uYW1lLCBfbGlua30pIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYWRkcmVzc31jYXJkc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBfbmFtZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IF9saW5rXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9lcnJvckRldGVjdChyZXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGFwaURlbGV0ZUNhcmQoaWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYWRkcmVzc31jYXJkcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fZXJyb3JEZXRlY3QocmVzKSlcclxuICAgIH1cclxuXHJcbiAgICBsaWtlQ2FyZChpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9hZGRyZXNzfWNhcmRzL2xpa2VzLyR7aWR9YCwge1xyXG4gICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX3Rva2VuXHJcbiAgICAgICAgICAgIH0sICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2Vycm9yRGV0ZWN0KHJlcykpXHJcbiAgICB9XHJcblxyXG4gICAgdW5MaWtlQ2FyZChpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9hZGRyZXNzfWNhcmRzL2xpa2VzLyR7aWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlblxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9lcnJvckRldGVjdChyZXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGF2YXRhclVwZGF0ZShpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2FkZHJlc3N9dXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6IGl0ZW0uYXZhdGFyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9lcnJvckRldGVjdChyZXMpKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3Ioe25hbWUsbGluaywgX2lkLCBsaWtlcywgb3duZXJ9LCBjYXJkU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlRGVsZXRlQ2FyZCwgYXBpLCB1c2VySWQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9saW5rID0gbGluaztcclxuICAgICAgICB0aGlzLl9saWtlcyA9IGxpa2VzO1xyXG4gICAgICAgIHRoaXMuX2lkID0gX2lkXHJcbiAgICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkID0gaGFuZGxlRGVsZXRlQ2FyZFxyXG4gICAgICAgIHRoaXMuX293bmVyID0gb3duZXJcclxuICAgICAgICB0aGlzLmFwaSA9IGFwaVxyXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkXHJcbiAgICB9XHJcblxyXG4gICAgIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50JykuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7IFxyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fcGhvdG8nKS5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3RpdGxlJykudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuYWx0ID0gdGhpcy5fbmFtZTtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlLWNvdW50JykudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGhcclxuICAgICAgICBpZiAodGhpcy5fbGlrZXMuc29tZShpdGVtID0+IGl0ZW0uX2lkID09PSB0aGlzLnVzZXJJZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbGlrZS1idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50X19saWtlLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLl9vd25lci5faWQgIT09IHRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZS1idXR0b24nKS5yZW1vdmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDsgIFxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlTmV3Q2FyZCgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuc3JjID0gdGhpcy5fbGluaztcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X190aXRsZScpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19waG90bycpLmFsdCA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2xpa2VDYXJkKGV2dCwgY2FyZElkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NoZWNrTGlrZXMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwaS51bkxpa2VDYXJkKGNhcmRJZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlrZXMgPSByZXMubGlrZXM7XHJcbiAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2VsZW1lbnRfX2xpa2UtYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbGlrZS1jb3VudCcpLnRleHRDb250ZW50ID0gcmVzLmxpa2VzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFwaS5saWtlQ2FyZChjYXJkSWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xpa2VzID0gcmVzLmxpa2VzO1xyXG4gICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50X19saWtlLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UtY291bnQnKS50ZXh0Q29udGVudCA9IHJlcy5saWtlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0xpa2VzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9saWtlcy5zb21lKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLl9pZCA9PT0gdGhpcy51c2VySWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5fbGlrZUNhcmQoZXZ0LCB0aGlzLl9pZCkpOyAgICAgXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fcGhvdG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9saW5rLCB0aGlzLl9uYW1lKSk7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fZGVsZXRlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCh0aGlzLl9pZCwgZXZ0LnRhcmdldC5jbG9zZXN0KCcuZWxlbWVudCcpKSlcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGRhdGEuaW5wdXRTZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IGRhdGEuc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IGRhdGEuaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgICAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBkYXRhLmlucHV0RXJyb3JDbGFzcztcclxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLl9mb3JtRWxlbWVudCk7XHJcbiAgICB9IC8vINC30LDQv9GD0YHQuiDQstCw0LvQuNC00LDRhtC40LggXHJcblxyXG4gICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcclxuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7ICAgXHJcbiAgICAgICAgdGhpcy5fc2V0QnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBzYXZlQnV0dG9uKTtcclxuICAgICAgICBpbnB1dExpc3QuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZUVycm9yKGlucHV0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoIGlucHV0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEJ1dHRvblN0YXRlKGlucHV0TGlzdCwgc2F2ZUJ1dHRvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoIGlucHV0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tUZXh0VmFsaWRpdHkoaW5wdXQpO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrVXJsVmFsaWRpdHkoaW5wdXQpO1xyXG4gICAgICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dFcnJvcihpbnB1dCwgaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0gLy8g0LTQvtCw0LLQu9C10L3QuNC1INC40LvQuCDRg9C00LDQu9C10L3QuNC1INGB0L7QvtCx0YnQtdC90LjRjyDQvtCxINC+0YjQuNCx0LrQtSBcclxuXHJcbiAgICBfc2V0QnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBzYXZlQnV0dG9uKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gLy8g0LjQt9C80LXQvdC10L3QuNC1INGB0L7RgdGC0L7Rj9C90LjRjyDQutC90L7Qv9C60LggXHJcblxyXG4gICAgX2hhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gIWlucHV0LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgICAgIH0pXHJcbiAgICB9OyAvLyDQv9GA0L7QstC10YDQutCwINC90LAg0L/RgNC40YHRg9GC0YHRgtCy0LjQtSDQstCw0LvQuNC00L3Ri9GFINC/0L7Qu9C10LlcclxuXHJcbiAgICBfc2hvd0Vycm9yID0gKCBpbnB1dCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7ICAgICAgIFxyXG4gICAgfS8vINC/0L7QutCw0Lcg0L7RiNC40LHQutC4INCy0LDQu9C40LTQsNGG0LjQuCBcclxuXHJcbiAgICBfaGlkZUVycm9yID0gKGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgfS8v0YHQutGA0YvRgtC40LUg0L7RiNC40LHQutC4INCy0LDQu9C40LTQsNGG0LjQuFxyXG5cclxuICAgIF9jaGVja1RleHRWYWxpZGl0eShpbnB1dCkge1xyXG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAndGV4dCcgJiYgaW5wdXQudmFsdWUubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgn0JLRiyDQv9GA0L7Qv9GD0YHRgtC40LvQuCDRjdGC0L4g0L/QvtC70LUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKVxyXG4gICAgICAgIH1cclxuICAgIH0gLy8g0LrQsNGB0YLQvtC80L3Ri9C5INGC0LXQutGB0YIg0LTQu9GPINC/0L7Qu9C10Lkg0YEgXCLRgtC10LrRgdGC0L7QvFwiXHJcblxyXG4gICAgX2NoZWNrVXJsVmFsaWRpdHkoaW5wdXQpIHtcclxuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3VybCcgJiYgaW5wdXQudmFsaWRpdHkudHlwZU1pc21hdGNoID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCfQktCy0LXQtNC40YLQtSDQsNC00YDQtdGBINGB0LDQudGC0LAnKVxyXG4gICAgICAgIH1cclxuICAgIH0vLyDQutCw0YHRgtC+0LzQvdGL0Lkg0YLQtdC60YHRgiDQtNC70Y8g0L/QvtC70LXQuSDRgSDRgdGB0YvQu9C60L7QuVxyXG5cclxufSIsImltcG9ydCB7ZXNjS2V5Q29kZX0gZnJvbSAnLi4vc2NyaXB0cy9jb25zdGFudHMuanMnXHJcblxyXG5jbGFzcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7IFxyXG4gICAgICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkgIHtcclxuICAgICAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9vcGVuZWQnKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVyRXNjQ2xvc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKVxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVyRXNjQ2xvc2UpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZXJFc2NDbG9zZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBlc2NLZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlckNsaWNrT3ZlcmxheSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9wb3B1cCkge1xyXG4gICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Nsb3NlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlckNsaWNrT3ZlcmxheSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnXHJcblxyXG5jbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvciwgc3VibWl0SGFuZGxlcikge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpXHJcbiAgICAgICAgdGhpcy5fc3VibWl0SGFuZGxlciA9IHN1Ym1pdEhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRzID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX3RleHQnKVxyXG4gICAgICAgIHRoaXMuX3NhdmVCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2J1dHRvbicpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTG9hZGluZyhpc0xvYWRpbmcpIHtcclxuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NhdmVCdXR0b24udGV4dENvbnRlbnQgPSAn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfQodC+0YXRgNCw0L3QuNGC0YwnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZXMgPSB7fVxyXG4gICAgICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIoZXZlbnQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpXHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhGb3JtIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnXHJcblxyXG5jbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKVxyXG4gICAgICAgIHRoaXMuX3BvcHVwQ2FyZEltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19maWdjYXB0aW9uJylcclxuICAgICAgICB0aGlzLl9jYXB0aW9uSW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlJylcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHVybCwgdGV4dCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwQ2FyZEltYWdlLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgICAgIHRoaXMuX2NhcHRpb25JbWFnZS5zcmMgPSB1cmxcclxuICAgICAgICBzdXBlci5vcGVuKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoSW1hZ2UiLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aFN1Ym1pdCBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKVxyXG4gICAgICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuX3NhdmVCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2J1dHRvbicpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTG9hZGluZyhpc0xvYWRpbmcpIHtcclxuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NhdmVCdXR0b24udGV4dENvbnRlbnQgPSAn0KPQtNCw0LvQtdC90LjQtS4uLidcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ9CU0LAnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN1Ym1pdEhhbmRsZXIobmV3U3VibWl0SGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIgPSBuZXdTdWJtaXRIYW5kbGVyXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZUNhcmQoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fYnV0dG9uX2RlbGV0ZS1jb25maXJtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCkgXHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIoZSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9hZGROZXdJdGVtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGV4dF9uYW1lLWNhcmQnKVxyXG4gICAgICAgIHRoaXMuX2FkZE5ld0l0ZW1MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0X2xpbmstY2FyZCcpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXdJdGVtKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHByb2ZpbGVOYW1lU2VsZWN0b3IsIHByb2ZpbGVEZXNjU2VsZWN0b3IsIHByb2ZpbGVBdmF0YXIgfSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlTmFtZVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl91c2VyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVEZXNjU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX3Byb2ZpbGVBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVBdmF0YXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvICgpICB7XHJcbiAgICAgICAgY29uc3QgdXNlclNldCA9IHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLl91c2VyRGVzY3JpcHRpb24udGV4dENvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVzZXJTZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckluZm8oeyBuYW1lLCBhYm91dCB9KSB7XHJcbiAgICAgICAgdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3VzZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGFib3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJJbmZvT25Mb2FkKHsgbmFtZSwgYWJvdXQsIGF2YXRhciB9KSB7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VySW5mbyh7bmFtZSwgYWJvdXR9KTtcclxuICAgICAgICB0aGlzLl9wcm9maWxlQXZhdGFyLnNyYyA9IGF2YXRhcjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpO1xyXG5leHBvcnQgY29uc3QgZWRpdFByb2ZpbGVQb3B1cCA9ICcucG9wdXBfZWRpdCc7XHJcbmV4cG9ydCBjb25zdCBuZXdDYXJkUG9wdXAgPSAnLnBvcHVwX2NhcmQnXHJcbmV4cG9ydCBjb25zdCBjYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50cycpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBDYXJkT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJyk7XHJcbmV4cG9ydCBjb25zdCBwb3B1cE9wZW5JbWFnZSA9ICcucG9wdXBfcGljJztcclxuZXhwb3J0IGNvbnN0IHBvcFVwSW1hZ2VUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0X25hbWUtY2FyZCcpO1xyXG5leHBvcnQgY29uc3QgcG9wVXBJbWFnZUxpbmtJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGV4dF9saW5rLWNhcmQnKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NvbnRhaW5lcl9jYXJkJyk7XHJcbmV4cG9ydCBjb25zdCBwb3B1cFVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0X3RpdGxlX25hbWUnKTtcclxuZXhwb3J0IGNvbnN0IHBvcHVwVXNlckRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RleHRfdGl0bGVfZGVzYycpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZVNlbGVjdG9ycyA9IHtcclxuICAgIHByb2ZpbGVOYW1lU2VsZWN0b3I6ICcucHJvZmlsZV9fdGl0bGUnLFxyXG4gICAgcHJvZmlsZURlc2NTZWxlY3RvcjogJy5wcm9maWxlX19kZXNjcmlwdGlvbicsXHJcbiAgICBwcm9maWxlQXZhdGFyOiAnLnByb2ZpbGVfX2F2YXRhcidcclxufVxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2FyZFBvcHVwID0gJy5wb3B1cF9kZWxldGUtY29uZmlybSdcclxuZXhwb3J0IGNvbnN0IHBvcHVwQXZhdGFyVXBkYXRlQnV0dG9uID0gJy5wb3B1cF9hdmF0YXInXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhcicpXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlQXZhdGFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhci1jb250YWluZXInKVxyXG5leHBvcnQgY29uc3QgZXNjS2V5Q29kZSA9IDI3OyIsImV4cG9ydCAgY29uc3QgdmFsaWRhdGlvbkNvbmZpZ1Byb2ZpbGUgPSB7XHJcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9fdGV4dCcsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX2J1dHRvbl9wcm9maWxlJyxcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9pbnZhbGlkJyxcclxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9fdGV4dF9lcnJvcicsXHJcbn07Ly8gZGF0YSDQtNC70Y8g0LLQsNC70LjQtNCw0YbQuNC4INC/0YDQvtGE0LjQu9GPXHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbkNvbmZpZ0NhcmQgPSB7XHJcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9fdGV4dCcsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX2J1dHRvbl9jYXJkJyxcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9pbnZhbGlkJyxcclxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9fdGV4dF9lcnJvcicsXHJcbn07IC8vIGRhdGEg0LTQu9GPINCy0LDQu9C40LTQsNGG0LjQuCDQvdC+0LLQvtC5INC60LDRgNGC0L7Rh9C60LggXHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbkNvbmZpZ0F2YXRhciA9IHtcclxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX190ZXh0JyxcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fYnV0dG9uX2F2YXRhcicsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19idXR0b25faW52YWxpZCcsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX3RleHRfZXJyb3InLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybVNlbGVjdG9yUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fcHJvZmlsZS12YWxpZCcpXHJcbmV4cG9ydCBjb25zdCBmb3JtU2VsZWN0b3JDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19uZXctY2FyZC12YWxpZCcpXHJcbmV4cG9ydCBjb25zdCBmb3JtU2VsZWN0b3JBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Byb2ZpbGUtYXZhdGFyLXZhbGlkJykiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQuanMnO1xyXG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aFN1Ym1pdCBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aFN1Ym1pdCc7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uL2NvbXBvbmVudHMvQXBpLmpzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiXHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiXHJcbmltcG9ydCB7dmFsaWRhdGlvbkNvbmZpZ1Byb2ZpbGUsIHZhbGlkYXRpb25Db25maWdDYXJkLCB2YWxpZGF0aW9uQ29uZmlnQXZhdGFyLCBmb3JtU2VsZWN0b3JQcm9maWxlLCBmb3JtU2VsZWN0b3JDYXJkLCBmb3JtU2VsZWN0b3JBdmF0YXJ9IGZyb20gJy4uL3NjcmlwdHMvdmFsaWRhdGlvbi1EYXRhLmpzJ1xyXG5pbXBvcnQge1xyXG4gICAgZWRpdEJ1dHRvbixcclxuICAgIGVkaXRQcm9maWxlUG9wdXAsXHJcbiAgICBuZXdDYXJkUG9wdXAsXHJcbiAgICBjYXJkTGlzdCxcclxuICAgIHBvcHVwQ2FyZE9wZW4sXHJcbiAgICBwb3B1cE9wZW5JbWFnZSxcclxuICAgIHBvcFVwSW1hZ2VUaXRsZUlucHV0LFxyXG4gICAgcG9wVXBJbWFnZUxpbmtJbnB1dCxcclxuICAgIGZvcm1BZGQsXHJcbiAgICBwb3B1cFVzZXJOYW1lLFxyXG4gICAgcG9wdXBVc2VyRGVzYyxcclxuICAgIHByb2ZpbGVTZWxlY3RvcnMsXHJcbiAgICBkZWxldGVDYXJkUG9wdXAsXHJcbiAgICBwb3B1cEF2YXRhclVwZGF0ZUJ1dHRvbixcclxuICAgIHByb2ZpbGVBdmF0YXIsXHJcbiAgICBwcm9maWxlQXZhdGFyQnV0dG9uXHJcbn0gZnJvbSAnLi4vc2NyaXB0cy9jb25zdGFudHMuanMnXHJcbmltcG9ydCAnLi4vcGFnZXMvaW5kZXguY3NzJ1xyXG5sZXQgaW5pdGlhbFNlY3Rpb247XHJcbmxldCB1c2VySWQ7XHJcbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xyXG4gICAgYWRkcmVzczogJ2h0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtMjQvJyxcclxuICAgIHRva2VuOiAnN2IzZjY5ZWUtN2I5MS00NjQ5LTkyNmMtZDcxMTU2MjAwY2IwJ1xyXG59KVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3QktCw0LvQuNC00LDRhtC40Y8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGZvcm1WYWxpZGF0aW9uUHJvZmlsZSA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25Db25maWdQcm9maWxlLCBmb3JtU2VsZWN0b3JQcm9maWxlKTtcclxuZm9ybVZhbGlkYXRpb25Qcm9maWxlLmVuYWJsZVZhbGlkYXRpb24oKTsgLy8g0LfQsNC/0YPRgdC6INCy0LDQu9C40LTQsNGG0LjQuCDQv9GA0L7QstC40LvRj1xyXG5jb25zdCBmb3JtVmFsaWRhdGlvbkNhcmQgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uQ29uZmlnQ2FyZCwgZm9ybVNlbGVjdG9yQ2FyZCk7XHJcbmZvcm1WYWxpZGF0aW9uQ2FyZC5lbmFibGVWYWxpZGF0aW9uKCk7IC8vINC30LDQv9GD0YHQuiDQstCw0LvQuNC00LDRhtC40Lgg0L/QvtC/0LDQv9CwINC90L7QstC+0Lkg0LrQsNGA0YLQvtGH0LrQuCBcclxuY29uc3QgZm9ybVZhbGlkYXRpb25BdmF0YXIgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uQ29uZmlnQXZhdGFyLCBmb3JtU2VsZWN0b3JBdmF0YXIpXHJcbmZvcm1WYWxpZGF0aW9uQXZhdGFyLmVuYWJsZVZhbGlkYXRpb24oKTsgLy8g0LfQsNC/0YPRgdC6INCy0LDQu9C40LTQsNGG0LjQuCDQv9C+0LDQv9CwINGB0LzQtdC90Ysg0LDQstCw0YLQsNGA0LAg0Y7Qt9C10YDQsFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLdCS0LDQu9C40LTQsNGG0LjRjy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmQgPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBDYXJkKGl0ZW0sICcuY2FyZC10ZW1wbGF0ZScsIGNhcmRJbWFnZUNsaWNrSGFuZGxlciwgY2FyZERlbGV0ZUhhbmRsZXIsIGFwaSwgdXNlcklkKVxyXG59ICAvL9GE0YPQvdC60YbQuNGPINGB0L7Qt9C00LDQvdC40Y8g0Y3QutC30LXQvNC/0LvRj9GA0LAg0LrQsNGB0YHQsCBDYXJkXHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyhwcm9maWxlU2VsZWN0b3JzKTtcclxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcHJvZmlsZUVkaXRQb3B1cC5vcGVuKCk7XHJcbiAgICBjb25zdCBuZXdJbmZvID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICAgIHBvcHVwVXNlck5hbWUudmFsdWUgPSBuZXdJbmZvLm5hbWU7XHJcbiAgICBwb3B1cFVzZXJEZXNjLnZhbHVlID0gbmV3SW5mby5kZXNjcmlwdGlvbjtcclxufSk7ICAvLyDRgdC70YPRiNCw0YLQtdC70Ywg0L7RgtC60YDRi9GC0LjRjyDQuCDQv9C+0LTRgdGC0LDQvdC+0LLQutC4INC30L3QsNGH0LXQvdC40LUg0LIg0L/QvtC/0LDQvyDQv9GA0L7RhNC40LvRj1xyXG5cclxuY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBwcm9maWxlRWRpdFBvcHVwLnJlbmRlckxvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IGluZm8gPSB7XHJcbiAgICAgICAgbmFtZTogcG9wdXBVc2VyTmFtZS52YWx1ZSxcclxuICAgICAgICBhYm91dDogcG9wdXBVc2VyRGVzYy52YWx1ZSxcclxuICAgIH0gICBcclxuICAgIGFwaS5zZW5kVXNlckluZm8oaW5mbylcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGluZm8pO1xyXG4gICAgICAgICAgICBwcm9maWxlRWRpdFBvcHVwLmNsb3NlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycikgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiBwcm9maWxlRWRpdFBvcHVwLnJlbmRlckxvYWRpbmcoZmFsc2UpKVxyXG59ICAvLyDRgdCw0LHQvNC40YIg0LrQvdC+0L/QutC4INGA0LXQutCw0YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPXHJcblxyXG5jb25zdCBmb3JtU3VibWl0QWRkSGFuZGxlciA9ICgpID0+IHsgXHJcbiAgICBhZGROZXdDYXJkUG9wdXAucmVuZGVyTG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHsgbmFtZTogcG9wVXBJbWFnZVRpdGxlSW5wdXQudmFsdWUsIGxpbms6IHBvcFVwSW1hZ2VMaW5rSW5wdXQudmFsdWUgfSwgJy5jYXJkLXRlbXBsYXRlJywgY2FyZEltYWdlQ2xpY2tIYW5kbGVyLCBjYXJkRGVsZXRlSGFuZGxlciwgYXBpLCB1c2VySWQpXHJcbiAgICBhcGkuc2VuZE5ld0NhcmQoY2FyZClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGluaXRpYWxTZWN0aW9uLmFkZE5ld0l0ZW0oY2FyZC5nZW5lcmF0ZU5ld0NhcmQoKSk7XHJcbiAgICAgICAgICAgIGFkZE5ld0NhcmRQb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgICAgICBmb3JtQWRkLnJlc2V0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gYWRkTmV3Q2FyZFBvcHVwLnJlbmRlckxvYWRpbmcoZmFsc2UpKVxyXG4gICAgXHJcbn0gIC8vINC00L7QsdCw0LLQu9C10L3QuNC1INC90L7QstC+0Lkg0LrQsNGA0YLQvtGH0LrQuCBcclxuXHJcbmNvbnN0IGFkZE5ld0NhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKG5ld0NhcmRQb3B1cCwgZm9ybVN1Ym1pdEFkZEhhbmRsZXIpIC8vINGE0L7RgNC80LAg0L3QvtCy0L7QuSDQutCw0YDRgtC+0YfQutC4XHJcbmFkZE5ld0NhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpXHJcbnBvcHVwQ2FyZE9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3JtVmFsaWRhdGlvbkNhcmQuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gICAgYWRkTmV3Q2FyZFBvcHVwLm9wZW4oKVxyXG59KSAgXHJcbiBcclxuY29uc3QgcHJvZmlsZUVkaXRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKGVkaXRQcm9maWxlUG9wdXAsIGZvcm1TdWJtaXRIYW5kbGVyKSAvLyDRhNC+0YDQvNCwINC/0YDQvtGE0LjQu9GPXHJcbnByb2ZpbGVFZGl0UG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9ybVZhbGlkYXRpb25Qcm9maWxlLmRpc2FibGVTdWJtaXRCdXR0b24oKTtcclxuICAgIHByb2ZpbGVFZGl0UG9wdXAub3BlbigpO1xyXG59KVxyXG5cclxuY29uc3QgZm9ybVN1Ym1pdEF2YXRhckhhbmRsZXIgPSAoKSA9PiB7IC8v0YHQsNCx0LzQuNGCINC60L3QvtC/0LrQuCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINCw0LLQsNGC0LDRgNC60LggXHJcbiAgICBwcm9maWxlQXZhdGFyVXBkYXRlLnJlbmRlckxvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IGF2YXRhciA9IHtcclxuICAgICAgICBhdmF0YXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGV4dF9saW5rLWF2YXRhcicpLnZhbHVlXHJcbiAgICB9XHJcbiAgICBhcGkuYXZhdGFyVXBkYXRlKGF2YXRhcilcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2ZpbGVBdmF0YXIuc3JjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0X2xpbmstYXZhdGFyJykudmFsdWVcclxuICAgICAgICAgICAgcHJvZmlsZUF2YXRhclVwZGF0ZS5jbG9zZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKSB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHByb2ZpbGVBdmF0YXJVcGRhdGUucmVuZGVyTG9hZGluZyhmYWxzZSkpXHJcbn1cclxuXHJcbmNvbnN0IHByb2ZpbGVBdmF0YXJVcGRhdGUgPSBuZXcgUG9wdXBXaXRoRm9ybShwb3B1cEF2YXRhclVwZGF0ZUJ1dHRvbiwgZm9ybVN1Ym1pdEF2YXRhckhhbmRsZXIpIC8vINGE0L7RgNC80LAg0LjQt9C80LXQvdC10L3QuNGPINCw0LLQsNGC0LDRgNC60LhcclxucHJvZmlsZUF2YXRhclVwZGF0ZS5zZXRFdmVudExpc3RlbmVycygpXHJcbnByb2ZpbGVBdmF0YXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3JtVmFsaWRhdGlvbkF2YXRhci5kaXNhYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgICBwcm9maWxlQXZhdGFyVXBkYXRlLm9wZW4oKVxyXG59KVxyXG5cclxuY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UocG9wdXBPcGVuSW1hZ2UpICAvLyDQsdC+0LvRjNGI0LDRjyDQutCw0YDRgtC40L3QutCwIFxyXG5wb3B1cFdpdGhJbWFnZS5zZXRFdmVudExpc3RlbmVycygpXHJcblxyXG5mdW5jdGlvbiBjYXJkSW1hZ2VDbGlja0hhbmRsZXIodXJsLCB0ZXh0KSB7ICAvLyDQuNC30L7QsdGA0LDQttC10L3QuNC1INC4INGC0LXQutGB0YIg0LTQu9GPINCx0L7Qu9GM0YjQvtC5INC60LDRgNGC0LjQutC4XHJcbiAgICBwb3B1cFdpdGhJbWFnZS5vcGVuKHVybCwgdGV4dClcclxufVxyXG5cclxuY29uc3QgZGVsZXRlQ2FyZCA9IG5ldyBQb3B1cFdpdGhTdWJtaXQoZGVsZXRlQ2FyZFBvcHVwKVxyXG5kZWxldGVDYXJkLnNldEV2ZW50TGlzdGVuZXJzKClcclxuXHJcbmZ1bmN0aW9uIGNhcmREZWxldGVIYW5kbGVyKGlkLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBuZXdIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUNhcmQucmVuZGVyTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGFwaS5hcGlEZWxldGVDYXJkKGlkKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVDYXJkLmRlbGV0ZUNhcmQoZWxlbWVudClcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNhcmQuY2xvc2UoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpIH0pXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IGRlbGV0ZUNhcmQucmVuZGVyTG9hZGluZyhmYWxzZSkpXHJcbiAgICB9XHJcbiAgICBkZWxldGVDYXJkLnNldFN1Ym1pdEhhbmRsZXIobmV3SGFuZGxlcilcclxuICAgIGRlbGV0ZUNhcmQub3BlbigpXHJcbn0gICBcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3QodC+0LfQtNCw0L3QuNC1INC90LDRh9Cw0LvRjNC90YvRhSDQutCw0YDRgtC+0YfQutC1INC4INGD0YHRgtCw0L3QvtCy0LrQsCDQuNC90YTRiyDRjtC30LXRgNCwLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5Qcm9taXNlLmFsbChbYXBpLmdldEluZm9Vc2VyKCksIGFwaS5nZXRJbml0aWFsQ2FyZHMoKV0pXHJcbiAgICAudGhlbigoW3VzZXJEYXRhLCBjYXJkc10pID0+IHtcclxuICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mb09uTG9hZCh1c2VyRGF0YSk7XHJcbiAgICAgICAgdXNlcklkID0gdXNlckRhdGEuX2lkO1xyXG4gICAgICAgIGluaXRpYWxTZWN0aW9uID0gbmV3IFNlY3Rpb24oe1xyXG4gICAgICAgICAgICBpdGVtczogY2FyZHMsXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoaXRlbSlcclxuICAgICAgICAgICAgICAgIGluaXRpYWxTZWN0aW9uLmFkZEl0ZW0oY2FyZC5nZW5lcmF0ZUNhcmQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBjYXJkTGlzdCkgXHJcbiAgICAgICAgaW5pdGlhbFNlY3Rpb24ucmVuZGVySXRlbXMoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpIH0pO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t0KHQvtC30LTQsNC90LjQtSDQvdCw0YfQsNC70YzQvdGL0YUg0LrQsNGA0YLQvtGH0LrQtSDQuCDRg9GB0YLQsNC90L7QstC60LAg0LjQvdGE0Ysg0Y7Qt9C10YDQsC0tLS0tLS0tLS0tLS0tLS0tLS0iXSwic291cmNlUm9vdCI6IiJ9