
document.addEventListener('DOMContentLoaded', () => {
const video = document.getElementById("covervideo");
const fallbackImage = document.getElementById("coverimage");

video.play()
  .then(() => {
    // Video is playing — all good!
    console.log("Video playback started.");
  })
  .catch(err => {
    // Playback failed (e.g. autoplay blocked)
    console.warn("Video playback failed:", err);
    video.style.display = "none";
    fallbackImage.style.display = "block";
  });

  
});
