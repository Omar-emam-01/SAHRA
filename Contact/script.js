const wrapper = document.querySelector('.wrapper-contact');
const btnPopup = document.querySelector('.btnContact-popup');
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

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const devItems = document.querySelectorAll('.dev-item');
const displayImg = document.getElementById('display-img');
const displayName = document.getElementById('display-name');
const displayAge = document.getElementById('display-age');
const displayInsta = document.getElementById('display-insta');
const displayEmail = document.getElementById('display-email');
const displayJob = document.getElementById('display-job');

devItems.forEach(item => {
    item.addEventListener('click', () => {
        devItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const name = item.getAttribute('data-name');
        const age = item.getAttribute('data-age');
        const insta = item.getAttribute('data-insta');
        const email = item.getAttribute('data-email');
        const img = item.getAttribute('data-img');
        const job = item.getAttribute('data-job');

        displayImg.src = img;
        displayName.innerText = name;
        displayAge.innerText = age;
        displayJob.innerText = job;
        displayInsta.href = insta;
        displayEmail.href = `mailto:${email}`;

        const content = document.querySelector('.details-content');
        content.style.animation = 'none';
        void content.offsetWidth;
        content.style.animation = 'slideIn 0.5s ease';
    });
});