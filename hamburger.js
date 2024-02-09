const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const header = document.getElementById('header')

hamburger.addEventListener("click", () => {
    menu.classList.toggle('active')
    hamburger.classList.toggle('active_ham')
})

