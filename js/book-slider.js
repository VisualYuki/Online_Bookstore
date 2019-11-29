"use strict";

function multiItemSlider(selector) {
  let mainElement = document.querySelector(selector),
  (sliderWrapper = mainElement.querySelector(".slider__wrapper")),
    (sliderItems = sliderWrapper.querySelectorAll(".slider-item")),
    (sliderControls = mainElement.querySelectorAll("slider__control")),
    (sliderLeftControl = mainElement.querySelector("slider__control_left")),
    (sliderRightControl = mainElement.querySelector("slider__control_right")),
    (wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width)),
  itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width),
  (step = (wrapperWidth / itemWidth) * 100), (transform = 0), (items = []);
}

multiItemSlider(".large-item-slider");
