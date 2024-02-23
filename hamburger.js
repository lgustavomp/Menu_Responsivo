const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const header = document.getElementById('header')
const item = document.querySelectorAll('.menu_item')

hamburger.addEventListener("click", () => {
    menu.classList.toggle('active')
    hamburger.classList.toggle('active_ham')
})

item.forEach(e => {
    e.addEventListener("click", () => {
        menu.classList.remove('active')
        hamburger.classList.remove('active_ham')
    })
}) 
    
