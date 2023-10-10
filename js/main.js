let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remve('bx-x');
    navbar.classList.remve('active'); 
} 
const sr = ScrollReveal ({
    distance:'60px',
    duration: 2500,
    delay:  400,
    reset: true,
})

sr.reveal('.texto',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})
sr.reveal('.heading',{delay: 200, origin: 'top'})
sr.reveal('.servicos .box',{delay: 200, origin: 'left'})
sr.reveal('.texto-img .box',{delay: 499, origin: 'left'})
sr.reveal('.sobre-texto',{delay:500, origin: 'top'})
sr.reveal('.boletim',{delay:500, origin: 'left'})
sr.reveal('.Rodape',{delay: 800, origin: 'left'})