let slides = document.getElementsByClassName("item");
let dots = document.getElementsByClassName("slider-dots-item");

let slideNum = slides.length;
let slideIndex = 0;
let lastIndexSlide = 0;

ShowSlide(0);

function plusSlide() {
  if (lastIndexSlide + 1 < slideNum) ShowSlide(lastIndexSlide + 1);
  else ShowSlide(0);
}

function minusSlide() {
  if (lastIndexSlide - 1 < 0) ShowSlide(slideNum - 1);
  else ShowSlide(lastIndexSlide - 1);
}

function showCurrentSlide(n) {
  ShowSlide((slideIndex = n));
}

function ShowSlide(n) {
  slides[lastIndexSlide].style.display = "none";
  dots[lastIndexSlide].className = dots[lastIndexSlide].className.replace(
    " active",
    ""
  );

  slides[n].style.display = "block";
  dots[n].className += " active";

  lastIndexSlide = n;
}
