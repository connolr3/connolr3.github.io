document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById("covervideo");
  const fallbackImage = document.getElementById("coverimage");

  function showFallback() {
    video.style.display = "none";
    fallbackImage.style.display = "block";
  }

  // Check if the video format is supported
  if (!video.canPlayType('video/mp4')) {
    return showFallback();
  }

  video.play().then(() => {
    console.log("Video playback started.");
  }).catch(err => {
    console.warn("Video playback failed:", err.name, err.message);

    // Only show fallback for *actual* playback blocks
    if (err.name !== "AbortError") {
      showFallback();
    }
  });
});
