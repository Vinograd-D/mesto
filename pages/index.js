const btn = [
  document.querySelector('.profile__edit-button'),
  document.querySelector('.profile__add-button'),
]
const popupClose = document.querySelectorAll('.popup__close-button')
const popupButtonSave = document.querySelectorAll('.popup__button')

const pop = document.querySelectorAll('.popup')
const form = document.querySelector('.popup__content')

const name = document.querySelector('.profile__name')
const job = document.querySelector('.profile__job')
const nameInput = document.querySelector('#popup__name-input')
const jobInput = document.querySelector('#popup__job-input')
const nameOfPhotoInput = document.querySelector('#popup__name-of-photo-input')
const linkInput = document.querySelector('#popup__link-input')

const templateElement = document.querySelector('#elementOfCards').content
const containerPhotos = document.querySelector('.elements__items')

const popupImage = pop[2].querySelector('.popup__image')
const popupTitle = pop[2].querySelector('.popup__figcaption')
// запись данных профиля в модальное окно и вызов
let statusEdit = () => {
  nameInput.value = name.textContent
  jobInput.value = job.textContent
}
btn[0].onclick = statusEdit
// buttonSaveEdit.onclick = statusSaveEdit()

// перезапись данных с модального окна на html страницу
let statusSaveEdit = () => {
  name.textContent = nameInput.value
  job.textContent = jobInput.value
}

//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=

// закрытие попапа на кнопку ескейп
function _handleEscClose(evt) {
  const key = evt.key
  if (key === "Escape") {
    window.close() // перестал работать после того как я ввел цикл при открытии
  }
}

// открытие попапа

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      pop[i].classList.add('popup_open')
      document.addEventListener('keydown', _handleEscClose)
      // overlay(i)
    })
  }
// закрытие попапа
  for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener("click", function () {
      pop[i].classList.remove('popup_open')
      document.removeEventListener('keydown', _handleEscClose)
    })
  }

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
  statusSaveEdit()
  // window.close()
  console.log(pop[0])
  pop[0].classList.remove('popup_open')
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=

// required photos
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
// creating and add cards
function renderCards(nameValue, linkValue) {
  const el = templateElement.querySelector('.elements__item').cloneNode(true)
  let title = el.querySelector('.elements__title')
  let link = el.querySelector('.elements__picture')

  title.textContent = nameValue
  link.src = linkValue
  link.alt = nameValue

  el.querySelector('.elements__like-button').addEventListener('click', e => e.target.classList.toggle('elements__like-button_active')) // like

//delete

  link.addEventListener('click', () => {
    popupImage.src = linkValue
    popupImage.alt = nameValue
    popupTitle.textContent = nameValue
    pop[2].classList.add('popup_open')
  } )

return el
}

initialCards.forEach((i) => {
  containerPhotos.append(renderCards(i.name, i.link));
})


pop[1].addEventListener('submit', function (evt) {
  evt.preventDefault();
  containerPhotos.prepend(renderCards(nameOfPhotoInput.value, linkInput.value));
  pop[1].classList.remove('popup_open')
  pop[1].reset();
});

