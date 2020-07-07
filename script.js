const audio = document.querySelector('.staticAudio');

function audioplay() {
    audio.play();

}

function pauseAudio() {
    audio.pause();
}


 //Volume Slider
document.querySelector('.slider');
const slider = document.querySelector('.slider')
slider.oninput = (e) => {
    const volume = e.target.value
    slider.volume = volume
    audio.volume = volume
}

var prompt = document.querySelector('.nav')
