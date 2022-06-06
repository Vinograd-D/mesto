let btn = [document.querySelector('.profile__edit-button'), document.querySelector('.popup__close-button')]
let pop = document.querySelector('.popup')

let buttonEdit = document.querySelector('.profile__edit-button')
let buttonSaveEdit = document.querySelector('.popup-btn')
let name = document.querySelector('.profile__name')
let job = document.querySelector('.profile__job')
let nameInput = document.querySelector('#popup__name-input')
let jobInput = document.querySelector('#popup__job-input')

let bodyPopup = document.querySelector('.popup__body')

//открытие попапа
function open() {
  pop.classList.add('popup_open')
  document.addEventListener('keydown', _handleEscClose)
}

//закрытие попапа
function close() {
  pop.classList.remove('popup_open')
  document.removeEventListener('keydown', _handleEscClose)
}

//закрытие попапа Esc
// function _handleEscClose(event) {
//   if (event.code === 'Escape') {
//     popup_open.close();
//   }
// }

function _handleEscClose() {
  const key = event.key
  if (key === "Escape") {
    window.close()
  }
}

btn[0].addEventListener('click', open)

btn[1].addEventListener('click', close)




let statusEdit = () => {
  nameInput.value = name.textContent
  jobInput.value = job.textContent
}

let statusSaveEdit = () => {
  name.textContent = nameInput.value
  job.textContent = jobInput.value
}
buttonEdit.onclick = statusEdit()
// buttonSaveEdit.onclick = statusSaveEdit()


function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  statusSaveEdit()
  window.close()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

bodyPopup.addEventListener('submit', formSubmitHandler)
