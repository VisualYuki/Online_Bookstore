"use strict";

function multiItemSlider(selector) {
  let mainElement = document.querySelector(selector),
    sliderWrapper = mainElement.querySelector(".slider__wrapper"),
    sliderItems = mainElement.querySelectorAll(".slider__item"),
    sliderControls = mainElement.querySelectorAll(".slider__control"),
    // sliderLeftControl = mainElement.querySelector(".slider__control_left"),
    // sliderRightControl = mainElement.querySelector(".slider__control_right"),
    wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width),
    itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width),
    step = (itemWidth / wrapperWidth) * 100,
    wrapperTransform = 0,
    positionLeftItem = 0,
    items = [];

  const ITEM_TOTAL = sliderItems.length,
    ITEM_NUM__WRAPPER = parseInt(wrapperWidth / itemWidth);

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
    getMinItemIndex: function() {
      let indexItem = 0;
      items.forEach(function(item, index) {
        if (item.position < items[indexItem].position) indexItem = index;
      });
      return indexItem;
    },
    getMaxItemIndex: function() {
      let indexItem = 0;
      items.forEach(function(item, index) {
        if (item.position > items[indexItem].position) indexItem = index;
      });
      return indexItem;
    },
    getMinItem: function() {
      return items[position.getMinItemIndex()].position;
    },
    getMaxItem: function() {
      return items[position.getMaxItemIndex()].position;
    }
  };

  let transformItem = function(direction) {
    let nextItemIndex = 0;

    if (direction === "right") {
      positionLeftItem++;
      if (positionLeftItem + ITEM_NUM__WRAPPER - 1 > position.getMaxItem()) {
        nextItemIndex = position.getMinItemIndex();
        items[nextItemIndex].position = position.getMaxItem() + 1;
        items[nextItemIndex].transform += ITEM_TOTAL * 100;
        items[nextItemIndex].item.style.transform =
          "translateX(" + items[nextItemIndex].transform + "%";
      }
      wrapperTransform -= step;
    } else if (direction === "left") {
      positionLeftItem--;
      if (positionLeftItem < position.getMinItem()) {
        nextItemIndex = position.getMaxItemIndex();
        items[nextItemIndex].position = position.getMinItem() - 1;
        items[nextItemIndex].transform -= ITEM_TOTAL * 100;
        items[nextItemIndex].item.style.transform =
          "translateX(" + items[nextItemIndex].transform + "%";
      }
      wrapperTransform += step;
    }

    sliderWrapper.style.transform = "translateX(" + wrapperTransform + "%)";
  };
  dfgdfg;
  let controlClick = function(e) {
    if (e.target.classList.contains("slider__control")) {
      e.preventDefault();
      let direction = e.target.classList.contains("slider__control_right")
        ? "right"
        : "left";
      transformItem(direction);
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
