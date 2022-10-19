const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const iconLink = document.querySelectorAll('.nav-link')
const skillsContent = document.getElementsByClassName('skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');


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

const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabCon=>{
            tabCon.classList.remove('qualification-active')
        })

        target.classList.add('qualification-active')
        tab.classList.add('qualification-active')
    })
})
