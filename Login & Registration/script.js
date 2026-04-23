const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

window.onload = () => {
    const transitionLayer = document.querySelector('.transition-layer');
    
    setTimeout(() => {
        transitionLayer.classList.add('active-in');
    }, 100);

    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', e => {
            if (link.hostname === window.location.hostname && !link.href.includes('#')) {
                e.preventDefault();
                let target = link.href;

                transitionLayer.classList.remove('active-in');
                transitionLayer.classList.add('active-out');

                setTimeout(() => {
                    window.location.href = target;
                }, 600);
            }
        });
    });
};

wrapper.classList.add('active-popup');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});