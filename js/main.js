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
            navCloseButton.innerHTML = `
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>`
        } else {
            navCloseButton.innerHTML = `
            <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" />
            </svg>`
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