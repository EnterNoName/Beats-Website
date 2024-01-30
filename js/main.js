const heroSection = document.querySelector('.hero')
const navCloseButton = document.querySelector('.header__menu')
const header = document.querySelector('.header')

let isHeaderOpen = false;

navCloseButton && navCloseButton.addEventListener('click', e => {
    e.preventDefault()
    if (navCloseButton && header) {
        header.querySelector('.header__nav').classList.toggle("open")
        isHeaderOpen = !isHeaderOpen

        if (isHeaderOpen) {
            navCloseButton.innerHTML = `<div class="icon icon--close icon--color-background"></div>`
        } else {
            navCloseButton.innerHTML = `<div class="icon icon--menu icon--color-background"></div>`
        }
    }
})

document.addEventListener('scroll', (e) => {
    updateStates()
})

const updateStates = () => {
    if (heroSection && document.scrollingElement.scrollTop > (heroSection.clientHeight / 2 - header.clientHeight)) {
        header.classList.add("show")
        
    } else {
        header.classList.remove("show")
        
    }
}

updateStates()