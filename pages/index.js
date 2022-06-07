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


// закрытие попапа на фон
/*
function overlay(i) {
  const createOverlay = `<div class="popup__overlay"></div>`
  pop[i].insertAdjacentHTML("afterbegin", createOverlay)
  let popupOverlay = pop[i].querySelector('.popup__overlay')
  popupOverlay.setAttribute('style', 'width: 100%; height: 100%; position: fixed;')
  document.addEventListener('click', (i) => {
    if (i.target === popupOverlay) {
      pop[i].classList.toggle('popup_open')
      pop[i].classList.toggle('popup__overlay')
    }
  }) // некорректно работает после перебора. не удаляется
}
*/


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
form.addEventListener('submit', formSubmitHandler)


// изначальные фото
const initCards = [
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

const containerPhotos = document.querySelector('.elements__items')
const templateElement = document.querySelector('#elementOfCards').content

function likeButton(el) {
  el.querySelector('.elements__like-button').addEventListener('click', function (e) {
    e.target.classList.toggle('elements__like-button_active')
  })
}

initCards.forEach(function (i) {
  let element = templateElement.querySelector('.elements__item').cloneNode(true)
  element.querySelector('.elements__title').textContent = i.name
  element.querySelector('.elements__picture').src = i.link;
  element.querySelector('.elements__picture').alt = i.name;
  containerPhotos.appendChild(element);
  likeButton(element)
})


popupButtonSave[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  const templateElement = document.querySelector('#elementOfCards').content
  let element = templateElement.querySelector('.elements__item').cloneNode(true)
  element.querySelector('.elements__title').textContent = nameOfPhotoInput.value
  element.querySelector('.elements__picture').src = linkInput.value
  element.querySelector('.elements__picture').alt = nameOfPhotoInput.value
  containerPhotos.appendChild(element);
  nameOfPhotoInput.value = ''
  linkInput.value = ''
  likeButton(element)
  pop[1].classList.remove('popup_open')
})
