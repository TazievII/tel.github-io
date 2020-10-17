class CardList {
  constructor(container) {
    this.container = container;
    this.cards = [];
  }

  addCard(name, number, email) {
    this.cards.push(cardElement);
    this.container.appendChild(cardElement.createCard(name, number, email));
  }

  render(Array) {
    for (let i = 0; i < Array.length; i++) {
      let name, number, email;
      let arrI = Array[i];
      name = arrI['name'];
      number = arrI['number'];
      email = arrI['email'];

      this.cards.push(cardElement.createCard(name, number, email));
      Card.listeners;
    }
  }
}