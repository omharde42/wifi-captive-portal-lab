const termsCheckbox = document.getElementById("terms-checkbox");
const acceptButton = document.getElementById("accept-button");

const termsSection = document.getElementById("terms-section");
const connectedSection = document.getElementById("connected-section");

const playButton = document.getElementById("play-button");
const audioPlayer = document.getElementById("audio-player");
const audioStatus = document.getElementById("audio-status");


// Enable the Accept button only after the user agrees.
termsCheckbox.addEventListener("change", () => {
  acceptButton.disabled = !termsCheckbox.checked;
});


// Show the connected page after acceptance.
acceptButton.addEventListener("click", () => {
  if (!termsCheckbox.checked) {
    return;
  }

  termsSection.hidden = true;
  connectedSection.hidden = false;
});


// User-controlled audio playback.
playButton.addEventListener("click", async () => {
  try {
    await audioPlayer.play();

    audioStatus.textContent = "Audio is playing.";
    playButton.textContent = "⏸ Audio Playing";
  } catch (error) {
    console.error("Audio playback failed:", error);

    audioStatus.textContent =
      "Audio could not be played. Check the audio file and browser permissions.";
  }
});


// Restore button text when audio finishes.
audioPlayer.addEventListener("ended", () => {
  playButton.textContent = "▶ Play Audio";
  audioStatus.textContent = "Audio finished.";
});


// Update the button if the user pauses manually.
audioPlayer.addEventListener("pause", () => {
  if (!audioPlayer.ended) {
    playButton.textContent = "▶ Play Audio";
  }
});
