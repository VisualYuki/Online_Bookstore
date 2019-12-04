"use strict";

let headerBlock = document.querySelector("header");

const heightFromTop = parseInt(
  getComputedStyle(headerBlock).height.substr(0, 3)
);

let scrollUpBlock = document.querySelector(".scroll-up");
window.scrollTo(0, 500);
window.onscroll = function() {
  if (
    window.scrollY > heightFromTop ||
    (window.scrollY == 0 && isUsedArrowUp)
  ) {
    scrollUpBlock.style.display = "flex";
  } else {
    scrollUpBlock.style.display = "none";
    scrollUpBlock.className = prevNameSrollUpBlock;
    isUsedArrowUp = false;
    // }
  }
};

let isUsedArrowUp = false,
  lastScrollY = 0;
const prevNameSrollUpBlock = scrollUpBlock.className;

scrollUpBlock.addEventListener("click", function() {
  if (!isUsedArrowUp) {
    lastScrollY = window.scrollY;
    window.scrollTo(0, 0);
    scrollUpBlock.className = "arrow-down " + scrollUpBlock.className;
    isUsedArrowUp = true;
  } else {
    window.scrollTo(0, lastScrollY);

    scrollUpBlock.className = prevNameSrollUpBlock;
    isUsedArrowUp = false;
  }
});
