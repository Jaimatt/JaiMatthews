var keyed = "false"
var inputId = 'pwd'
passwords = [
    'midnightmoon1989',
    'greg',
    '84327'
]


function key(char,limit) {
    // console.log("HELLO!")
    keyed = "true"
    input = document.getElementById(inputId).value
    if (char != 'DEL') {       
        if (input.length < 5 || limit != 5) {
            input += char
            document.getElementById(inputId).value = input
        } else {
            document.getElementById(inputId).blur();
        }
        
    } else if (char == 'DEL') {
        input = input.slice(0, -1);
        document.getElementById(inputId).value = input
    }
    // console.log(keyed)
}

function keyShow() {
    document.getElementById('keyboard').style.display = "block"
    document.getElementById(inputId).classList.add('focus')
    keyed = "true"
}
function keyHide() {
    if (1 == 2) {
        document.getElementById('keyboard').style.display = "none"
        document.getElementById(inputId).classList.remove('focus')
    }
    // console.log(keyed)
    if (keyed == "false") {
        document.getElementById('keyboard').style.display = "none"
        document.getElementById(inputId).classList.remove('focus')
        document.getElementById(inputId).blur();
    } else if (keyed == "true") { 
        document.getElementById(inputId).focus();
        keyed = "false"
    }
}

function verify(id) {
    pwd = document.getElementById(inputId).value
    if (id == 1 && pwd == passwords[0]) {
        redirect('audio.html?aId=2&')
    } else if (id == 1 && pwd != passwords[0]){
        redirect('wrong.html?')
    }
    if (id == 2 && pwd == passwords[1]) {
        openfolder()
    } else if (id == 2 && pwd != passwords[1]) {
        redirect('wrongDUPLICATE.html?')
    }
    if (id == 3 && pwd == passwords[2]) {
        redirect('audio.html?aId=3&')
    } else if (id == 3 && pwd != passwords[2]) {
        redirect('wrongDUPLICATE.html?')
    }
}

setInterval(function(){ 
    if (keyed == "false") {
        keyHide()
    } 
},100);