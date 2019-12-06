"use strict";

let headerBlock = document.querySelector("header"),
  scrollUpBlock = document.querySelector(".scroll-up"),
  isUsedArrowUp = false,
  lastScrollY = 0,
  startTime,
  goBackScroll = true; // отслеживает идет ли скролл обратно или нет.
const prevNameSrollUpBlock = scrollUpBlock.className,
  heightFromTop = parseInt(getComputedStyle(headerBlock).height.substr(0, 3));

window.onscroll = function() {
  if (
    window.scrollY > heightFromTop ||
    (window.scrollY == 0 && isUsedArrowUp) ||
    goBackScroll
  ) {
    scrollUpBlock.style.display = "flex";
  } else {
    scrollUpBlock.style.display = "none";
    scrollUpBlock.className = prevNameSrollUpBlock;
    isUsedArrowUp = false;
    goBackScroll = false;
  }
  if (window.scrollY == 0) goBackScroll = false;
};

scrollUpBlock.addEventListener("click", function() {
  if (!isUsedArrowUp) {
    lastScrollY = window.scrollY;
    goBackScroll = true;
    isUsedArrowUp = true;
    startTime = performance.now();

    animateScroll();
    scrollUpBlock.className = "arrow-down " + scrollUpBlock.className;
  } else {
    startTime = performance.now();
    animateScroll();
    scrollUpBlock.className = prevNameSrollUpBlock;

    isUsedArrowUp = false;
  }
});

let animation = {
  duratation: 500,
  drawUp: function(progress) {
    //если переход идет в начало страницы
    window.scrollTo(0, lastScrollY - lastScrollY * progress);
  },
  drawDown: function(progress) {
    //если переход идет на стартовую позицию перехода
    window.scrollTo(0, 0 + lastScrollY * progress);
  },
  timing: function(timeFraction) {
    return timeFraction;
  }
};

function animateScroll() {
  let timeFraction = (performance.now() - startTime) / animation.duratation;
  if (timeFraction > 1) timeFraction = 1;

  let progress = animation.timing(timeFraction);
  if (isUsedArrowUp) animation.drawUp(progress);
  else animation.drawDown(progress);

  if (timeFraction < 1) requestAnimationFrame(animateScroll);
}
