window.addEventListener('resize', function(event){
    sizeChange()
});
  
function sizeChange() {
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

document.getElementsByTagName('title')[0].innerText = document.getElementsByTagName('h1')[0].innerText + " | Jai Matthews"

article = [...document.querySelector('.article').children]
article.splice(0,2)

ind = 0
for (i = 0; i < article.length; i++) {
    console.log(article[i].localName)
    if (['ul','ol','div'].includes(article[i].localName)) {
        for (j = 0; j < article[i].children.length; j++) {
            console.log(article[i].children[j])
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

console.log(article)