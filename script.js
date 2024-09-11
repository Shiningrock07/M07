function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });

    // Get elements
    var modal = document.getElementById("videoModal");
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("click-me");
    var span = document.getElementsByClassName("close")[0];

    // Open modal and play video when "Click Me" button is clicked
    btn.onclick = function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      modal.style.display = "flex";  // Show the modal
      video.play(); // Play the video
    }

    // Close modal and pause video when the close button is clicked
    span.onclick = function() {
      modal.style.display = "none"; // Hide the modal
      video.pause(); // Pause the video
    }

    // Close modal and pause video when clicking outside the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
        video.pause(); // Pause the video
      }
    }