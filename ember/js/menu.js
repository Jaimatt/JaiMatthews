function toMenu() {
    document.querySelector('#screen1').classList.remove("fadeIn");
    document.querySelector('#screen1').classList.remove("delay");
    document.querySelector('#screen1').classList.add("fadeOut");

    setTimeout(function() {
        document.querySelector('#screen1').style.display = 'none'
        document.querySelector('#screen2').style.display = 'inline-block'
    }, 900)

}

function begin() {
    document.querySelector('#screen2').classList.remove("fadeIn");
    document.querySelector('#screen2').classList.remove("delay");
    document.querySelector('#screen2').classList.add("fadeOut");
    

    setTimeout(function() {
        document.querySelector('#screen2').style.display = 'none'
    }, 400)

}

function howTo() {

}

function backToMenu() {
    
}