class CardComponent extends HTMLElement {
  constructor() {
    super();

    // Создание shadow root
    this.attachShadow({ mode: 'open' });

    // Получение шаблонов и создание карточки
    const headerTemplate = this.querySelector('template[slot="header"]').content.cloneNode(true);
    const contentTemplate = this.querySelector('template[slot="content"]').content.cloneNode(true);
    const card = document.createElement('div');
    card.classList.add('card');

    // Вставка шаблонов внутрь карточки
    card.appendChild(headerTemplate);
    card.appendChild(contentTemplate);

    // Вставка карточки в shadow root
    this.shadowRoot.appendChild(card);
  }
}

// Регистрация пользовательского элемента
window.customElements.define('card-component', CardComponent);
