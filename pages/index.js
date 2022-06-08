'use strict'

//      variables
const btn = [
  document.querySelector('.profile__edit-button'),
  document.querySelector('.profile__add-button'),
]
const popupClose = document.querySelectorAll('.popup__close-button')

const buttonEditProfile = document.forms.editProfile
const buttonAddCard = document.querySelector('form[name = "addCard"]')

const pop = document.querySelectorAll('.popup')
const popContent = document.querySelectorAll('.popup__content')
const changeLikeButton = document.querySelector('.elements__like-button')

const name = document.querySelector('.profile__name')
const job = document.querySelector('.profile__job')
const nameInput = document.querySelector('#popup__name-input')
const jobInput = document.querySelector('#popup__job-input')
const nameOfPhotoInput = document.querySelector('#popup__name-of-photo-input')
const linkInput = document.querySelector('#popup__link-input')

const templateElement = document.querySelector('#elementOfCards').content
const containerPhotos = document.querySelector('.elements__items')

const popWrapperImage = document.querySelector('.popup__wrapper')
const popupImage = popWrapperImage.querySelector('.popup__image')
const popupTitle = popWrapperImage.querySelector('.popup__figcaption')
//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
//              arrow functions
// запись данных профиля в модальное окно и вызов
const statusEdit = () => {
  nameInput.value = name.textContent
  jobInput.value = job.textContent
}

// перезапись данных с модального окна на html страницу
const statusSaveEdit = () => {
  name.textContent = nameInput.value
  job.textContent = jobInput.value
}
//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
//        functions
// function opened modal window
function open(pop) {
  pop.classList.add('popup_open')
  escClose(pop)
}
//function closed modal window
function close(pop) {
  pop.classList.remove('popup_open')
  escClose(pop)
}

// закрытие попапа на кнопку ескейп
function escClose(pop) {
  const escape = (e) => {
    if (e.which === 27)
      close(pop)
    document.removeEventListener('keydown', escape);
  }
  document.addEventListener('keydown', escape)
}

//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
// array of image objs
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
  const changeLikeButton = el.querySelector('.elements__like-button')
  title.textContent = nameValue
  link.src = linkValue
  link.alt = nameValue

  changeLikeButton.addEventListener('click', e =>
    e.target.classList.toggle('elements__like-button_active')) // like

//delete

  link.addEventListener('click', () => { // popupImage
    popupImage.src = linkValue
    popupImage.alt = nameValue
    popupTitle.textContent = nameValue
    open(pop[2])
  } )

return el
}

initialCards.forEach((i) => {
  containerPhotos.append(renderCards(i.name, i.link));
})

//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
//      Buttons
//
buttonEditProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  statusSaveEdit()
  close(pop[0])
});
//
buttonAddCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  containerPhotos.prepend(renderCards(nameOfPhotoInput.value, linkInput.value));
  close(pop[1])
  this.reset();
});
// call modal window "edit profile"
btn[0].addEventListener('click', () => {
  statusEdit()
  open(pop[0])

})
// call modal window "add cards"
btn[1].addEventListener('click', () => {
  open(pop[1])
})

//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
// close
popContent.forEach(container  =>
  container.addEventListener('click', e =>
    e.stopPropagation() // метод, который бойкотирует события
  )
)
popWrapperImage.addEventListener('click', e => e.stopPropagation())


// вызов на значок икс
popupClose.forEach( el =>
  el.addEventListener('click', e =>
    close(e.target.closest('.popup')
    )
  )
)
// overlay
pop.forEach(el =>
  el.addEventListener('click', e =>
    close(e.target.closest('.popup')
    )
  )
)
