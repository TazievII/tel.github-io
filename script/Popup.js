class Popup {
  open(event) {
    if (event.target.classList.contains('user-info__editbutton')) {
      let edit = document.querySelector('#popup1');
      edit.classList.add('popup_is-opened');
      let firstname = formEdit.elements.firstname;
      let about = formEdit.elements.about;
      firstname.value = document.querySelector('.user-info__name').textContent;
      about.value = document.querySelector('.user-info__job').textContent;
    } else if (event.target.classList.contains('user-info__button')) {
      let newCard = document.querySelector('#popup2');
      newCard.classList.add('popup_is-opened');
    } else if (event.target.classList.contains('place-card__edit')) {
      let editCard = document.querySelector('#popup4');
      editCard.classList.add('popup_is-opened');
      let cardName = formCardEdit.elements.name;
      let cardNumber = formCardEdit.elements.number;
      let cardEmail = formCardEdit.elements.email;
      event.target.closest('.place-card').classList.add('current');
      cardName.value = event.target
        .closest('.place-card')
        .querySelector('.place-card__name').textContent;
      cardNumber.value = event.target
        .closest('.place-card')
        .querySelector('.place-card__number').textContent;
      cardEmail.value = event.target
        .closest('.place-card')
        .querySelector('.place-card__email').textContent;
    }
  }

  close(event) {
    if (event.target.classList.contains('popup__close')) {
      event.target.closest('.popup').classList.remove('popup_is-opened');
      document.querySelector('.current').classList.remove('current');
    } 
  }
}
