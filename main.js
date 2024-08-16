import { themes } from './themes.js'

// Selecting the necessary DOM elements
let generateButton = document.querySelector('#generate')
let ball = document.querySelector('.ball')
let response = document.querySelector('.response')

// Custom dropdown elements
let dropdown = document.querySelector('.dropdown')
// the group around the span/current theme and funky arrow
let select = dropdown.querySelector('.select')
// menu is the group of options
let menu = dropdown.querySelector('.menu')
// options are all the options in the dropdown menu
let options = menu.querySelectorAll('li')
// Selected is the span element/default theme that is currently selected
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

// Function to handle theme change and generateButton click
let currentTheme = 'default'

function handleThemeChange(selectedValue) {
  // selectedValue is a string value and name of the theme the user selected
  console.log('Selected theme:', selectedValue)
  // selectedValue is used to select the array of theme answers based on the users selection
  let themeAnswers = themes[selectedValue]
  // current theme changes from default to the users selection
  // TODO: Might be able to remove this line
  currentTheme = selectedValue

  function handleClick() {
    randomAnswer(themeAnswers)
    showBack()
  }

  // Remove existing event listeners to prevent multiple bindings
  // TODO: Maybe these don't do anything because the handle is not even added as Event Listener
  generateButton.removeEventListener('click', handleClick)
  ball.removeEventListener('click', handleClick)

  // Add new event listeners
  generateButton.addEventListener('click', () => {
    // if shake-ball class does not exsist, shake the front, and after 1500 turn the ball and reveal answer
    shakeFront()
    shakeBack()
    hideResponse()
    setTimeout(() => {
      handleClick()
      showResponse()
      prediction.classList.toggle('fade-in')
      response.classList.toggle('fade-in')
    }, 1500)
  })

  ball.addEventListener('click', () => {
    shakeFront()
    shakeBack()
    hideResponse()
    setTimeout(() => {
      handleClick()
      showResponse()
      prediction.classList.toggle('fade-in')
      response.classList.toggle('fade-in')
    }, 1500)
  })
}

// Shake ball function

let ballFront = document.querySelector('.ball-front')
let ballBack = document.querySelector('.ball-back')
let prediction = document.querySelector('.prediction')
let ballSides = [ballFront, ballBack]

function shakeFront() {
  ballFront.classList.toggle('shake-ball')
}
function shakeBack() {
  ballBack.classList.toggle('shake-ball')

  setTimeout(() => {
    ballBack.classList.remove('shake-ball')
    prediction.classList.remove('fade-in')
    response.classList.remove('fade-in')
  }, 1500)
}

// Add event listener for the custom dropdown
// Adds these classes when the select group is clicked, or removes them on second click
select.addEventListener('click', () => {
  select.classList.toggle('select-clicked')
  menu.classList.toggle('menu-open')
})

options.forEach((option) => {
  // listening for a click on one of the options
  option.addEventListener('click', () => {
    // selected.innerHTML is the content in the span
    // option.HTML is the content in the option that was clicked
    selected.innerHTML = option.innerHTML
    // removes the classes when user selects the option (without having to click on the select group)
    select.classList.remove('select-clicked')
    menu.classList.remove('menu-open')
    // handleThemeChange takes a value which is the option's data-value attribute e.g. moira
    handleThemeChange(option.getAttribute('data-value'))
  })
})

// This is here so the generateButton and ball can listen for a click
// Calls the handleThemeChange function to run when the page first loads
// The functions takes a theme 
handleThemeChange('default')

// Function to change 'back' class' attribute of display to none
let fronts = document.querySelectorAll('.front')
let backs = document.querySelectorAll('.back')

function showBack() {
  backs.forEach((back) => {
    back.style.display = 'block'
  })
  fronts.forEach((front) => {
    front.style.display = 'none'
  })
}

function hideBack() {
  backs.forEach((back) => {
    back.style.display = 'none'
  })
  fronts.forEach((front) => {
    front.style.display = 'block'
  })
}

function showResponse() {
  prediction.style.display = 'block'
  response.style.display = 'block'
}

function hideResponse() {
  prediction.style.display = 'none'
  response.style.display = 'none'
}

// Reset button
let resetButton = document.querySelector('#reset')
let clickMeImage = document.querySelector('.clickme')

resetButton.addEventListener('click', () => {
  hideBack()
  clickMeImage.style.display = 'none'
})
