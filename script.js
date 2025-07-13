function reveal() {
  document.getElementById("message").classList.remove("hidden");
}

function celebrate() {
  // Stop and reset Jeene Laga Hoon song
  const jeeneAudio = document.querySelector("audio");
  jeeneAudio.pause();
  jeeneAudio.currentTime = 0;

  // Hide main page and show celebration section
  document.querySelector(".main-container").classList.add("hidden");
  document.getElementById("celebration-section").classList.remove("hidden");
}


function cutCake() {
  const audio = document.getElementById("audio");
  audio.play();
  document.getElementById("next-btn").classList.remove("hidden");
}

// Show final "I Love You" scene
function launchFinal() {
  // Stop and reset the HBD audio
  const hbdAudio = document.getElementById("audio");
  hbdAudio.pause();
  hbdAudio.currentTime = 0;

  // Hide celebration section and show the final love scene
  document.getElementById("celebration-section").classList.add("hidden");
  document.getElementById("final-scene").style.display = "block";
}


// Back to main page
function goBack() {
  document.getElementById("final-scene").style.display = "none";
  document.querySelector(".main-container").classList.remove("hidden");
  document.getElementById("message").classList.add("hidden");
  document.getElementById("celebration-section").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");
}
