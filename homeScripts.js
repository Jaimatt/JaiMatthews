navCategories = ['_site','_game','_text','_misc']
ncText = ['Websites','Toys & Games','Writing','Miscellaneous']

function nav(index) {
    nbItems = document.getElementsByClassName('nbItem')
    for (i = 0; i < nbItems.length; i++) {
        nbItems[i].classList.remove('selected')
    }
    nbItems[index].classList.add('selected')

    links = document.getElementsByClassName('link')

    for (i = 0; i < links.length; i++) {
        if (links[i].classList.contains(navCategories[index])) {
            links[i].style.display = 'inline-block'
        } else {
            links[i].style.display = 'none'
        }
    }

    history.replaceState({}, null, 'index.html?page='+index)
    document.getElementById('title').innerText = ncText[index] + " | Jai Matthews"
    sizeChange()
}

window.addEventListener('resize', function(event){
    sizeChange()
});
  
function sizeChange() {
    nbItems = document.getElementsByClassName('nbItem')
    sTitle = document.getElementById('secondary')
    ncIcons = ['internet-explorer','gamepad','pencil','question']

    if (window.innerWidth < 500) {
        index = 0
        for (i = 0; i < nbItems.length; i++) {
            nbItems[i].innerHTML = '<i class="fa fa-'+ncIcons[i]+'" aria-hidden="true"></i>'
            if (nbItems[i].classList.contains('selected')) {
                index = i
            }
        }
        sTitle.style.display = 'block'
        sTitle.innerText = ncText[index]
    } else {
        for (i = 0; i < nbItems.length; i++) {
            nbItems[i].innerHTML = ncText[i]
        }
        sTitle.style.display = 'none'
    }

    // console.log(window.innerHeight)
    // console.log(document.body.scrollHeight)
    if (document.body.scrollHeight + 50 <= window.innerHeight) {
        document.getElementsByClassName('footer')[0].classList.add('snap')
    } else {
        document.getElementsByClassName('footer')[0].classList.remove('snap')
    }
}
sizeChange()

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
pageId = parseInt(urlParams.get('page'))
if (pageId <= 3 && pageId >= 0) {
    nav(pageId)
} else {
    nav(0)
}