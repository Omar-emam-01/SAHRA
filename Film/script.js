const database = {
    "Shazam": {
        poster: "../img/shazam.png",
        videoPath: "../source/shazam.mp4",
        trailerID: "go6GEIrcvFY",
        description: "Young orphan Billy Batson is granted the powers of ancient gods, transforming into an adult superhero whenever he says the word 'Shazam!' as he sets out to discover his new abilities."
    },
    "Less Baghdad": {
        poster: "../img/ls.jpg",
        videoPath: "../source/Less Baghdad.mp4",
        trailerID: "aiZZ2g8BO88",
        description: "مغامرة كوميدية مثيرة تنطلق عندما يبحث (يوسف) عن مقبرة الإسكندر الأكبر المفقودة، ليجد نفسه في صراع محموم مع عصابات دولية حول العالم للحصول على الكنز الأسطوري."
    }, 
    "El Mamarr": {
        poster: "../img/el.jpg",
        videoPath: "../source/El Mamarr.mp4",
        trailerID: "NYZVWxzmSPw",
        description: "يخوض الضابط (نور) رحلة استعادة الثقة والصمود بعد نكسة 1967، حيث يقود مجموعة من الجنود البواسل في عملية عسكرية جريئة خلف خطوط العدو، محولاً الهزيمة إلى فجر جديد من الانتصارات في معارك حرب الاستنزاف."
    },
    "avengers endgame": {
        poster: "../img/avegame.jpg",
        videoPath: "../source/avengers endgame.mp4",
        trailerID: "TcMBFSGVi1c",
        description: "After the devastating events of Infinity War, the remaining Avengers must assemble once more in order to restore order to the universe and bring their vanished allies back, leading to an epic final showdown against Thanos."
    },
    "Batman V Superman Dawn Of Justice": {
        poster: "../img/b v s.jpg",
        videoPath: "../source/Batman V Superman Dawn Of Justice.mp4",
        trailerID: "0WWzgGyAH6Y",
        description: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis's most revered, modern-day savior, while the world wrestles with what sort of hero it really needs."
    },
    "Avengers infinity war": {
        poster: "../img/avewar.jpg",
        videoPath: "../source/Avengers infinity war.mp4",
        trailerID: "6ZfuNTqbHE8",
        description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
    },
    "captain marvel": {
        poster: "../img/ca.jpg",
        videoPath: "../source/captain marvel.mp4",
        trailerID: "0LHxvxdRnYc",
        description: "Set in the 1990s, Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races."
    },
    "fast  and furious 6": {
        poster: "../img/fs6.jpg",
        videoPath: "../source/fast  and furious 6.mp4",
        trailerID: "oc_P11PNvRs",
        description: "Hobbs has Dominic and Brian reassemble their crew in order to take down a team of mercenaries, in exchange for full pardons for all their crimes, leading to a high-stakes chase across Europe."
    },
    "fast  and furious 7": {
        poster: "../img/fs7.jpg",
        videoPath: "../source/fast  and furious 7.mp4",
        trailerID: "Skpu5HaVkOc",
        description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his hospitalized brother, while the crew must also stop a terrorist from obtaining a dangerous surveillance program called God's Eye."
    },
    "Mohamed Hussein": {
        poster: "../img/mh.jpg",
        videoPath: "../source/Mohamed Hussein.mp4",
        trailerID: "mq0kLxBw7Bg",
        description: "يعيش سائق التاكسي (محمد حسين) حياة بسيطة، إلى أن يطلب منه رسام عالمي أن يرسم آخر لوحاته وأغلاها ثمناً على ظهره، ليجد نفسه مطارداً من عصابات تهريب الآثار والشرطة، في رحلة كوميدية لإثبات براءته وحماية اللوحة."
    },
    "Scoob": {
        poster: "../img/Scoob.jpg",
        videoPath: "../source/Scoob.mp4",
        trailerID: "QGVAEut0yw8",
        description: "The untold story of Scooby-Doo's origins and the greatest mystery in the career of Mystery Inc., as the gang faces a plot to unleash the ghost dog Cerberus upon the world."
    },
    "Spider Man Into The Spider Verse": {
        poster: "../img/spider.jpg",
        videoPath: "../source/Spider Man Into The Spider Verse.mp4",
        trailerID: "ii3n7hYQOl4",
        description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."
    },
    "The Hunger Games Mockingjay": {
        poster: "../img/hunger moc.jpg",
        videoPath: "../source/The Hunger Games Mockingjay.mp4",
        trailerID: "3zVaD7t39w8",
        description: "Katniss Everdeen, now the symbol of the rebellion, reluctantly leads the districts of Panem in a final, all-out war against the tyrannical Capitol and President Snow to secure a future for her people."
    },
    "The Hunger Games The Ballad of Songbirds & Snakes": {
        poster: "../img/hunger snake.jpg",
        videoPath: "../source/The Hunger Games The Ballad of Songbirds & Snakes.mp4",
        trailerID: "RDE6Uz73A7g",
        description: "Years before he would become the tyrannical President of Panem, a young Coriolanus Snow fights to save his fading lineage by mentoring Lucy Gray Baird in the 10th annual Hunger Games."
    },
    "The Hunger Games": {
        poster: "../img/hunger.jpg",
        videoPath: "../source/The Hunger Games.mp4",
        trailerID: "mfmrPu43DF8",
        description: "In a dystopian future, Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death."
    }
};

const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btndisplay-popup');
const iconClose = document.querySelector('.icon-close');
const params = new URLSearchParams(window.location.search);
const mediaName = params.get('name');

function loadMediaData() {
    if (mediaName && database[mediaName]) {
        const item = database[mediaName];
        
        document.getElementById('media-title').innerText = mediaName;
        document.getElementById('media-poster').src = item.poster;
        document.getElementById('media-description').innerText = item.description;

        const trailerDiv = document.getElementById('trailer-container');
        trailerDiv.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${item.trailerID}" 
            frameborder="0" allowfullscreen></iframe>
        `;

        const actionDiv = document.getElementById('action-buttons');
        actionDiv.innerHTML = `
            <a href="javascript:void(0)" class="play-btn" id="start-movie">WATCH FILM</a>
        `;

        document.getElementById('start-movie').onclick = () => {
            const playerSection = document.getElementById('movie-player-section');
            const videoPlayer = document.getElementById('main-video-player');
            const nowPlayingText = document.getElementById('now-playing');

            playerSection.style.display = 'block';
            
            videoPlayer.src = item.videoPath;
            nowPlayingText.innerText = `مشاهدة الآن: ${mediaName}`;
            
            videoPlayer.play();

            playerSection.scrollIntoView({ behavior: 'smooth' });
        };
        
        setTimeout(() => {
            wrapper.classList.add('active-popup');
        }, 100);
    }
}

btnPopup.addEventListener('click', () => wrapper.classList.add('active-popup'));
iconClose.addEventListener('click', () => wrapper.classList.remove('active-popup'));

loadMediaData();