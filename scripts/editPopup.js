let profileInfo = document.querySelector('.profile__info')

// позволяет редактировать текст в браузере при клике
// document.body.addEventListener('click', e => e.target.contentEditable = true);

let buttonEdit = document.querySelector('.profile__edit-button')
let buttonSaveEdit = document.querySelector('.popup__button')
let name = document.querySelector('.profile__name')
let descr = document.querySelector('.profile__subtitle')
let nameInput = document.querySelector('#popup__name-input')
let descrInput = document.querySelector('#popup__descr-input')

// sessionStorage.setItem('name', "Жак")
// sessionStorage.setItem('descr', "Исследователь акул")

// name.textContent = localStorage.getItem('name')
// descr.textContent = localStorage.getItem('descr')

// let statusEdit = () => {
//     nameInput.value = sessionStorage.getItem('name')
//     descrInput.value = sessionStorage.getItem('descr')
//
// }
//
// let statusSaveEdit = () => {
//     sessionStorage.name = nameInput.value
//     sessionStorage.descr = descrInput.value
//     // name.textContent = localName
//     // descr.textContent = localDescr
//     name.textContent = sessionStorage.getItem('name')
//     descr.textContent = sessionStorage.getItem('descr')
//
// }

let statusEdit = () => {
    nameInput.value = name.textContent;
    descrInput.value = descr.textContent;
}

let statusSaveEdit = () => {
    name.textContent = nameInput.value;
    descr.textContent = descrInput.value;
}

// buttonEdit.onclick = statusEdit();
// buttonSaveEdit.onclick = statusSaveEdit();


