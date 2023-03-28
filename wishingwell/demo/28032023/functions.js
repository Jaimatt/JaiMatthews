screen = document.getElementById('screen')
inBox = document.getElementById('input')
inChild = document.getElementById('inputChild')
validityLight = document.getElementById('validity')
screenParent = document.getElementById('screenParent')
ready = false
keyWait = 15
timeSinceLook = 0

function inputColour(colour) {
    if (colour == 'R') {
        validityLight.style.color = 'red'
        validityLight.innerText = 'Input Formatted Incorrectly'
        // validityLight.innerHTML = '<i style="color: red;" class="fa fa-times"></i>'
        // inChild.style.borderColor = 'red'
    } else if (colour == 'G') {
        validityLight.style.color = 'green'
        validityLight.innerText = 'Input Formatted Correctly'
        // validityLight.innerHTML = '<i style="color: green;" class="fa fa-check"></i>'
        // inChild.style.borderColor = 'green'
    }
}

function suggestion(toggle) {
    if (toggle == 'show') {
        document.getElementById('suggestion').style.display = 'inline-block'
        if (window.innerWidth > 600) {
            document.getElementById('validityBox').style.width = 'calc(22.5vw - 25px)'
        } else {
            document.getElementById('validityBox').style.width = 'calc(45vw - 27px)'
        }
    } else if (toggle == 'hide') {
        document.getElementById('suggestion').style.display = 'none'
        if (window.innerWidth > 600) {
            document.getElementById('validityBox').style.width = 'calc(45vw - 50px)'
        } else {
            document.getElementById('validityBox').style.width = 'calc(90vw - 54px)'
        }
    }
}

function god(text) {
    screen.innerHTML = ""
    screen.innerHTML = "<p class='god' id='god'></p>"
    msg = document.getElementById('god')

    var i = 0;
    var interval = setInterval(function(){
        msg.innerHTML += text.charAt(i);
        i++;
        if (i > text.length){
            clearInterval(interval);
        }
    }, keyWait);

    setTimeout(function(){
        msg.innerHTML = msg.innerHTML + "<br>▼"
        ready = true  
    }, keyWait * (text.length + 1));
}

function speech(texts,multiplier) {
    if (Array.isArray(texts)) {
        text = texts[0]
    } else {
        text = texts
    }
    if (!multiplier) {
        multiplier = 1
    }
    var i = 0;
    screen.innerHTML += "<br>"
    var interval = setInterval(function(){
        screen.innerHTML += text.charAt(i);
        i++;
        screenParent.scrollTop = screenParent.scrollHeight
        if (i > text.length){
            clearInterval(interval);
            setTimeout(function(){
                if (texts.length > 1 && Array.isArray(texts)) {
                    rem = texts.shift()
                    speech(texts,multiplier)
                }
            }, 1);
        }
    }, keyWait * multiplier);

    setTimeout(function(){
        ready = true
        if (texts.length == 1 && Array.isArray(texts)) {
            inBox.style.display = 'inline'
            inChild.focus()
        }
    }, keyWait * (text.length + 1) * multiplier);
}

C_move = ['move','go','travel','walk','venture','']
C_direction = ['north', 'east', 'south', 'west']
C_open = ['open']
C_look = ['observe', 'look','view']
C_enter = ['enter','go in']
C_chat = ['talk','chat','converse','speak']
C_sit = ['sit','sit down','relax','wait']
C_trade = ['trade','trade fish','trade fish for explosives','trade for explosives']

function type(key) {
    string = inChild.value.toLowerCase()
    words = string.split(" ")
    // console.log(words)
    inputColour('G')
    if (C_move.includes(words[0]) && C_direction.includes(words[1]) && words.length == 2) {
        return words[1]
    } else if (C_direction.includes(words[0]) && words.length == 1) {
        return words[0]
    } else if (tutorial == false) {
        if (C_open.includes(words[0]) && words[1] == 'chest' && words.length == 2) {
            return('chest')
        } else if (C_look.includes(words[0]) && words.length == 1) {
            return('look')
        } else if (C_enter.includes(string)) {
            return('enter')
        } else if (C_chat.includes(string)) {
            return('chat')
        } else if (C_sit.includes(string)) {
            return('sit')
        } else if (string == 'fish') {
            return('fish')
        } else if (C_trade.includes(string)) {
            return('trade')
        } else {
            inputColour('R')
        }
    } else {
        inputColour('R')
    }
}

function randomResponse(talker, options) {
    response = options[Math.floor(Math.random()*options.length)]
    speech(talker + response)
}

