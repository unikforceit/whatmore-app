$(document).ready(function () {
    $(".draggable").draggable();

    $("#floating-video").on("click", function () {
      $("#floating-video").hide();
      $("#popup-overlay").fadeIn();
      $("#popup-video").fadeIn();
      $("#popup-video-player video")[0].play();
    });

    var windowHeight = $(window).height();
    var floatingVideoHeight = $("#floating-video").height();
    var initialTop = (windowHeight - floatingVideoHeight) / 2;

    // Set the initial position
    $("#floating-video").css("top", initialTop + "px");

    $("#popup-overlay, #popup-video #video-close").on("click", function () {
      $("#floating-video").show();
      $("#popup-overlay").fadeOut();
      $("#popup-video").fadeOut();
      $("#popup-video-player video")[0].pause();
    });

    $("#floating-video .play-button").on("click", function () {
      $("#floating-video video")[0].play();
    });

    $("#floating-video #video-remove").on("click", function () {
      $("#floating-video").remove();
    });

    $("#popup-video .sound-toggle").on("click", function () {
      var videoPlayer = $("#popup-video-player video")[0];
      if (videoPlayer.muted) {
        videoPlayer.muted = false;
        $(this).css("fill", "#fff");
      } else {
        videoPlayer.muted = true;
        $(this).css("fill", "#ccc");
      }
    });
    $("#popup-video-player video").on("click", function () {
      var video = $(this)[0];
      video.muted = !video.muted;

      if (video.muted) {
        $("#floating-video .sound-toggle").css("fill", "#ccc");
      } else {
        $("#floating-video .sound-toggle").css("fill", "#fff");
      }
    });

    $("#open-cart").on("click", function() {
        $("#popup-video .add-to-cart").fadeOut();
        $("#cart-popup").addClass("cart-popped");
        $("#cart-popup").fadeIn();
      });
    
      $("#cart-close").on("click", function() {
        $("#popup-video .add-to-cart").fadeIn();
        $("#cart-popup").fadeOut();
        $("#cart-popup").removeClass("cart-popped");
      });
  });