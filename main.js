import { themes } from './themes.js'

// Selecting the necessary DOM elements
let generateButton = document.querySelector('#generate')
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

// Function to handle theme change and generateButton click
let currentTheme = 'default'

function handleThemeChange(selectedValue) {
  console.log('Selected theme:', selectedValue)
  let themeAnswers = themes[selectedValue]
  currentTheme = selectedValue

  function handleClick() {
    randomAnswer(themeAnswers)
    showBack()
  }

  // Remove existing event listeners to prevent multiple bindings
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
select.addEventListener('click', () => {
  select.classList.toggle('select-clicked')
  menu.classList.toggle('menu-open')
})

options.forEach((option) => {
  option.addEventListener('click', () => {
    selected.innerHTML = option.innerHTML
    select.classList.remove('select-clicked')
    menu.classList.remove('menu-open')
    handleThemeChange(option.getAttribute('data-value'))
  })
})

// handleThemeChange('default')


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

function showResponse () {
  prediction.style.display = 'block'
  response.style.display = 'block'
}

function hideResponse () {
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


