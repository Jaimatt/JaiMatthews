navCategories = ['_site','_game','_text','_misc']
ncText = ['Websites','Toys & Games','Writing','Miscellaneous']

function nav(index) {
    if (document.querySelectorAll('.alink').length > 0) {
        lowlight(document.querySelectorAll('.alink')[0])
    }

    nbItems = document.getElementsByClassName('nbItem')
    for (i = 0; i < nbItems.length; i++) {
        nbItems[i].classList.remove('selected')
    }
    nbItems[index].classList.add('selected')

    links = document.getElementsByClassName('link')

    j = 0
    for (i = 0; i < links.length; i++) {
        if (links[i].classList.contains(navCategories[index])) {
            links[i].style.animationDelay = j / 10 + 's'
            links[i].style.display = 'inline-block'
            j += 1
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
    ncIcons = ['language','casino','edit','more_horiz']

    if (window.innerWidth < 500) {
        index = 0
        for (i = 0; i < nbItems.length; i++) {
            nbItems[i].innerHTML = `<span class="material-symbols-outlined"> ${ncIcons[i]} </span>`
            nbItems[i].classList.add('grown')
            if (nbItems[i].classList.contains('selected')) {
                index = i
            }
        }
        sTitle.style.display = 'block'
        sTitle.innerText = ncText[index]
    } else {
        for (i = 0; i < nbItems.length; i++) {
            nbItems[i].innerHTML = ncText[i]
            nbItems[i].classList.remove('grown')
        }
        sTitle.style.display = 'none'
    }
}
sizeChange()

function highlight(me) {
    if (document.querySelectorAll('.alink').length > 0) {
        escape()
    }

    document.querySelector('.navbar').style.pointerEvents = 'none'

    me.classList.add('invis')
    popup = me.cloneNode(true)
    popup.classList = 'alink'

    linkButton = document.createElement('a')
    linkButton.href = popup.dataset.href
    linkButtonChild = document.createElement('p')
    linkButtonChild.classList = 'linkButton'
    linkButtonChild.innerText = 'Open'
    linkButton.innerHTML = linkButtonChild.outerHTML

    if (popup.querySelector('p.date').innerText != 'Coming Soon') {
        popup.appendChild(linkButton)
    }

    popup.removeAttribute('onclick')
    popup.style.top = (me.offsetTop - 10 - window.scrollY) + 'px'
    popup.style.left = (me.offsetLeft - 10) + 'px'

    href = popup.dataset.href
    document.body.appendChild(popup)

    setTimeout(function() {
        popup.style.height = '450px'
        popup.style.left = 'calc(50vw - ' + (popup.clientWidth / 2) + 'px - 15px)'
        popup.style.top = 'calc(50vh - 225px)'

        // popup.style.left = '50%'
        // popup.style.top = '50%'
        // popup.style.transform = 'translate(-50%,-50%)'

        document.body.setAttribute('onclick',"escape()")
    }, 10)
}

function lowlight(me) {
    document.querySelector('.navbar').style.pointerEvents = 'unset'

    me.style.height = '150px'
    me.style.boxShadow = 'none'
    me.classList.add('shrinking')
    if (me.querySelector('a') != null) me.querySelector('a').style.opacity = '0'

    original = document.querySelectorAll("[data-href='"+href+"']")[0]

    me.style.left = (original.offsetLeft - 10) + 'px'
    me.style.top = (original.offsetTop - 10 - window.scrollY) + 'px'

    original.classList.remove('invis')

    setTimeout(function() {    
        me.remove()
    }, 400)
}

function escape() {
    document.body.removeAttribute('onclick')
    let highlighted = document.querySelectorAll('.alink')
    for (i = 0; i < highlighted.length; i++) {
        lowlight(highlighted[i])
    }
}

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