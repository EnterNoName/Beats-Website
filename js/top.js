const addAnimateFlag = (el) => {
    el.classList.add('animate')

    el.addEventListener('animationend', (e) => {
        el.classList.remove('animate')
    }, {once : true})
}

const popup = document.querySelector('#morgenshtern-popup')
const spoiler = document.querySelector('.spoiler')

if (spoiler && popup) {
    spoiler.addEventListener('mouseenter', () => {
        if (popup.classList.contains('show')) return
    
        popup.classList.add('show')
        addAnimateFlag(popup)
    
        popup.querySelector('.popup__close').addEventListener('click', () => {
            popup.classList.remove('show')
            addAnimateFlag(popup)
        })
    })
}

const topCards = document.querySelector('.top__cards')
let isCards = false

document.addEventListener("scroll", () => {
    const scrollTop = document.scrollingElement.scrollTop
    const windowHeight = window.innerHeight

    if ((scrollTop + windowHeight) > (topCards.offsetTop + Math.min(topCards.clientHeight / 3, 100)) != isCards) {
        isCards = !isCards
        topCards.classList.toggle('show')
    }
})