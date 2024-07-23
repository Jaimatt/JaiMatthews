// load media

retrieve("links.json")

function retrieve(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => { loadPage(data); goToUrlParam() })
}

function loadPage(links) {
    iterator = 0;
    for (x of links) {
        document.querySelector('.linkBox').innerHTML += projectHTML(x,iterator++)
        
        // Code for Featured Items:

        // if (x.featured) {
        //     x.category = navCategories[0]
        //     document.querySelector('.linkBox').innerHTML += projectHTML(x,iterator++)
        // }
    }
}

function projectHTML(linkInfo,id) {
    if (linkInfo.img_top) {
        img_top = "top"
    } else {
        img_top = ""
    }
    hypertext = `<div onclick="highlight(this)" class="link ${linkInfo.category}" 
        data-href="${linkInfo.href}"
        data-linkid="${id}"
        data-portfolio="${linkInfo.portfolio}"
    >
        <img src="${linkInfo.img}" class="${img_top}">
        <div class="topText">
            <h1>${linkInfo.title}</h1>
            <p>${linkInfo.subt}</p>
        </div>
        <p class="date">${linkInfo.date}</p>
    </div>`
    return hypertext
}

// other shit

navCategories = ['_site','_game','_text','_misc']
ncText = ['Websites','Toys & Games','Writing','Miscellaneous']

// navCategories = ['_featured','_game','_site','_misc']
// ncText = ['Featured','Toys & Games','Websites','Miscellaneous']


function nav(index) {
    if (document.querySelectorAll('.alink').length > 0) {
        lowlight(document.querySelectorAll('.alink')[0])
    }

    nbItems = document.getElementsByClassName('nbItem')
    for (i = 0; i < nbItems.length; i++) {
        nbItems[i].classList.remove('selected')
    }
    nbItems[index].classList.add('selected')

    projectLinks = document.getElementsByClassName('link')    
        
    iterator = 0
    for (link of projectLinks) {
        if (link.classList.contains(navCategories[index])) {
            link.style.animationDelay = iterator / 10 + 's'
            link.style.display = 'inline-block'
            iterator++
        } else {
            link.style.display = 'none'
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
    ncIcons = ['star','casino','edit','more_horiz']

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

    linkButton = document.createElement('div')
    linkButton.id = 'buttons'
    linkButton.classList = 'linkButton'

    if (popup.dataset.portfolio != 'false') linkButton.innerHTML += `
    <a href=${popup.dataset.portfolio}><p class="square"><i class="fa fa-info" aria-hidden="true"></i></p></a>`

    if (popup.dataset.href != 'false') { linkButton.innerHTML += `
    <a href="${popup.dataset.href}"><p>Open</p></a>` } else {
        linkButton.innerHTML += `<a title="Unavailable"><p class="notLinked">Open</p></a>`
    }

    popup.appendChild(linkButton)

    popup.removeAttribute('onclick')
    popup.style.top = (me.offsetTop - 10 - window.scrollY) + 'px'
    popup.style.left = (me.offsetLeft - 10) + 'px'

    linkId = popup.dataset.linkid
    document.body.appendChild(popup)

    document.querySelector('.fadeOut').classList.add('dark')

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
    if (me.querySelector('#buttons') != null) me.querySelector('#buttons').style.opacity = '0'

    original = document.querySelectorAll("[data-linkId='"+linkId+"']")[0]

    me.style.left = (original.offsetLeft - 10) + 'px'
    me.style.top = (original.offsetTop - 10 - window.scrollY) + 'px'

    original.classList.remove('invis')

    document.querySelector('.fadeOut').classList.remove('dark')

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

function goToUrlParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    pageId = parseInt(urlParams.get('page'))
    if (pageId <= 3 && pageId >= 0) {
        nav(pageId)
    } else {
        nav(0)
    }
}
