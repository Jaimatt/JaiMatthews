tutorial = true
ready = false
cutscene = true
promptNo = 0
sMultiplier = ""

// window.location.href = 'overworld.html'

cutscenes = [
    'Before the light…',
    'Before the earth…',
    'Before the forest…',
    'Before the mountains…',
    'Before all the elements of the world…',
    'The Gods created a wish…',
    'a wish in 6 parts…',
    'the parts, spead across the world…',
    'ready for a brave explorer…',
    'prepared to risk her life…',
    'to collect them all…',
    'and make her wish.',

    'SOMEONE: …',
    'SOMEONE: e…ve…ln…',
    'GRANDAD: EVELYN!',
    'GRANDAD: Still asleep, are you? ',
    'GRANDAD: Come and give me some help with the dishes.',

    'GRANDAD: I just need you to…',
    'GRANDAD: Pardon me, I just need… *argh*',
    "GRANDAD: Evelyn, I'm not feeling too good.",
    'GRANDAD: Can you just…',
    'GRANDAD: …I nee…d',
    'GRANDAD: I…',
    'GRANDAD: …',
    'GRANDAD: Goodbye…',
    '…',
    '…',

    'With her Grandfather gone…',
    'Evelyn was alone…',
    'and she had only one wish…',
    'to bring her grandfather back.',
    'And thus she began her adventure…',
    'an adventure of danger and peril…',
    'to make her wish…',
    "and save Grandad's life.",
]
cutsceneType = ['god','speech']

setTimeout(function(){
    if (promptNo == 0) {
        god(cutscenes[promptNo])
    }
}, 500);

document.onkeydown = function (e) {
    // console.log(promptNo)
    if (ready == true && e.key == 'Enter' && cutscene == true) {
        ready = false
        promptNo += 1
        if (between(promptNo,0,11) || between(promptNo,27,34)) {
            god(cutscenes[promptNo])
        } else if (between(promptNo,12,26)) {
            if (promptNo == 12) {
                screen.innerHTML = ""
            }
            if (promptNo == 24) {
                sMultiplier = 4
            }
            speech(cutscenes[promptNo],sMultiplier)
            sMultiplier = ""
            if (promptNo == 16) {
                inBox.style.display = 'inline'
                inChild.placeholder = 'Type "Go north" to walk towards him.'
                inChild.focus()
                cutscene = false
            }
        } else {
            console.log('hi')
            window.location.href = "overworld.html?pos=53&from=your house"
        }
    }
};

inChild.onkeyup = function (e) {
    validity = type(e.key)
    if (e.key == 'Enter' && validity && cutscene == false) {
        inChild.value = ""
        // console.log(validity)
        tutorialFunction(validity)
    }
}

function tutorialFunction(direction) {
    if (direction == 'north') {
        log("<br>You walked north.")
        ready = false
        speech("GRANDAD: That's great! Thanks")
        cutscene = true
        inBox.style.display = 'none'
    } else {
        log("<br>You tried to walk "+direction)
        says = [
            "Come on Evelyn, I'm over here!",
            "Wrong way silly!",
            "Evelyn! Don't go that way!",
            "I really do need some help with these dishes."
        ]
        randomResponse("GRANDAD: ",says)
    }
}