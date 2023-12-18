function loadLvl(lvl) {
    play(levelArray[lvl-1])
}

function play(lId,editing) {
    level = lId
    allowedKeys = ['w', 'a', 's', 'd', 'arrowup', 'arrowleft', 'arrowright', 'arrowdown', 'space']

    keyPressed = {
        w: false,
        s: false,
        a: false,
        d: false,
        arrowup: false,
        arrowleft: false,
        arrowright: false,
        arrowdown: false,
        space: false
    }
    for (y in level.data) {
        for (x in level.data[0]) {
            if (level.data[y][x].includes('*')) {
                spawnpoint = [x,y]
            }
            if (level.data[y][x].includes('!')) {
                door = {x:x*8,y:y*8}
            }
        }
    }
    
    player = new Player()
    renderLevel(level)

    eventListeners = [
        function keydown(event) {
            //get the key name from the event
            key = event.key.toLowerCase()
            if (event.key == ' ') key = 'space'
            
            //if the key is already pressed, do nothing
            if (keyPressed[key]) return
            
            //report the key as pressed
            if (allowedKeys.includes(key)) {
                keyPressed[key] = true
            }
    
            //if a jump key, make player jump
            if ((['w','space','arrowup'].includes(key))) player.jump()    
        },
        function keyup(event) {
            //get the key name from the event
            key = event.key.toLowerCase()
            if (event.key == ' ') key = 'space'
            
            //report the key as un-pressed
            if (allowedKeys.includes(key)) {
                keyPressed[key] = false
            }
        }
    ]

    if (editing) {
        eventListeners.push(
            function mousedown() {
                reset(true)
                edit(level)
            }
        )
        //here lies some really ugly code to turn the play icon into a pause icon...
        for (x in icon) {
            if (icon[x].image.src.includes('play.png')) {
                icon[x] = new Sprite(27,5,'assets/pause.png',1)
            }
        }
        player.testing = true
    } else player.testing = false

    for (x in eventListeners) {
        window.addEventListener(eventListeners[x].name, eventListeners[x])
    }
}
