const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const iconLink = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
})

function iconAction(){
    navMenu.classList.remove('show-menu')
}

iconLink.forEach(link => link.addEventListener('click',iconAction))
