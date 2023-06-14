// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Load an audio file
const audioElement2 = new Audio('media/ut-audio/paperloop-test.wav');
const sourceNode = audioContext.createMediaElementSource(audioElement2);

// Select the play button element
const playButton = document.querySelector('.play-button2');

// Connect the source node to the audio context destination (e.g., speakers)
sourceNode.connect(audioContext.destination);

// Attach an event listener to the play button
playButton.addEventListener('click', function() {
    // Play the audio
    audioElement2.play();
  });