import { themes } from './themes.js'

// Selecting the necessary DOM elements
let button = document.querySelector('#generate')
let ball = document.querySelector('.ball')
let response = document.querySelector('.response')

// Custom dropdown elements
let dropdown = document.querySelector('.dropdown')
let select = dropdown.querySelector('.select')
let menu = dropdown.querySelector('.menu')
let options = menu.querySelectorAll('li')
let selected = dropdown.querySelector('.selected')

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
function handleThemeChange(selectedValue) {
  console.log('Selected theme:', selectedValue)
  let themeAnswers = themes[selectedValue]

  function handleClick() {
    randomAnswer(themeAnswers)
    showBack()
  }

  // Remove existing event listeners to prevent multiple bindings
  button.removeEventListener('click', handleClick)
  ball.removeEventListener('click', handleClick)

  // Add new event listeners
  button.addEventListener('click', handleClick)
  ball.addEventListener('click', handleClick)
}

// Add event listener for the custom dropdown
select.addEventListener('click', () => {
  select.classList.toggle('select-clicked')
  menu.classList.toggle('menu-open')
})

options.forEach(option => {
  option.addEventListener('click', () => {
    selected.innerHTML = option.innerHTML
    select.classList.remove('select-clicked')
    menu.classList.remove('menu-open')
    handleThemeChange(option.getAttribute('data-value'))
  })
})

// Trigger the function for the default option on page load
handleThemeChange('default')

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