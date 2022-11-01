const burger = document.querySelector('#burger')
const container = document.querySelector('.container')
const screens = document.querySelectorAll('.screen')



burger.addEventListener('click', () => {
    container.classList.toggle('active')
    burger.classList.toggle('burger')
    burger.classList.toggle('btn-close')
})

function replaceBg(id) {
    const bg = document.getElementById(id)
    screens.forEach(screen => {
        screen.style.display = 'none'
    })
    bg.style.display = 'block'
}

function changeBg() {
    const links = document.querySelectorAll('.link')
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            replaceBg(e.target.dataset.link)          
        })
        
    })
    const headers = document.querySelectorAll('.header')
    headers.forEach (header => {
        header.addEventListener('click', e => {
            e.preventDefault()
            container.classList.toggle('active') 
        })
    })
    screens.forEach(screen => {
        screen.style.display = 'none'
        screens[0].style.display = 'block'
    })
}
changeBg()