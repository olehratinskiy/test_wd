const header = document.querySelector('.header-full')
const headerPlaceholder = document.querySelector('.header-placeholder')
const menu = document.querySelector('.menu')
const hiddenMenuBtn = document.querySelector('.menu-hidden')
let hidden = true

hiddenMenuBtn.addEventListener('click', function() {
    if (hidden === true) {
        header.style.height = '160px'
        headerPlaceholder.style.height = '160px'
        menu.style.display = 'flex';
        hidden = false
    } else {
        header.style.height = '65px'
        headerPlaceholder.style.height = '65px'
        menu.style.display = '';
        hidden = true
    }
})
