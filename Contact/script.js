const wrapper = document.querySelector('.wrapper-contact');
const btnPopup = document.querySelector('.btnContact-popup');
const iconClose = document.querySelector('.icon-close');

wrapper.classList.add('active-popup');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});