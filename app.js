const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');

    // Display Time
    const timeDisplay = document.querySelector('.time-display');

    // Get the lenght of outline
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength)
}

app();