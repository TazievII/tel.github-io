class Card {
  constructor() {
    this.listeners();
  }

  createCard(name, number, email) {
    const card = document.createElement('div');
    const cardButton = document.createElement('button');
    const cardEdit = document.createElement('button');
    const cardDescription = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardNumber = document.createElement('p');
    const cardEmail = document.createElement('p');

    cardContainer.appendChild(card);
    card.classList.add('place-card');
    card.appendChild(cardDescription);
    cardDescription.classList.add('place-card__description');
    cardDescription.appendChild(cardButton);
    cardButton.classList.add('place-card__delete-icon');
    cardDescription.appendChild(cardEdit);
    cardEdit.classList.add('place-card__edit');
    cardDescription.appendChild(cardName);
    cardName.classList.add('place-card__name');
    cardName.textContent = name;
    cardDescription.appendChild(cardNumber);
    cardNumber.classList.add('place-card__number');
    cardNumber.textContent = number;
    cardDescription.appendChild(cardEmail);
    cardEmail.classList.add('place-card__email');
    cardEmail.textContent = email;
    return card;
  }

  removeCard(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {
      event.target.closest('.places-list').removeChild(event.target.closest('.place-card'));
    }
  }

  listeners() {
    document.querySelector('.places-list').addEventListener('click', this.removeCard);
  }
}
