cover = document.getElementById('cover')

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
openId = parseInt(urlParams.get('img'))

function fullscreen(me) {
    img = me.parentElement.parentElement.parentElement.children[0].querySelector('.visible')
    no = me.parentElement.parentElement.querySelector('h1').innerText
    link = me.parentElement.parentElement.querySelector('a').href

    document.getElementById('link').href = link
    cover.style.display = 'block'

    htmlElements = me.parentElement.parentElement.parentElement

    document.getElementById('box').innerHTML = htmlElements.children[0].outerHTML

    if (me.parentElement.parentElement.parentElement.id == 'carousel') {
        document.getElementById('box').innerHTML += `
            <div class="illOverlay arrows">
                <p class="left"><i class="fa fa-arrow-circle-left" aria-hidden="true" onclick="changeImg(this,-1,true)"></i></p><p class="right"><i class="fa fa-arrow-circle-right" aria-hidden="true" onclick="changeImg(this,1,true)"></i></p>
            </div>
        `
    }

    if (img.naturalWidth > img.naturalHeight) {
        document.querySelector('.content').classList = 'content wide'
    } else {
        document.querySelector('.content').classList = 'content square'
    }
    document.getElementById('number').innerText = no
    document.body.classList.add('stopScrolling')

    me.parentElement.parentElement.parentElement.classList.add('full')
}

function hide() {
    cover.style.display = 'none'
    document.body.classList.remove('stopScrolling')

    document.querySelector('.full').classList.remove('full')
}

function changeImg(me,i,full) {
    imageFolder = me.parentElement.parentElement.parentElement.children[0].children

    for (x in imageFolder) {
        // console.log(imageFolder[x])
        if (imageFolder[x].classList == 'visible') {
            index = x
            break
        }
    }

    imageFolder[index].classList = 'hidden'

    index = parseInt(index) + parseInt(i)

    if (index >= imageFolder.length) index -= imageFolder.length
    if (index < 0) index += imageFolder.length

    imageFolder[index].classList = 'visible'

    if (full == true) {
        element = document.querySelector('.full').querySelector('#arrow1')
        changeImg(element,i,false)
    }
}

const accessTokenEnc = 'SUdRV1JQY1VkRWJ6QnlTa0ZqU1dGalZqTlFkRTlvTUU5YVpBME51YnpoMk9XcFNURTlCTVVWVE9FNW9aQVZGb1QwbDJkM1pBcVpBVXhpYVVSeVNHUmpSRXh3YTJReE9IVnBUM0p2VVhBd05YbGxSVTlRYkdkbFIzaFZaQTBSVFdYWkFuU2xsSU5ucDJSakJPWWpCWVFYSm1hRVZhTTJ4aVNrUmlkVzhaRA==';
const apiUrl = `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_type,media_url,thumbnail_url}&access_token=${window.atob(accessTokenEnc)}`;

mediaBox = document.querySelector('.media')

retrieve(apiUrl)

function retrieve(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => loadMedia(data))
}

function loadMedia(data) {
    for (x in data.data) {
        images = ''
        arrows = ''
        if (data.data[x].media_type == 'IMAGE') {
            images = `<img class="visible" src="${data.data[x].media_url}">`
            id = `image`
        } else if (data.data[x].media_type == 'CAROUSEL_ALBUM') {
            for (y in data.data[x].children.data) {
                if (y == 0) cl = 'visible'
                else cl = 'hidden'
                images += `<img class="${cl}" src="${data.data[x].children.data[y].media_url}">`
            }
            arrows = `
                <div class="illOverlay arrows">
                    <p class="left"><i id='arrow1' class="fa fa-arrow-circle-left" aria-hidden="true" onclick="changeImg(this,-1,false)"></i></p><p class="right"><i class="fa fa-arrow-circle-right" aria-hidden="true" onclick="changeImg(this,1,false)"></i></p>
                </div>
            `
            id = `carousel`
        }
        mediaBox.innerHTML += `
        <div class="illContainer" id="${id}">
            <div class="imageContainer">
                ${images}
            </div>
            <div class="illOverlay">
                <h1>#</h1>
                <p><a href="${data.data[x].permalink}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a><i class="fa fa-arrows-alt" aria-hidden="true" id="default" onclick="fullscreen(this)"></i></p>
            </div>
            ${arrows}
        </div>
        `
    }
    if (data.paging.next) {
        retrieve(data.paging.next)
    } else {

        numberThem()

        fullscreen(document.querySelector("#l"+openId))
    }

    sizeChange()
}

function numberThem() {
    
    document.querySelector('.media').children[0].outerHTML = ''
    
    illustrations = [...document.querySelector('.media').children]
    
    for (x in illustrations) {
        no = illustrations.length - parseInt(x)
        illustrations[x].querySelector('#default').id = "l" + no
        if (no < 10) {
            no = '0' + no
        }
        illustrations[x].querySelector('h1').innerText += no
    }

}