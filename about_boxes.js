const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const open_box = urlParams.get('window')
console.log(open_box)

document.getElementById("s"+open_box).style.display = "block"
document.getElementById("b"+open_box).classList.add("button_3")
document.getElementById("b"+open_box).classList.remove("button_2")

function loadscreen(id) {
  if (document.getElementById("b"+id).className == "button_3") {
    document.getElementById("b"+id).classList.remove("button_3")
    document.getElementById("b"+id).classList.add("button_2")
    document.getElementById("s"+id).style.display = "none"
  } else {
    for (i = 0; i < 4; i++) {
      document.getElementById("b"+i).classList.remove("button_3")
      document.getElementById("b"+i).classList.add("button_2")
      document.getElementById("s"+i).style.display = "none"
    }
    document.getElementById("b"+id).classList.add("button_3")
    document.getElementById("b"+id).classList.remove("button_2")
    document.getElementById("s"+id).style.display = "block"
    var element = document.querySelector("#s"+id);
    element.scrollIntoView({behavior: 'smooth'});
  }
  setTimeout(function() {
    history.pushState(null, "", location.href.split("?")[0]);
  }, 500);
}