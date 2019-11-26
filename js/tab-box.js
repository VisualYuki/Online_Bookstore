"use strict";

let tabItems = document.querySelectorAll(".tab-list > div");
let tabLinks = document.querySelectorAll(".tab-nav > div");
let mainInfoBlock = document.getElementsByClassName("main-info");
let lastItemIndex = 0;
showTabItem(lastItemIndex);

function showTabItem(currentIndex) {
  tabItems[lastItemIndex].style.display = "None";
  tabItems[currentIndex].style.display = "Block";

  tabLinks[lastItemIndex].className = tabLinks[lastItemIndex].className.replace(
    " active-link",
    ""
  );
  tabLinks[currentIndex].className =
    tabLinks[currentIndex].className + " active-link";

  if (currentIndex == 1) {
    mainInfoBlock[0].className =
      mainInfoBlock[0].className + " secondTabHeight";
  } else {
    mainInfoBlock[0].className = mainInfoBlock[0].className.replace(
      " secondTabHeight",
      ""
    );
  }

  lastItemIndex = currentIndex;
}
