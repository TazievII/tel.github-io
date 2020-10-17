/* Переменные */
const openClose = document.querySelector('.root');
const cardContainer = document.querySelector('.places-list');
const addButton = document.querySelector('.popup__button');
const form = document.forms.new;
const formEdit = document.forms.edit;
const formCardEdit = document.forms.cardedit;
const formSearch = document.forms.searchForm;
const cardList = new CardList(cardContainer, Array);
const cardElement = new Card();
const seachCard = new Search(formSearch.elements.searchField.value);
const popup = new Popup(document.querySelectorAll('.popup'));
const userInfo = new UserInfo(formEdit.elements.firstname.value, formEdit.elements.about.value);
const cardEdit = new CardEdit(
  formCardEdit.elements.name.value,
  formCardEdit.elements.number.value,
  formCardEdit.elements.email.value,
);
cardList.render(initialCards);



/* Слушатели событий */
openClose.addEventListener('click', (event) => {
  popup.open(event);
  popup.close(event);
});
form.addEventListener('submit', () => {
  event.preventDefault();
  let name = document.querySelector('.popup__input_type_name').value;
  let number = document.querySelector('.popup__input_type_number').value;
  let email = document.querySelector('.popup__input_type_email').value;
  const saveButton = document.querySelector('.popup__button');
  console.log(email);
  cardList.addCard(name, number, email);
  form.reset();
  let close = document.querySelector('#popup2');
  close.classList.remove('popup_is-opened');
  saveButton.setAttribute('disabled', true);
  saveButton.classList.add('popup__button_disabled');
});
formEdit.addEventListener('submit', (event) => {
  event.preventDefault();
  userInfo.setUserInfo();
  userInfo.updateUserInfo();
  event.target.closest('.popup').classList.remove('popup_is-opened');
});
formCardEdit.addEventListener('submit', (Event) => {
  Event.preventDefault();
  cardEdit.setCardInfo();
  cardEdit.updateCardInfo();
  Event.target.closest('.popup').classList.remove('popup_is-opened');
});
formSearch.addEventListener('submit', (event) =>{
  event.preventDefault();
  let arr = document.querySelectorAll('.place-card');
  let searchValue = formSearch.elements.searchField.value;
  seachCard.searchCard(searchValue, arr)
})
