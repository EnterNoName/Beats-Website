const topSection = document.querySelector('.top')
const heroSection = document.querySelector('.hero')
const originSection = document.querySelector('.origins')
const trendsSection = document.querySelector('.trends')
const navCloseButton = document.querySelector('.nav__button')
const header = document.querySelector('.header')

let isHeaderOpen = false;

navCloseButton && navCloseButton.addEventListener('click', e => {
    e.preventDefault()
    if (navCloseButton && header) {
        header.querySelector('.nav').classList.toggle("open")
        isHeaderOpen = !isHeaderOpen
    }
})

document.addEventListener('scroll', (e) => {
    updateStates()
})

const updateStates = () => {
    if (heroSection && document.scrollingElement.scrollTop > (heroSection.clientHeight * 0.5 - header.clientHeight * 2)) {
        header.classList.add("show")
    } else {
        header.classList.remove("show")
    }

    if (topSection && document.scrollingElement.scrollTop > (topSection.offsetTop * .8)) {
        topSection.classList.add("animate")
    }

    if (originSection && document.scrollingElement.scrollTop > (originSection.offsetTop * .5)) {
        originSection.classList.add("animate")
    }

    if (trendsSection && document.scrollingElement.scrollTop > (trendsSection.offsetTop * .5)) {
        trendsSection.classList.add("animate")
    }
}

updateStates()