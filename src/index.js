// import example from './images/example.png'
import './pages/index.styl'

class Game {
    name = 'Dmitry Vi'
}
const myGame = new Game()

// создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересно!'

// добавляем параграф и заголовок в DOM
const root = document.querySelector('body')
root.append(heading, p)