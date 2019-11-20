let slides = document.getElementsByClassName("item");
let dots = document.getElementsByClassName("slider-dots-item");

let slideNum = slides.length;
let slideIndex = 0;

ShowSlide(slideIndex);

function plusSlide() {
  if (++slideIndex < slideNum) ShowSlide(slideIndex);
  else ShowSlide((slideIndex = 0));
}

function minusSlide() {
  if (--slideIndex < 0) ShowSlide((slideIndex = slideNum - 1));
  else ShowSlide(slideIndex);
}

function showCurrentSlide(n) {
  ShowSlide((slideIndex = n));
}

function ShowSlide(n) {
  for (let i = 0; i < slideNum; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
