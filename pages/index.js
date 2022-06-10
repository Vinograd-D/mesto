'use strict'

//      variables
const buttonEditProfile = document.querySelector('.profile__edit-button')
const buttonAddCard = document.querySelector('.profile__add-button')

const popupCloseButtons = document.querySelectorAll('.popup__close-button')

const formEditProfile = document.querySelector('form[name = "editProfile"]')
const formAddCard = document.querySelector('form[name = "addCard"]')

const popupEditProfile = document.querySelector('.popup_action_edit-profile')
const popupAddCard = document.querySelector('.popup_action_add-card')
const popupImage = document.querySelector('.popup_action_zoomer')
const popupsContent = document.querySelectorAll('.popup__content')

const name = document.querySelector('.profile__name')
const job = document.querySelector('.profile__job')
const nameInput = document.querySelector('#popup__name-input')
const jobInput = document.querySelector('#popup__job-input')
const nameOfPhotoInput = document.querySelector('#popup__name-of-photo-input')
const linkInput = document.querySelector('#popup__link-input')

const templateElement = document.querySelector('#elementOfCards').content
const containerPhotos = document.querySelector('.elements__items')

const popupWrapper = document.querySelector('.popup__wrapper')
const popupWrapperImage = popupWrapper.querySelector('.popup__image')
const popupWrapperTitle = popupWrapper.querySelector('.popup__figcaption')
//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
//              arrow functions
// запись данных профиля в модальное окно и вызов
const editStatus = () => {
  nameInput.value = name.textContent
  jobInput.value = job.textContent
}
// перезапись данных с модального окна на страницу
const editSaveStatus = () => {
  name.textContent = nameInput.value
  job.textContent = jobInput.value
}
// delete
const deleteItem = (e) => e.target.closest("li").remove()
// like
const likeItem = (e) => e.target.classList.toggle("elements__like-button_active")
//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
//        functions
// function opened modal window
function openPopup(pop) {
  pop.classList.add('popup_open')
//  document.addEventListener('keydown', handlerEscClose)
 // document.addEventListener('keydown', handlerEscClose.bind(null, pop))
//   document.addEventListener('keydown', function(e) {
//     let keyCode = e.key
//     console.log('d ' + keyCode)
//     if (keyCode === 'Escape') {
//       console.log(keyCode)
//       closePopup(pop)
 // window.close()
 // this.close()
 //     }
 //  })
}

//function closed modal window
function closePopup(pop) {
  pop.classList.remove('popup_open')
 // document.removeEventListener('keydown', handlerEscClose)
}


// close modal push esc
// function handlerEscClose(pop ,e) { //  не совсем понимаю но кажется они не видят друг друга хоть и закрывает
//   let keyCode = e.key
//   console.log('d ' + keyCode)
//       if (keyCode === 'Escape')  {
//         console.log(keyCode)
//         closePopup(popupEditProfile)
//         closePopup(popupAddCard)
//         closePopup(popupImage)
//     }
// }


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
function renderItems(nameValue, linkValue) {
  const element = templateElement.querySelector('.elements__item').cloneNode(true)
  const title = element.querySelector('.elements__title')
  const link = element.querySelector('.elements__picture')
  const handleLikeButton = element.querySelector('.elements__like-button')
  const handleDeleteButton = element.querySelector('.elements__delete-button')
  title.textContent = nameValue
  link.src = linkValue
  link.alt = nameValue

  handleLikeButton.addEventListener('click', (e) => likeItem(e))// like

  handleDeleteButton.addEventListener('click', (e) => deleteItem(e))//delete

  link.addEventListener('click', () => { // popupWrapperImage
    popupWrapperImage.src = linkValue
    popupWrapperImage.alt = nameValue
    popupWrapperTitle.textContent = nameValue
    openPopup(popupImage)
  })

  return element
}

initialCards.forEach((i) => {
  containerPhotos.append(renderItems(i.name, i.link));
})

//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
//      Buttons
// submit 1
formEditProfile.addEventListener('submit', function (evt) { // поменял название, но он и так на форму привязан, а не на кнопку
  evt.preventDefault(); // или дефаулт нужно отдельно?
  editSaveStatus()
  closePopup(popupEditProfile)
});
// submit 2
formAddCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  containerPhotos.prepend(renderItems(nameOfPhotoInput.value, linkInput.value));
  closePopup(popupAddCard)
  this.reset();
});
//
// call modal window "edit profile"
buttonEditProfile.addEventListener('click', () => {
  editStatus()
  openPopup(popupEditProfile)

})
// call modal window "add cards"
buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard)
})

//---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=---=--=-=-==-===-==-=--=---=--=-==-===-==-=--=
// close event
popupsContent.forEach(container =>
  container.addEventListener('click', e =>
    e.stopPropagation() // метод, который бойкотирует события
  )
)
popupWrapper.addEventListener('click', e => e.stopPropagation())


// вызов на значок икс
popupCloseButtons.forEach(el =>
  el.addEventListener('click', e =>
    closePopup(e.target.closest('.popup')
    )
  )
)
// overlay
const popupsList = [
  popupEditProfile,
  popupAddCard,
  popupImage
];
popupsList.forEach(el =>
  el.addEventListener('click', e =>
    closePopup(e.target.closest('.popup')
    )
  )
)
