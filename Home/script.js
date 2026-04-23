const wrapper = document.querySelector('.wrapper-home');
const btnPopup = document.querySelector('.btnHome-popup');
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

function scrollSlider(direction) {
    const container = document.querySelector('.movies-container');
    const scrollAmount = 300;
    
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function redirectMe(element) {
    const type = element.getAttribute('data-type');
    const title = element.getAttribute('data-title');
    const season = element.getAttribute('data-season') || "0"; 

    if (type === 'series') {
        window.location.href = `../Series/index.html?name=${encodeURIComponent(title)}&season=${season}`;
    } else {
        window.location.href = `../Film/index.html?name=${encodeURIComponent(title)}`;
    }
}

function searchMovies() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    let cards = document.querySelectorAll('.movie-card');

    cards.forEach(card => {
        let title = card.getAttribute('data-title').toLowerCase();
        
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}