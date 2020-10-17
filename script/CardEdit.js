class CardEdit {
  constructor(name, number, email) {
    this.name = name;
    this.number = number;
    this.email = email;
  }

  setCardInfo() {
    this.name = formCardEdit.elements.name.value;
    this.number = formCardEdit.elements.number.value;
    this.email = formCardEdit.elements.email.value;
  }

  updateCardInfo() {
    document
      .querySelector('.current')
      .closest('.current')
      .querySelector('.place-card__name').textContent = this.name;
    document
      .querySelector('.current')
      .closest('.current')
      .querySelector('.place-card__number').textContent = this.number;
    document
      .querySelector('.current')
      .closest('.current')
      .querySelector('.place-card__email').textContent = this.email;
    document.querySelector('.current').classList.remove('current');
  }
}
