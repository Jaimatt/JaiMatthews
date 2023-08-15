const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const theme = urlParams.get('dark')

if (theme == 'true') {
  document.getElementById('colour').href = 'dark.css'

  document.getElementById('logoMain').src = 'assets/iconR-00.png'

  document.getElementById('webToggle').innerText = "View Updated Website"

  launchpadList = document.getElementsByClassName('website')
  launchpadNo = launchpadList.length
  for (i=0; i < launchpadNo; i++) {
    website = launchpadList[i].innerHTML
    website = website.replace('web_icon-','web_icon_')
    launchpadList[i].innerHTML = website
  }

  linktos = document.getElementsByClassName('linkto')
  for (i=0; i < linktos.length; i++) {
    link = linktos[i].outerHTML
    link = link.replace('.html"','.html?dark=true"')
    linktos[i].outerHTML = link
  }

  footerlinks = document.getElementsByClassName('footerlink')
  for (i=0; i < footerlinks.length; i++) {
    foot = footerlinks[i].outerHTML
    foot = foot.replace('#','&dark=true#')
    footerlinks[i].outerHTML = foot
  }

  parLinks = document.getElementsByClassName('parLink')
  for (i=0; i < parLinks.length; i++) {
    parLink = parLinks[i].outerHTML
    parLink = parLink.replace('?','?dark=true&')
    parLinks[i].outerHTML = parLink
  }
}

function toggleTheme() {
  if (theme == 'true') {
    console.log("HELLO")
    window.history.replaceState(null, null, window.location.pathname);

    window.location.href = window.location.href

  } else {
    var url = window.location.href;    

    if (url.indexOf('?') > -1){
      url += '&dark=true'
    }else{
      url += '?dark=true'
    }
    window.location.href = url;

  }
}

mybutton = document.getElementById("myBtn");

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function scrollToItem() {
  var element = document.querySelector("#more");
  element.scrollIntoView({behavior: 'smooth'});
}

// const delay = 25;
// let intervalId;

// function goLeft() {
//   intervalId = setInterval(
//     () => (document.getElementById('scroll_window').scrollLeft -= 5),
//     delay,
//   );
// }

// function goRight() {
//   intervalId = setInterval(
//     () => (document.getElementById('scroll_window').scrollLeft += 5),
//     delay,
//   );
// }

// function stopScrolling() {
//   clearInterval(intervalId);
// }

// left.addEventListener('mouseover', goLeft);
// left.addEventListener('mouseout', stopScrolling);
// right.addEventListener('mouseover', goRight);
// right.addEventListener('mouseout', stopScrolling);

// document.getElementById("scroll_window").scrollLeft = 1

// function log() {
//   var st = document.getElementById("scroll_window").scrollLeft
//   console.log(st)
//   if (st >= 2050) {
//     document.getElementById("scroll_window").scrollLeft -= 2050
//   }
//   if (st < 1) {
//     document.getElementById("scroll_window").scrollLeft += 2049
//   }
// }