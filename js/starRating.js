// let title = document.getElementsByClassName("rating-right-title");

let title = document.getElementsByClassName("rating-right-title");
let userClickedRating = false;
let userStarNum = (lastIndexTitle = 0);
const starTotal = 10;

function printStars(starNum) {
  let starBlocks = document.getElementsByClassName("star");

  for (let i = 0; i < starNum; i++) {
    starBlocks[i].className = "star active-star";
  }
  for (let i = starNum; i < starTotal; i++) {
    starBlocks[i].className = "star";
  }

  switchForTitle(starNum);
}

function doEmptyStar(starNum) {
  let starBlocks = document.getElementsByClassName("star");

  for (let i = 0; i < starNum; i++) starBlocks[i].className = "star";

  for (let i = 0; i < userStarNum; i++)
    starBlocks[i].className = "star active-star";

  if (userClickedRating) switchForTitle(userStarNum);
  else title[0].className = "rating-right-title";
}

function switchForTitle(num) {
  switch (num) {
    case 1:
      title[0].className = "rating-right-title one";
      break;
    case 2:
      title[0].className = "rating-right-title two";
      break;
    case 3:
      title[0].className = "rating-right-title three";
      break;
    case 4:
      title[0].className = "rating-right-title four";
      break;
    case 5:
      title[0].className = "rating-right-title five";
      break;
    case 6:
      title[0].className = "rating-right-title six";
      break;
    case 7:
      title[0].className = "rating-right-title seven";
      break;
    case 8:
      title[0].className = "rating-right-title eight";
      break;
    case 9:
      title[0].className = "rating-right-title nine";
      break;
    case 10:
      title[0].className = "rating-right-title ten";
      break;
  }
}

function userClickedOnRating(n) {
  userClickedRating = true;
  userStarNum = n;
}
