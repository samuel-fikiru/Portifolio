const humbergurIcon = document.querySelector('.ham-burger');
const humbergerMenu = document.querySelector('.hamburger-menu');

humbergurIcon.addEventListener('click', ()=>{
    humbergerMenu.classList.add('hamburger-active');
})