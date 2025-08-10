import { themes } from './themes.js'

// Custom dropdown elements
let dropdown = document.querySelector('.dropdown')
// the group around the span/current theme and funky arrow
let themeMenuButton = dropdown.querySelector('.select')
// menu is the group of options
let themeMenuList = dropdown.querySelector('.menu')
// options are all the options in the dropdown menu
let themeMenuListItems = document.querySelectorAll('.theme-item')
// Selected is the span element/default theme that is currently selected
let selectedTheme = dropdown.querySelector('.selected')

// Function to get a random number within a range

// Function to handle theme change and generateButton click
const handleThemeChange = (selectedValue) => {
  let currentTheme = 'default'
  currentTheme = selectedValue
}

// EVENT LISTENER FOR THEME MENU
themeMenuButton.addEventListener('click', () => {
  themeMenuButton.classList.toggle('select-clicked')
  themeMenuList.classList.toggle('menu-open')
})

// EVENT LISTENER FOR SELECTING ITEM IN THEME MENU
themeMenuListItems.forEach((option) => {
  option.addEventListener('click', () => {
    selectedTheme.innerHTML = option.innerHTML // changes menu title
    themeMenuButton.classList.remove('select-clicked')
    themeMenu.classList.remove('menu-open')
    handleThemeChange(option.getAttribute('data-value'))
  })
})

// NEW CHANGES AUGUST 2025
const ballGroup = document.getElementById('ball')
const backElement = document.getElementById('back')
const frontElement = document.getElementById('front')
const clickMeElement = document.getElementById('click-me')
const responseBackground = document.getElementById('response-background')
const responseMessage = document.getElementById('response-message')
const generateButton = document.getElementById('generate')
const resetButton = document.getElementById('reset')

const ballSides = [backElement, frontElement]
const clickableElements = [backElement, frontElement, generateButton]
const responseElements = [responseBackground, responseMessage]

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max)
}

const handleCurrentThemeDataValue = () => {
  const themeFromDisplay = document.getElementById(
    'current-theme-display'
  ).innerHTML
  let currentValue = ''

  themeMenuListItems.forEach((theme) => {
    const themeFromList = theme.innerHTML.replace(/\s+/g, ' ').trim() // removes weird spacing from html title
    if (themeFromList === themeFromDisplay.replace(/\s+/g, ' ').trim()) {
      currentValue = theme.getAttribute('data-value')
    }
  })
  return currentValue
}

const handleHideClickMeElement = () => {
  clickMeElement.classList.add('hide')
}

const handleHideResponse = () => {
  responseElements.forEach((element) => {
    element.classList.remove('show-block')
    element.classList.add('hide')
  })
}

const handleRandomResponse = (currentThemeDataValue) => {
  const randomIndex = getRandomNumber(themes[currentThemeDataValue].length)
  console.log('+++randomIndex', randomIndex, currentThemeDataValue)
  const randomAnswer = themes[currentThemeDataValue][randomIndex]
  responseMessage.innerHTML = randomAnswer
}

const handleResponses = () => {
  responseElements.forEach((element) => {
    if (element.classList.contains('hide')) {
      setTimeout(() => {
        handleShowResponse()
      }, 1600)
    } else {
      handleHideResponse()
    }
  })
}

const handleShakeBall = () => {
  ballSides.forEach((side) => side.classList.add('shake-ball'))
  setTimeout(() => {
    ballSides.forEach((side) => side.classList.remove('shake-ball'))
  }, 1500)
}

const handleShowResponse = () => {
  responseElements.forEach((element) => {
    element.classList.remove('hide')
    element.classList.add('show-block')
    element.classList.add('response-fade-in')
  })
}

const handleShowBack = () => {
  setTimeout(() => {
    backElement.classList.add('show-grid')
    backElement.classList.remove('hide')
    frontElement.classList.add('hide')
    frontElement.classList.remove('show-grid')
  }, 600)
}

const handleShowFront = () => {
  backElement.classList.add('hide')
  backElement.classList.remove('show-grid')
  frontElement.classList.add('show-grid')
  frontElement.classList.remove('hide')

  responseElements.forEach((element) => {
    element.classList.remove('show-block')
    element.classList.add('hide')
  })
}

clickableElements.forEach((el) => {
  el.addEventListener('click', () => {
    handleHideClickMeElement()
    handleRandomResponse(handleCurrentThemeDataValue())
    handleResponses()
    handleShakeBall()
    handleShowBack()
  })
})

resetButton.addEventListener('click', () => {
  handleShowFront()
})
