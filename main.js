import { moira } from './themes.js'

let button = document.getElementById('generate')


// Choose a random index
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Fill answer into h2
function fillAnswer() {
  let heading = document.getElementById('heading')

  heading.innerHTML = ''

  let randomIndex = getRandomNumber(0, moira.length)
  let randomAnswer = moira[randomIndex]

  heading.innerHTML = randomAnswer
}


// Generate answer when you click the button
for (let i = 0; i < moira.length; i++) {
  button.onclick = fillAnswer
}