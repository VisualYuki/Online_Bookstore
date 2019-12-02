"use strict";

function multiItemSlider(selector) {
  let mainElement = document.querySelector(selector),
    sliderWrapper = mainElement.querySelector(".slider__wrapper"),
    sliderItems = mainElement.querySelectorAll(".slider__item"),
    sliderControls = mainElement.querySelectorAll(".slider__control"),
    sliderLeftControl = mainElement.querySelector(".slider__control_left"),
    sliderRightControl = mainElement.querySelector(".slider__control_right"),
    wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width),
    itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width),
    step = (wrapperWidth / itemWidth) * 100,
    transform = 0,
    items = [];

  sliderItems.forEach(function(item, index) {
    items.push({ item: item, position: index, transform: 0 });
  });

  let backgroundString;
  for (let i = 0; i < sliderItems.length; i++) {
    backgroundString =
      "background: #" +
      parseInt((Math.random() * 10).toString()) +
      parseInt((Math.random() * 10).toString()) +
      parseInt((Math.random() * 10).toString()) +
      parseInt((Math.random() * 10).toString()) +
      parseInt((Math.random() * 10).toString()) +
      parseInt((Math.random() * 10).toString());

    sliderItems[i].style = backgroundString;
  }

  let position = {
    getItemMin: function() {
      let indexItem = 0;
      items.forEach(function(item, index) {
        if (item.position < item[indexItem].position) indexItem = index;
      });
      return indexItem;
    },
    getItemMax: function() {
      let indexItem = 0;
      items.forEach(function(item, index) {
        if (item.position > item[indexItem].position) indexItem = index;
      });
      return indexItem;
    },
    getMin: function() {
      return items[position.getItemMin()].position;
    },
    getMax: function() {
      return items[position.getItemMax()].position;
    }
  };

  let controlClick = function(e) {
    if (e.target.classList.contains("slider__controls")) {
      e.preventDefault();
      let direction = e.target.classList.contains("slider__control_right")
        ? "right"
        : "left";
      _transformItem(direction);
    }
  };

  let setUpListeners = function() {
    sliderControls.forEach(function(item) {
      item.addEventListener("click", controlClick);
    });
  };

  setUpListeners();
}

multiItemSlider(".large-item-slider");
