const btn = [
  document.querySelector('.profile__edit-button'),
  document.querySelector('.profile__add-button'),
]
const popupClose = document.querySelectorAll('.popup__close-button')
const popupButtonSave = document.querySelectorAll('.popup__button')

const pop = document.querySelectorAll('.popup')
const form = document.querySelector('.popup__body')

const name = document.querySelector('.profile__name')
const job = document.querySelector('.profile__job')
const nameInput = document.querySelector('#popup__name-input')
const jobInput = document.querySelector('#popup__job-input')
const nameOfPhotoInput = document.querySelector('#popup__name-of-photo-input')
const linkInput= document.querySelector('#popup__link-input')
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
function overlay(i) {
  const createOverlay = `<div class="popup__overlay"></div>`
  pop[i].insertAdjacentHTML("afterbegin", createOverlay)
  let popupOverlay = pop[i].querySelector('.popup__overlay')
  popupOverlay.setAttribute('style', 'width: 100%; height: 100%; position: fixed;')
  document.addEventListener('click', (e) => {
    if(e.target === popupOverlay) {
      pop[i].classList.remove('popup_open')
      pop[i].classList.remove('popup__overlay')
    }
  })
}


// закрытие попапа на кнопку ескейп
function _handleEscClose(evt) {
  const key = evt.key
  if (key === "Escape") {
    window.close() // перестал работать после того как я ввел цикл при открытии
  }
}

// открытие попапа
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function() {
    pop[i].classList.add('popup_open')
    document.addEventListener('keydown', _handleEscClose)
    overlay(i)
  } )
}
// закрытие попапа
for(let i = 0; i < popupClose.length; i++){
  popupClose[i].addEventListener("click", function() {
    pop[i].classList.remove('popup_open')
    document.removeEventListener('keydown', _handleEscClose)
  } )
}

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

const containerPhotos = document.querySelector('.elements__items')
const templateElement = document.querySelector('#elementOfCards').content


initCards.forEach(function(i) {
  let element = templateElement.querySelector('.elements__item').cloneNode(true)
  element.querySelector('.elements__title').textContent = i.name
  element.querySelector('.elements__picture').src = i.link;
  element.querySelector('.elements__picture').alt = i.name;
  containerPhotos.appendChild(element);
})



function addItem(name, link) {

  nameOfPhotoInput.value = name
  linkInput.value = link

}

popupButtonSave[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  const templateElement = document.querySelector('#elementOfCards').content
  let element = templateElement.querySelector('.elements__item').cloneNode(true)
  let titleElement = element.querySelector('.elements__title')
  let linkElement = element.querySelector('.elements__picture')
  // element.querySelector('.elements__picture').alt = names;
  addItem(titleElement.textContent, linkElement.src)
  containerPhotos.appendChild(element);
})
