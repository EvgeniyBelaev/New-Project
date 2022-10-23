document.querySelector('#menu-btn').addEventListener('click', showMenu)
let menu = document.querySelector('#menu')

function showMenu() {
    menu.classList.toggle('active-menu')        
    menu.classList.toggle('menu')
    document.querySelector('#menu-btn').classList.toggle('burger')
    document.querySelector('#menu-btn').classList.toggle('btn-close') 
    
}
