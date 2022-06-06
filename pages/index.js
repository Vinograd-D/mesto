let btn = [document.querySelector('.profile__edit-button'), document.querySelector('.popup__close-button')]
let pop = document.querySelector('.popup')

let buttonEdit = document.querySelector('.profile__edit-button')
// let buttonSaveEdit = document.querySelector('.popup-btn')
let name = document.querySelector('.profile__name')
let job = document.querySelector('.profile__job')
let nameInput = document.querySelector('#popup__name-input')
let jobInput = document.querySelector('#popup__job-input')

let form = document.querySelector('.popup__body')

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



// document.body.click(function(e) {
//   if(document.querySelector(e.target).closest(".popup_open").length==0)
//     pop.classList.remove('popup_open');
// });

// переделать на forEach
btn[0].addEventListener('click', open)
btn[1].addEventListener('click', close)

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
  statusSaveEdit()
  window.close()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
form.addEventListener('submit', formSubmitHandler)