function log(text) {
    var i = 0;
    screen.innerHTML += "<br><i>"+text+"</i><br>"
    screenParent.scrollTop = screenParent.scrollHeight
}

function between(x, min, max) {
    return x >= min && x <= max;
}

function logPosition(position) {
    // console.log(position)
    // console.log(Number(String(position).charAt(1)))
    x = Number(String(position).charAt(1))
    if (position>19) {
        nDir = 'To the north is ' + world[position-10][0]
    } else {
        nDir = 'To the north is the unrelenting Northern Waters.'
    }
    if (x<5) {
        eDir = 'To the east is ' + world[position+1][0]
    } else {
        eDir = 'To the east is the Eastern Ocean.'
    }
    if (position<59) {
        sDir = 'To the south is ' + world[position+10][0]
    } else {
        sDir = 'To the south is the tranquil Southern Seas.'
    }
    if (x>1) {
        wDir = 'To the west is ' + world[position-1][0]
    } else {
        wDir = 'To the west is the Western Oceans.'
    }
    speech([world[position][1],' ',nDir,eDir,sDir,wDir,' '])
}

function venture(direction) {
    inChild.value = ''
    prevPlace = place
    error = 'none'
    //movement
    if (direction == 'north') {
        place = Number(place) - 10
    } else if (direction == 'south') {
        place = Number(place) + 10
    } else if (direction == 'west') {
        place = Number(place) - 1
    } else if (direction == 'east') {
        place = Number(place) + 1
    }
    if (place < 10) {
        place = "0"+String(place)
    }

    //error handling: landing in oceans
    x = Number(String(place).charAt(1))
    y = Number(String(place).charAt(0))
    if (y<1) {
        error = 'Northern Waters.'
    } else if (x>5) {
        error = 'Eastern Ocean.'
    } else if (y>6) {
        error = 'Southern Seas.'
    } else if (x<1) {
        error = "Western Oceans."
    }
    if (error != 'none') {
        log("It's not safe to enter the " + error)
        place = prevPlace
        return('error')
    }
    //error handling: lack of key items
    if (place == 11 && !inventory.includes('Explosives')) {
        // error = "The cave entrance is blocked off. You can't get in."
    } else if (place == 32 || place == 41 && !inventory.includes('Climbing Gear')) {
        // error = "It's not safe the enter the ravine without climbing gear."
    } else if (place == 24 && !inventory.includes('Kayak')) {
        // error = "It isn't safe to enter Elysium Lake without a Kayak."
    } else if ([43,52,54,62,64].includes(place) && !inventory.includes('Sword')) {
        error = "It isn't safe to go that way without your sword."
    }
    if (error != 'none') {
        log(error)
        place = prevPlace
        return('error')
    }
    //map blur
    timeSinceLook += 1
    mapBlur = (timeSinceLook - 3)/3
    document.getElementById('imgParent').style.filter = 'blur('+mapBlur+'px)'
    document.getElementById('enlarged').style.filter = 'blur('+2*mapBlur+'px)'
    //finish
    screen.innerHTML = screen.innerHTML.replace('</span>','') + '</span>'
    log('You travel ' + direction)
    refreshSug()
    logPosition(place)
    type()
}

function openChest() {
    inChild.value = ''
    if (place == 63) {
        if (!inventory.includes('Sword')) {
            console.log('hi')
            log('You found a Sword!')
            refreshInv('Sword')
        } else {
            log('The chest is empty.')
        }
    } else if (place == 15) {
        if (!inventory.includes('Spear')) {
            console.log('hi')
            log('You found an Spear!')
            refreshInv('Spear')
        } else {
            log('The chest is empty.')
        }
    } else {
        log('There is no chest to open.')
    }
}

function look() {
    inChild.value = ''
    timeSinceLook = 0
    document.getElementById('imgParent').style.filter = 'blur(0px)'
    document.getElementById('enlarged').style.filter = 'blur(0px)'

    if (place == 15 || place == 62) {
        log('You look out at the island of Haven.')
        mapBox = document.getElementById('mapBox')
        mapBox.innerHTML = `
        <div class="imgAnimation" id="imgParent" style="display: none;">
            <img src='assets/map.png' onclick="if (window.innerWidth > 600) {document.getElementById('mapWindow').style.display = 'block'}">
        </div>
        `
        imgParent = document.getElementById('imgParent')
        imgParent.style.display = 'block'
        inBox.style.display = 'none'

        setTimeout(function(){
            inBox.style.display = 'inline'
            inBox.focus()
            document.getElementsByClassName('imgAnimation')[0].classList.remove('imgAnimation')
            screenParent.scrollTop = screenParent.scrollHeight
        }, 5000);

    } else {
        log("You don't have enough altitude to see the island from here.")
    }
}

