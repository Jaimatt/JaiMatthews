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

function goLeft() {
  intervalId = setInterval(
    () => (document.getElementById('scroll_window').scrollLeft -= 5),
    delay,
  );
}

function goRight() {
  intervalId = setInterval(
    () => (document.getElementById('scroll_window').scrollLeft += 5),
    delay,
  );
}

function stopScrolling() {
  clearInterval(intervalId);
}

left.addEventListener('mouseover', goLeft);
left.addEventListener('mouseout', stopScrolling);
right.addEventListener('mouseover', goRight);
right.addEventListener('mouseout', stopScrolling);

document.getElementById("scroll_window").scrollLeft = 1

function log() {
  var st = document.getElementById("scroll_window").scrollLeft
  console.log(st)
  if (st >= 1710) {
    document.getElementById("scroll_window").scrollLeft -= 1710
  }
  if (st < 1) {
    document.getElementById("scroll_window").scrollLeft += 1709
  }
}