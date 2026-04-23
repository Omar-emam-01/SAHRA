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

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.innerText.replace(/\D/g, '');
        const suffix = counter.innerText.replace(/[0-9]/g, '');
        let count = 0;
        const increment = target / 50;

        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.innerText = suffix + Math.ceil(count);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = suffix + target;
            }
        };
        updateCount();
    });
}

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    setTimeout(animateCounters, 500);
});

if (wrapper.classList.contains('active-popup')) {
    setTimeout(animateCounters, 600);
}