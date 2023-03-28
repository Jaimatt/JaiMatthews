function generate() {
    lNeeded = (window.innerWidth/9) * (window.innerHeight/12)
    text = ""
    symbols = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*:;/'
    for (i=0; i<lNeeded; i++) {
        if (Math.floor(Math.random()*2000) == 1) {
            text = text + "<span class='hlted'>BOTTOM_OF_THE_WISHING_WELL</span>"
        } else {
            text = text + symbols[Math.floor(Math.random()*symbols.length)]
        }   
    }
    document.getElementById('textBack').innerHTML = text
}
generate('spec')
var intervalId = window.setInterval(function(){
    generate('spec')
}, 5000);