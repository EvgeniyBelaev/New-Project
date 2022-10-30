const burger = document.querySelector('#burger')
const container = document.querySelector('.container')
const main = document.querySelector('#main')


burger.addEventListener('click', () => {
    container.classList.toggle('active')
    burger.classList.toggle('burger')
    burger.classList.toggle('btn-close')
    main.classList.toggle('main-active')
})