function dungeon() {
    inChild.value = ''
    if (place == 12) {
        //mount arcadia
        log("This feature is coming soon.")
    } else if (place == 24) {
        //elysium lake
        log("This feature is coming soon.")
    } else if (place == 31) {
        //great braincell library
        log("This feature is coming soon.")
    } else if (place == 35) {
        //formido falls
        log("This feature is coming soon.")
    } else if (place == 51) {
        //trombe desert
        log("This feature is coming soon.")
    } else if (place == 65) {
        //forest of despair
        log("This feature is coming soon.")
    } else {
        log("There's nowhere to enter!")
    }
}

function talk() {
    inChild.value = ''
    if ([14,22,42,53].includes(place)) {
        inBox.style.display = 'none'
        if (place == 14 && !(inventory.includes('Explosives'))) {
            npcId = 5
        } else if (place == 14) {
            npcId = Math.floor(Math.random() * (npc[place].length - 1))
        } else {
            npcId = Math.floor(Math.random() * npc[place].length)
        }
        log('You go and talk to '+ npc[place][npcId][0] + '.')
        lines = npc[place][npcId][1].slice()
        for (i=0;i<lines.length;i++) {
            lines[i] = npc[place][npcId][0].toUpperCase() + ": " + lines[i]
        }
        speech(lines.concat([' ']))
    } else {
        log("There's no one to talk to.")
    }
}

function sit() {
    inChild.value = ''
    inBox.style.display = 'none'
    log("You sit down for a moment.")
    setTimeout(function(){
        inBox.style.display = 'block'
        if (place == 34 || place == 52) {
            log("Your HP has been replenished.")
        } else if (place == 43) {
            log("Your Grandad will be okay.")
        } else {
            log("You feel exactly the same.")
        }
    }, 3000);
}

function fish() {
    inChild.value = ''
    if (place != 61) {
        log("You have no fishing rod.")
        return
    }
    inBox.style.display = 'none'
    log("You cast the fishing rod into the ocean.")
    setTimeout(function(){
        if (Math.random() > 0.6) {
            log("You caught a fish!")
            refreshInv('Fish')
        } else {
            log("The fish aren't biting.")
        }
        inBox.style.display = 'inline'
        inChild.focus()
    }, 1000 + Math.random()*3000);
}

function refreshInv(item) {
    document.getElementById('inventory').innerHTML = ''
    inventory.push(item)
    for (i=0;i<inventory.length;i++) {
        document.getElementById('inventory').innerHTML += '<p>' + inventory[i] + '</p>'
    }
}

function trade() {
    inChild.value = ''
    if (place != 14) {
        log("There's no one to trade with.")
        return
    } 
    if (inventory.includes("Explosives")) {
        log("You already have the explosives!")
        return
    } 
    if (!inventory.includes('Fish')) {
        log("You don't have any Fish!")
        return
    }
    log("You trade your fish for Agnes' explosives.")

    for(i=0;i<inventory.length;i++) {
        if (inventory[i] == 'Fish') {
            inventory.splice(i, i)
            break
        }
    }

    inventory.splice(inventory.indexOf('Fish',1))
    refreshInv('Explosives')
    inBox.style.display = 'none'
    speech(['AGNES: Brilliant! Thanks','AGNES: I have always wanted to try fish.','AGNES: Here, have your explosives.',''])
}

function refreshSug() {
    suggestions = []
    if ([12,24,31,35,51,65].includes(place)) {
        suggestions.push('enter')
    }
    if ([14,22,42,53].includes(place)) {
        suggestions.push('talk')
    }
    if ([34,43,52].includes(place)) {
        suggestions.push('sit')
    }
    if (place == 14) {
        suggestions.push('trade')
    }
    if ([15,63].includes(place)) {
        suggestions.push('open chest')
    }
    if (place == 61) {
        suggestions.push('fish')
    }
    if ([62,15].includes(place)) {
        suggestions.push('look')
    }
    if ([11,13,21,23,25,32,41,44,45,54,55,64].includes(place)) {
        suggestions.push('attack (TBD)')
        suggestions.push('run (TBD)')
    } else {
        suggestions.push('eat (TBD)')
        suggestions.push('save (TBD)')
    }
    if (place == 53) {
        suggestions.push('go south')
    }
    if (place == 63) {
        suggestions.push('go west')
    }
    document.getElementById('suggestionList').innerHTML = ''
    for (i=0;i<suggestions.length;i++) {
        document.getElementById('suggestionList').innerHTML += '<p>' + suggestions[i] + '</p>'
    }
}