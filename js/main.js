const burger = document.querySelector('#burger')
const container = document.querySelector('.container')



burger.addEventListener('click', () => {
    container.classList.toggle('active')
    burger.classList.toggle('burger')
    burger.classList.toggle('btn-close')
})