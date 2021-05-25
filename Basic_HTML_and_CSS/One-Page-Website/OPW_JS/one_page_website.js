// Opens the modal:
function openModal(tier) {
  document.getElementById(tier).style.display = "block";
}

// Closes the modal:
function closeModal(tier) {
  document.getElementById(tier).style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls:
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls:
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); // EVERY slide has a .mySlides (calls them all)
  var dots = document.getElementsByClassName("demo"); // EVERY MODAL's thumbnail has a .demo (calls them all)
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
