// au-control.js

// Select the play button element
const playButton = document.querySelector('.play-button');

// Select the audio element
const audioElement = document.getElementById('#audio1');

// Attach an event listener to the play button
playButton.addEventListener('click', function() {
  // Play the audio
  audioElement.play();
});

// Select the pause button element
const pauseButton = document.querySelector('.pause-button');

// Attach an event listener to the pause button
pauseButton.addEventListener('click', function() {
    // pause the audio
    audioElement.pause();
  });

//volume control 1

const volumeSlider = document.getElementById('#volslide01');
volumeSlider.value = 50; // Set the initial value of the volume slider to 50

volumeSlider.addEventListener('input', function() {
  const volume = volumeSlider.value / 100; // Convert the range slider value to a decimal between 0 and 1
  audioElement.volume = volume; // Set the volume of the audio element
});