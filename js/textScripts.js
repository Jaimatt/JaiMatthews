function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function applyAnimations() {
    document.getElementsByTagName('title')[0].innerText = document.getElementsByTagName('h1')[0].innerText + " | Jai Matthews"

    article = [...document.querySelector('.article').children]
    article.splice(0,2)

    ind = 0
    for (i = 0; i < article.length; i++) {
        if (['ul','ol','div'].includes(article[i].localName)) {
            for (j = 0; j < article[i].children.length; j++) {
                article[i].children[j].style.animationName = 'fadeAcross'
                article[i].children[j].style.animationDuration = '1s'
                article[i].children[j].style.animationDelay = ind/10 + 's'
                article[i].children[j].style.animationFillMode = 'backwards'
                ind += 1
            }
        } else {
            article[i].style.animationName = 'fadeAcross'
            article[i].style.animationDuration = '1s'
            article[i].style.animationDelay = ind/10 + 's'
            article[i].style.animationFillMode = 'backwards'
            ind +=1

        }
    }
}

applyAnimations();