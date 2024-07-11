import { themes } from './themes.js'

let button = document.querySelector('#generate')
let selector = document.querySelector('#theme-select')
let response = document.querySelector('.response')

// Function to get a random number within a range
function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Function to display a random answer
function randomAnswer(themeAnswers) {
  let randomIndex = getRandomNumber(0, themeAnswers.length - 1)
  let randomAnswer = themeAnswers[randomIndex]
  response.innerHTML = randomAnswer
}

// Function to handle theme change and button click
function handleThemeChange() {
  let selectedValue = selector.value
  console.log('Selected theme:', selectedValue)
  let themeAnswers = themes[selectedValue]

  // button.onclick = () => randomAnswer(themeAnswers)
  button.addEventListener('click', () => {
    randomAnswer(themeAnswers)
    showBack()
  })
}

// Add event listener for theme change
selector.addEventListener('change', handleThemeChange)

// Trigger the function for the default option on page load
handleThemeChange()

// Function to change 'back' class' attribute of display to none

let fronts = document.querySelectorAll('.front')
let backs = document.querySelectorAll('.back')

function showBack() {
  backs.forEach(back => {
    back.style.display = 'block'
  })
  fronts.forEach(front => {
    front.style.display = 'none'
  })
}

function hideBack() {
  backs.forEach(back => {
    back.style.display = 'none'
  })
  fronts.forEach(front => {
    front.style.display = 'block'
  })
}