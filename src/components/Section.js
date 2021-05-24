export default class Section {
    constructor({ items, renderer }, container) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = container;
        this._addNewItemName = document.querySelector('.popup__text_name-card')
        this._addNewItemLink = document.querySelector('.popup__text_link-card')
    }

    addItem(element) {
        this._container.append(element);
    }

    addNewItem(element) {
        this._container.prepend(element);
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems() {
        this.clear();
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    }
}