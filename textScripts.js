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