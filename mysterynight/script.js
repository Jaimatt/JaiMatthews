mybutton = document.getElementById("myBtn");

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function scrollToItem() {
  var element = document.querySelector("#more");
  element.scrollIntoView({behavior: 'smooth'});
}

const delay = 25;
let intervalId;

// function goLeft() {
//   intervalId = setInterval(
//     () => (document.getElementById('scroll_window').scrollLeft -= 5),
//     delay,
//   );
// }

function startScrolling() {
  intervalId = setInterval(
    () => (document.getElementById('scroll_window').scrollLeft += 3),
    delay,
  );
}

function nudgeLeft(){
  document.getElementById('scroll_window').scrollLeft -= 200
}

function nudgeRight(){
  document.getElementById('scroll_window').scrollLeft += 200
}

function stopScrolling() {
  clearInterval(intervalId);
}

// left.addEventListener('mouseover', goLeft);
// left.addEventListener('mouseout', stopScrolling);
scroll_window_parent_hover.addEventListener('mouseout', startScrolling);
scroll_window_parent_hover.addEventListener('mouseover', stopScrolling);
left.addEventListener('click', nudgeLeft);
right.addEventListener('click', nudgeRight);
document.getElementById("scroll_window").scrollLeft = 1

function log() {
  var st = document.getElementById("scroll_window").scrollLeft
  var width = document.getElementById("scroll_window").scrollWidth
  // console.log(st)
  // console.log(document.getElementById("scroll_window").scrollWidth)
  if (st >= width/2) {
    document.getElementById("scroll_window").scrollLeft -= width/2
  }
  if (st < 1) {
    document.getElementById("scroll_window").scrollLeft += width/2
  }
}