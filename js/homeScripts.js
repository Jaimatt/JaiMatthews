// load media

function loadPage() {
    iterator = 0;
    for (x of links) {
        if (!x.listed) continue
        if (x.old) document.querySelector('.oldlinkBox').innerHTML += projectHTML(x,iterator++)
        else document.querySelector('.linkBox').innerHTML += projectHTML(x,iterator++)
    }

    projectLinks = document.querySelector('.linkBox').getElementsByClassName('link')
        
    iterator = 0
    for (link of projectLinks) {
        link.style.animationDelay = iterator / 10 + 's'
        link.style.display = 'inline-block'
        iterator++
    }

    projectLinks = document.querySelector('.oldlinkBox').getElementsByClassName('link')
        
    for (link of projectLinks) {
        link.style.display = 'none'
    }
}

function projectHTML(linkInfo,id) {
    if (linkInfo.img_top) img_top = "top"
    else img_top = ""

    if (linkInfo.href != '') openButton = `<a href="${linkInfo.href}"><p>Open</p></a>`
    else openButton = `<a title="Unavailable"><p class="notLinked">Open</p></a>`

    iIcon = ""
    if (linkInfo.portfolio) iIcon = `<a href=${linkInfo.portfolio}><p class="square"><i class="fa fa-info" aria-hidden="true"></i></p></a>`
    
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
        <p class="date">${linkInfo.date.getDate()} ${month[linkInfo.date.getMonth()]} ${linkInfo.date.getFullYear()}</p>
    </div>`
    return hypertext
}
// other shit

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
togg = false

// navCategories = ['_featured','_game','_site','_misc']
// ncText = ['Featured','Toys & Games','Websites','Miscellaneous']

function highlight(me) {
    if (document.querySelectorAll('.alink').length > 0) {
        escape()
    }

    try { document.querySelector('.navbar').style.pointerEvents = 'none' }
    catch{}

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
    try { document.querySelector('.navbar').style.pointerEvents = 'unset' }
    catch{}

    me.style.height = '150px'
    me.style.boxShadow = 'none'
    me.classList.add('shrinking')
    if (me.querySelector('#buttons') != null) me.querySelector('#buttons').style.opacity = '0'

    original = document.querySelectorAll("[data-linkId='"+linkId+"']")[0]

    me.style.left = (original.offsetLeft - 10) + 'px'
    me.style.top = (original.offsetTop - window.scrollY - 10) + 'px'

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
    nav()
}

// get links

function toggold() {
    togg = !togg
    if (togg) {
        document.querySelector(".expand").innerHTML = `<p>Hide Older Projects <i class="fa fa-chevron-down" aria-hidden="true" id="toggold"></i></p>`

        projectLinks = document.querySelector('.oldlinkBox').getElementsByClassName('link')
        
        iterator = 0
        for (link of projectLinks) {
            link.style.animationDelay = iterator / 10 + 's'
            link.style.display = 'inline-block'
            iterator++
        }

    } else {
        document.querySelector(".expand").innerHTML = `<p>Show Older Projects <i class="fa fa-chevron-right" aria-hidden="true" id="toggold"></i></p>`
        
        projectLinks = document.querySelector('.oldlinkBox').getElementsByClassName('link')
        
        for (link of projectLinks) {
            link.style.display = 'none'
        }

    }
}