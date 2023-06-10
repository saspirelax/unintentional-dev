// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Load an audio file
const audioElement = new Audio('media/ut-audio/paperloop-test.wav');
const sourceNode = audioContext.createMediaElementSource(audioElement);

// Select the play button element
const playButton = document.querySelector('.play-button');

// Connect the source node to the audio context destination (e.g., speakers)
sourceNode.connect(audioContext.destination);

// Attach an event listener to the play button
playButton.addEventListener('click', function() {
    // Play the audio
    audioElement.play();
  });