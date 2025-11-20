
 $(document).ready(function() {
    console.log("ready");
  // Create the video element and append it to the body
  var video = $('<video class="covervideo loop" muted playsinline loop autoplay>');
  video.append('<source src="img/1.mp4" type="video/mp4">'); 
  //$('.body-bg-img').prepend('<div class="video-bg"></div>');
  $('.videobg').append(video);

  // Add an event listener to track when the video is loaded
  video.on('loadeddata', function() {
    $(this).addClass('loaded'); 
    $('.body-bg-img').css('background-image', 'none'); 
  });



      const MIN_LOADER_TIME = 2000; // 2 seconds
      const startTime = Date.now();

      let domLoaded = false;
      let mediaLoaded = false;

      // Step 1: DOM ready
      domLoaded = true;

      // Step 2: Wait for all images and videos
      const $images = $("img");
      const $videos = $("video");
      const totalMedia = $images.length + $videos.length;
      let loadedCount = 0;

      if (totalMedia === 0) {
        mediaLoaded = true;
        checkLoader();
        return;
      }

      function mediaLoadedCallback() {
        loadedCount++;
        if (loadedCount === totalMedia) {
          mediaLoaded = true;
          checkLoader();
        }
      }

      // Images
      $images.each(function () {
        const img = new Image();
        img.onload = img.onerror = mediaLoadedCallback;
        img.src = $(this).attr("src");
        if (img.complete) img.onload();
      });

      // Videos
      $videos.each(function () {
        $(this).on("loadeddata error", mediaLoadedCallback);
        if (this.readyState >= 2) mediaLoadedCallback();
      });

      // Step 3: fade loader after both media + DOM ready AND min time passed
      function checkLoader() {
        if (domLoaded && mediaLoaded) {
          const elapsed = Date.now() - startTime;
          const remaining = Math.max(MIN_LOADER_TIME - elapsed, 0);

          setTimeout(() => {
            $(".loader-wrapper").fadeOut("slow");
            $("body").css("overflow-y", "scroll");
            document.querySelector('.loader-wrapper').setAttribute('aria-hidden', 'true');

            console.log(" Page fully loaded, loader hidden");
          }, remaining);
        }
      }
  
      



 });
