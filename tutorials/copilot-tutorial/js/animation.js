const dancer = document.querySelector("#dancer");
const danceButton = document.querySelector("#dance-button");
const audioFileInput = document.querySelector("#audio-file");
const audioButton = document.querySelector("#audio-button");
const audioStatus = document.querySelector("#audio-status");
const backgroundAudio = document.querySelector("#background-audio");

danceButton.addEventListener("click", () => {
    const isPaused = dancer.classList.toggle("is-paused");
    danceButton.textContent = isPaused ? "Resume the dance" : "Pause the dance";
    danceButton.setAttribute("aria-pressed", String(isPaused));
});

let audioObjectUrl;

audioFileInput.addEventListener("change", () => {
    const file = audioFileInput.files[0];
    if (!file) {
        return;
    }

    if (audioObjectUrl) {
        URL.revokeObjectURL(audioObjectUrl);
    }

    backgroundAudio.pause();
    audioObjectUrl = URL.createObjectURL(file);
    backgroundAudio.src = audioObjectUrl;
    backgroundAudio.load();
    audioButton.disabled = false;
    audioButton.textContent = "Play audio";
    audioStatus.textContent = `${file.name} is ready. Click Play audio to start.`;
});

audioButton.addEventListener("click", () => {
    if (backgroundAudio.paused) {
        backgroundAudio.play()
            .then(() => {
                audioButton.textContent = "Pause audio";
                audioStatus.textContent = "Your soundtrack is playing.";
            })
            .catch(error => {
                console.error("Audio playback failed:", error);
                audioStatus.textContent = "Couldn't play that file. Try choosing another audio file.";
            });
        return;
    }

    backgroundAudio.pause();
    audioButton.textContent = "Play audio";
    audioStatus.textContent = "Your soundtrack is paused.";
});
