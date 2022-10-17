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


const skillsContent = document.getElementsByClassName('skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills(){
    let itemClass = this.parentNode.className
   
    for(let i = 0; i < skillsContent.length;i++){
        skillsContent[i].className = 'skills-content skills-close'
    }

    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})