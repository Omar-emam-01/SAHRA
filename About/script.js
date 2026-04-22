const wrapper = document.querySelector('.wrapper-about');
const btnPopup = document.querySelector('.btnAbout-popup');
const iconClose = document.querySelector('.icon-close');

wrapper.classList.add('active-popup');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});