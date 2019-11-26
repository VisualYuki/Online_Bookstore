"use strict";

let desriptionSelector = document.getElementsByClassName("desription-p");

const selectorDesriptionName = desriptionSelector[0].className;
let isShownDecription = false;

function showOrHideInfo() {
  if (isShownDecription)
    desriptionSelector[0].className = selectorDesriptionName + " active-hide";
  else
    desriptionSelector[0].className = selectorDesriptionName + " active-show";

  isShownDecription = !isShownDecription;
}
