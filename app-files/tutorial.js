var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("tutorial-slide");

  var nav = document.getElementById("navigation");

  if (n >= slides.length) {
      slideIndex = n;
      nav.innerHTML="<button class=\"tutorial-button finish\" onclick=\"begintour()\">Finish</button>"
    }

  if (n < 1) {
      slideIndex = 1;
    }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



function begintour() {
    var tour = parent.document.getElementById("tour");
    var tutorial = parent.document.getElementById("tour-tutorial");
    tour.style.visibility = "visible";
    tutorial.style.display = "none";
}