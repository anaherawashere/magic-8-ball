let dropdown = document.querySelector('.dropdown');
let select = dropdown.querySelector('.select');
let menu = dropdown.querySelector('.menu');
let options = menu.querySelectorAll('li');
let selected = dropdown.querySelector('.selected');

select.addEventListener('click', () => {
  select.classList.toggle('select-clicked');
  menu.classList.toggle('menu-open');
});

options.forEach(option => {
  option.addEventListener('click', () => {
    selected.innerHTML = option.innerHTML;
    select.classList.remove('select-clicked');
    menu.classList.remove('menu-open');
    // Add any additional functionality you need when an option is selected
    console.log('Selected theme:', option.getAttribute('data-value'));
    // Update the theme
    handleThemeChange(option.getAttribute('data-value'));
  });
});

// Function to handle theme change
function handleThemeChange(selectedValue) {
  let themeAnswers = themes[selectedValue];
  // Your existing logic for handling theme change
}
