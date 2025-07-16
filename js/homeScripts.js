// load media

function loadPage(site,links) {
    console.log(links)
    iterator = 0;
    for (x of links) {
        if (!x.listed) continue
        if (site == "all" || x.featured) {
            document.querySelector('.linkBox').innerHTML += projectHTML(site,x,iterator++)
        }
        if (site == "home") showAllLinks()
    }
}

function projectHTML(site,linkInfo,id) {
    if (linkInfo.img_top) img_top = "top"
    else img_top = ""

    if (linkInfo.href != '') openButton = `<a href="${linkInfo.href}"><p>Open</p></a>`
    else openButton = `<a title="Unavailable"><p class="notLinked">Open</p></a>`

    iIcon = ""
    if (linkInfo.portfolio) iIcon = `<a href=${linkInfo.portfolio}><p class="square"><i class="fa fa-info" aria-hidden="true"></i></p></a>`
    if (site == "all") {
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
    } else if (site == "home") {
        hypertext = `<div class="flink">
            <img src="${linkInfo.img}" class="${img_top}">
            <div class="topText">
                <h1>${linkInfo.title}</h1>
                <p>${linkInfo.subt}</p>
            </div>
            <p class="date">${linkInfo.date}</p>
            <div id="buttons" class="linkButton linkButtonShrunk">${iIcon}${openButton}</div>
        </div>`
    }
    return hypertext
}

// animate the landing

function landing() {
    document.querySelector('.footer').style.display = 'none'
    document.querySelector('.featuredWindow').style.display = 'none'
    setCookie("explored","landing")
}

function touchdown() {
    document.querySelector('.homeCenter').classList.remove('homeCenter')
    document.querySelector('.footer').style.display = 'inline-block'
    document.querySelector('.featuredWindow').style.display = 'inline-block'
    document.querySelector('#linkIn').style.display = 'none'
    document.querySelector('#incomplete').style.display = 'none'
    document.querySelector('.icon').classList.add('small')
    bootUp("home","links.json")
    setCookie("explored","featured")
}

// other shit

navCategories = ['_game','_site','_misc','_text']
ncText = ['Toys & Games','Websites','Miscellaneous','Writing']

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


    history.replaceState({}, null, 'projects.html?page='+index)
    document.getElementById('title').innerText = ncText[index] + " | Jai Matthews"
    sizeChange()
}

function showAllLinks() {
    projectLinks = document.getElementsByClassName('flink')
    for (link of projectLinks) link.style.display = 'inline-block'
}
  
function sizeChange() {
    nbItems = document.getElementsByClassName('nbItem')
    sTitle = document.getElementById('secondary')
    ncIcons = ['casino','language','more_horiz','edit']

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
    me.style.top = (original.offsetTop - window.scrollY + 40) + 'px'

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

// get links

// function bootUp(site,url) {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => { 
//             loadPage(site,data); 
//             if (site == "all") {
//                 goToUrlParam() 
//                 window.addEventListener('resize', function(event){
//                     sizeChange()
//                 });
//                 sizeChange()
//             }  
//         })
// }

async function bootUp(site,url) {
    data = await fetchData(url);

    loadPage(site,data); 
    if (site == "all") {
        goToUrlParam() 
        window.addEventListener('resize', function(event){
            sizeChange()
        });
        sizeChange()
    }  
}

async function fetchData(url) {
    // console.log(fetch(url))
    data = await (await fetch(url)).json()
    
    return data
}
