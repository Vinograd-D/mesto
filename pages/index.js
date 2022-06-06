const btn = [document.querySelector('.profile__edit-button'),
]
const popupClose = document.querySelector('.popup__close-button')
const pop = document.querySelector('.popup')
const buttonEdit = document.querySelector('.profile__edit-button')
const name = document.querySelector('.profile__name')
const job = document.querySelector('.profile__job')
const nameInput = document.querySelector('#popup__name-input')
const jobInput = document.querySelector('#popup__job-input')
const form = document.querySelector('.popup__body')

// запись данных профиля в модальное окно и вызов
let statusEdit = () => {
  nameInput.value = name.textContent
  jobInput.value = job.textContent
}
buttonEdit.onclick = statusEdit
// buttonSaveEdit.onclick = statusSaveEdit()

// перезапись данных с модального окна на html страницу
let statusSaveEdit = () => {
  name.textContent = nameInput.value
  job.textContent = jobInput.value
}


// закрытие попапа на фон
function overlay() {
  const createOverlay = `<div class="popup__overlay"></div>`
  pop.insertAdjacentHTML("afterbegin", createOverlay)
  let popupOverlay = pop.querySelector('.popup__overlay')
  popupOverlay.setAttribute('style', 'width: 100%; height: 100%; position: fixed;')
  document.addEventListener('click', (e) => {
    if(e.target === popupOverlay) {
      pop.classList.remove('popup_open')
      pop.classList.remove('popup__overlay')
    }
  })
}

// открытие попапа
function open() {
  pop.classList.add('popup_open')
  document.addEventListener('keydown', _handleEscClose)
  overlay()

}

// закрытие попапа
function close() {
  pop.classList.remove('popup_open')
  document.removeEventListener('keydown', _handleEscClose)
  pop.classList.remove('popup__overlay')
}
// закрытие попапа на кнопку ескейп
function _handleEscClose(event) {
  const key = event.key
  if (key === "Escape") {
    window.close()
  }
}

// переделать на forEach
btn[0].addEventListener('click', open)
popupClose.addEventListener('click', close)

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
  statusSaveEdit()
  window.close()
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

let containerPhotos = document.querySelector('.elements__items')
let templateElement = document.querySelector('#elementOfCards').content
let element = templateElement.querySelector('.elements__item').cloneNode(true)
let fragment = document.createDocumentFragment()

initCards.forEach(function(i, index, originalArray) {
  let element = templateElement.querySelector('.elements__item').cloneNode(true)
  element.querySelector('.elements__title').textContent = i.name
  element.querySelector('.elements__picture').src = i.link;
  element.querySelector('.elements__picture').alt = i.name;
  containerPhotos.appendChild(element);
});

// containerPhotos.appendChild(fragment);

/*let container = document.querySelector('.elements__items')
let createFrag = document.createDocumentFragment()
let imgArray = () => {
  let img = document.createElement('img')
  img.classList.add('photo-grid__item')
}



initCards.forEach(function(i, index, originalArray) {
  let img = document.createElement('img')
  img.classList.add('photo-grid__item')
  img.src = i.link;
  img.alt = i.name;
  createFrag.appendChild(img);
});

container.appendChild(createFrag);*/
