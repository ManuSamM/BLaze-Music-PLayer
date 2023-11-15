const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

const playPause = () => {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}
const forskip = () => {
    song.currentTime = song.currentTime + 10;
    progress.dispatchEvent(new Event());
};
const backskip = () => {
    song.currentTime = progress.value - 10;
    progress.value = progress.value - 10;
}

window.addEventListener("keydown", function (event) {
    if (event.key === " " || event.key === 'MediaPlayPause') {
        if (song.paused) {
            song.play();
            ctrlIcon.classList.remove("fa-play");
            ctrlIcon.classList.add("fa-pause");
        }
        else {
            song.pause();
            ctrlIcon.classList.remove("fa-pause");
            ctrlIcon.classList.add("fa-play");
        }
    }
});

window.addEventListener("keydown", function (event) {
    event.preventDefault();
});

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 1000);
}

progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}
const img = document.querySelector("img");
img.ondragstart = () => {
    return false;
};

let songs = [
    {
        name: "Tum Hi Ho",
        audio_path: "music/Tum Hi Ho.mp3",
        image_path: "image/Tum hi ho.jpg"
    },
    {
        name: "Khamoshiyan",
        audio_path: "music/Khamoshiyan.mp3",
        image_path: "image/Khamoshiyan.jpg"
    },
    {
        name: "Bhaag Milkha Bhaag",
        audio_path: "music/Bhaag Milkha Bhaag.mp3",
        image_path: "image/Bhaag Milkha Bhaag.jpg"
    },
    {
        name: "Kabhi Alvida Naa Kehna",
        audio_path: "music/Kabhi Alvida Naa Kehna.mp3",
        image_path: "image/Kabhi Alvida Naa Kehna.jpg"
    },
    {
        name: "Khairiyat",
        audio_path: "music/Khairiyat.mp3",
        image_path: "image/Khairiyat.jpg"
    },
    {
        name: "Chand Sifarish",
        audio_path: "music/Chand Sifarish.mp3",
        image_path: "image/Chand Sifarish.jpg"
    },
    {
        name: "O Re Piya",
        audio_path: "music/O Re Piya.mp3",
        image_path: "image/O Re Piya.jpg"
    },
    {
        name: "Shayad",
        audio_path: "music/Shayad.mp3",
        image_path: "image/Shayad.jpg"
    },
    {
        name: "Tum Hi Ho",
        audio_path: "music/Tum Hi Ho.mp3",
        image_path: "image/Tum hi ho.jpg"
    },
    {
        name: "Khamoshiyan",
        audio_path: "music/Khamoshiyan.mp3",
        image_path: "image/Khamoshiyan.jpg"
    },
    {
        name: "Bhaag Milkha Bhaag",
        audio_path: "music/Bhaag Milkha Bhaag.mp3",
        image_path: "image/Bhaag Milkha Bhaag.jpg"
    },
    {
        name: "Kabhi Alvida Naa Kehna",
        audio_path: "music/Kabhi Alvida Naa Kehna.mp3",
        image_path: "image/Kabhi Alvida Naa Kehna.jpg"
    },
    {
        name: "Khairiyat",
        audio_path: "music/Khairiyat.mp3",
        image_path: "image/Khairiyat.jpg"
    },
    {
        name: "Chand Sifarish",
        audio_path: "music/Chand Sifarish.mp3",
        image_path: "image/Chand Sifarish.jpg"
    },
    {
        name: "O Re Piya",
        audio_path: "music/O Re Piya.mp3",
        image_path: "image/O Re Piya.jpg"
    },
    {
        name: "Shayad",
        audio_path: "music/Shayad.mp3",
        image_path: "image/Shayad.jpg"
    }

];

const cardContainer = document.getElementById('cardContainer');
const songNameElement = document.getElementById('songName');
const songImageElement = document.getElementById('songImage');
const audioPlayer = document.getElementById('song');

function createCards() {
    songs.forEach(song => {
        const card = document.createElement('div');
        card.classList.add('card', 'h-50', 'm-3', 'bg-white', 'bg-opacity-50', 'container-fluid', 'bg-gradient', 'rounded-3', 'shadow');

        const image = document.createElement('img');
        image.src = song.image_path;
        image.classList.add('card-image-top', 'h-75', 'w-100', 'rounded-2', 'mt-2', 'shadow');
        card.appendChild(image);

        const name = document.createElement('div');
        name.classList.add('w-100', 'd-flex', 'justify-content-center', 'p-0', 'mt-2', 'text-white');
        name.innerHTML = song.name;
        card.appendChild(name);

        card.addEventListener('click', () => {
            // Display song details and play audio when a card is clicked
            songNameElement.textContent = song.name;
            songImageElement.src = song.image_path;
            audioPlayer.src = song.audio_path;
            audioPlayer.play();
            ctrlIcon.classList.remove("fa-play");
            ctrlIcon.classList.add("fa-pause");
        });
        card.addEventListener('click', () => {
            let player = document.getElementById("player");
            if (player.classList.contains("bg-danger")) {
                player.classList.remove("bg-danger");
                player.classList.add('bg-success');
            }
            else if (player.classList.contains("bg-success")) {
                player.classList.remove("bg-success");
                player.classList.add('bg-primary');
            }
            else if (player.classList.contains("bg-primary")) {
                player.classList.remove("bg-primary");
                player.classList.add('bg-danger');
            }

        });
        cardContainer.appendChild(card);
    });
}
createCards();