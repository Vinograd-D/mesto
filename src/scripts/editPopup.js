
let buttonEdit = document.querySelector('.profile__edit-button')
let buttonSaveEdit = document.querySelector('.popup-btn')
let name = document.querySelector('.profile__name')
let descr = document.querySelector('.profile__subtitle')
let nameInput = document.querySelector('#popup__name-input')
let descrInput = document.querySelector('#popup__descr-input')

let statusEdit = () => {
    nameInput.value = name.textContent
    descrInput.value = descr.textContent
}

let statusSaveEdit = () => {
    name.innerHTML = nameInput.value
    descr.innerHTML = descrInput.value
}

buttonEdit.onclick = statusEdit()
buttonSaveEdit.onclick = alert('hello')