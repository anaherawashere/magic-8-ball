import { themes } from './themes.js'

let button = document.getElementById('generate')
let selector = document.querySelector('#theme-select')
let heading = document.getElementById('heading')

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
  heading.innerHTML = randomAnswer
}

// Function to handle theme change and button click
function handleThemeChange() {
  let selectedValue = selector.value
  console.log('Selected theme:', selectedValue)
  let themeAnswers = themes[selectedValue]

  button.onclick = () => randomAnswer(themeAnswers)
}

// Add event listener for theme change
selector.addEventListener('change', handleThemeChange)

// Trigger the function for the default option on page load
handleThemeChange()