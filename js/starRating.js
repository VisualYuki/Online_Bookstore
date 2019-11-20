let title = document.getElementsByClassName("rating-right-title");
let lastIndexTitle = 0;
function printStars(starNum) {
  let starBlocks = document.getElementsByClassName("star");
  for (let i = 0; i < starNum; i++) {
    starBlocks[i].className += " active-star";
  }
  switch (starNum) {
    case 1: {
      title[0].className += " one";
      lastIndexTitle = 1;
      break;
    }
    case 2:
      title[0].className += " one";
      lastIndexTitle = 1;
  }
}

function doEmptyStar(starNum) {
  let starBlocks = document.getElementsByClassName("star");
  for (let i = 0; i < starNum; i++) {
    starBlocks[i].className = starBlocks[i].className.replace(
      " active-star",
      ""
    );
  }
}
