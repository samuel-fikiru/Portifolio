const humbergurBtn = document.querySelector('.ham-burger');
const humbergerMenu = document.querySelector('.hamburger-menu');
const crossBtn = document.querySelector('.cross-btn');

humbergurBtn.addEventListener('click', ()=>{
    humbergerMenu.classList.add('hamburger-active');
    humbergurBtn.style.display='none';
    crossBtn.style.display='block';
})
crossBtn.addEventListener('click', ()=>{
    humbergerMenu.classList.remove('hamburger-active');
    crossBtn.style.display='none';
    humbergurBtn.style.display='block';
})