var tools
var icon
function edit(lId) {

    if (lId) level = lId
    else level = JSON.parse(JSON.stringify(levelEmpty))

    if (typeof level.seed == 'undefined') level.seed = Math.floor(Math.random() * 100)

    tools = [
        ['Debug','W',['assets/debug/NONE.png','assets/debug/BC2.png']],
        ['Concrete','C',['assets/concrete/WN.png']],
        ['Brick','B',['assets/brick/NONE.png']],
        ['Spike','S',['assets/blank.png','assets/spike/N.png']],
        ['Spawn','*',['assets/blank.png','assets/char/icon.png']],
        ['Door','!',['assets/doorIcon.png']],
        ['Clear','0',['assets/blank.png','assets/delete.png']],
        ['Background','BACK',['assets/back.png']],
        ['Play','PLAY',['assets/blank.png','assets/play.png']],
    ]

    backgrounds = [
        'default',
        'hills',
        'forest',
        'house',
        'dungeon'
    ]

    stack = ['W','0','C']
    nonStack = ['B','S']
    single = ['*','!']
    special = ['BACK','PLAY']

    selectedTool = 0
    wheelIndex = 0

    cursor = new Cursor(16*8,9*8)

    showIcons()
    renderLevel(level)

    eventListeners = [
        function mousemove(event) {
            mouseX = event.clientX
            mouseY = event.clientY

            tileX = (canvas.width * (mouseX - canvas.getBoundingClientRect().x)) / canvas.getBoundingClientRect().width
            tileY = (canvas.height * (mouseY - canvas.getBoundingClientRect().y)) / canvas.getBoundingClientRect().height

            if (tileX <= 0) tileX = 0
            if (tileX >= canvas.width) tileX = canvas.width - 1
            if (tileY <= 0) tileY = 0
            if (tileY >= canvas.height) tileY = canvas.height - 1

            cursor.position.x = Math.floor(tileX / 8) * 8
            cursor.position.y = Math.floor(tileY / 8) * 8
        },
        function mousedown() {
            clicking = setInterval(placeBlock, 1)
        },
        function mouseup() {
            clearInterval(clicking);
            if (special.includes(tools[selectedTool][1])) {
                switch(tools[selectedTool][1]) {
                    case 'BACK':
                        changeBackground()
                        break
                    case 'PLAY':
                        testLevel()
                        break
                }
            }
        },
        function wheel(event) {
            wheelIndex += event.deltaY 
            selectedTool = (Math.floor(wheelIndex / 100) % tools.length + tools.length) % tools.length
            showIcons()
        },
        function keydown(event) {
            if (event.key == 'ArrowRight') wheelIndex += 100
            if (event.key == 'ArrowLeft') wheelIndex -= 100
            selectedTool = (Math.floor(wheelIndex / 100) % tools.length + tools.length) % tools.length
            showIcons()
        }
    ]

    for (x in eventListeners) {
        window.addEventListener(eventListeners[x].name, eventListeners[x])
    }
}

function placeBlock() {
    //get relevant info
    toolSymbol = tools[selectedTool][1]
    dest = level.data[cursor.position.y/8][cursor.position.x/8]    

    //special functions
    if (special.includes(toolSymbol)) return

    //non-stackable items
    if ((stack.includes(toolSymbol) || stack.includes(dest))) {
        //get rid of old single
        if (JSON.stringify(level.data).includes(toolSymbol) && single.includes(toolSymbol)) {
            level.data = JSON.parse(
                JSON.stringify(level.data).replace(toolSymbol,'')
            )
        }
        //do not remove singles
        for (i=0;i<single.length;i++) {
            if (dest.includes(single[i]))  {
                //remove everyting else if erasing
                if (toolSymbol == '0') level.data[cursor.position.y/8][cursor.position.x/8] = single[i]
                return
            }
        }
        //set tile!
        level.data[cursor.position.y/8][cursor.position.x/8] = toolSymbol
    } 
    //stackable items
    else if (!dest.includes(toolSymbol) && (nonStack.includes(toolSymbol) || single.includes(toolSymbol))) {
        //get rid of old single
        if (JSON.stringify(level.data).includes(toolSymbol) && single.includes(toolSymbol)) {
            level.data = JSON.parse(
                JSON.stringify(level.data).replace(toolSymbol,'')
            )
        }
        //add tool to tile!
        level.data[cursor.position.y/8][cursor.position.x/8] += toolSymbol

    }

    renderLevel(level)
}

function showIcons() {
    icon = []
    for (i in [1,2,3,4,5]) {
        for (x in tools[modulo(selectedTool+(i-2),tools.length)][2]) {
            icon.push(new Sprite(5+(i*11),5,tools[modulo(selectedTool+(i-2),tools.length)][2][x],1))
        }

    }
}

function modulo(a,b) {
    return ((a % b) + b) % b
}

function changeBackground() {
    bIndex = backgrounds.indexOf(level.background)
    bIndex++
    if (bIndex == backgrounds.length) bIndex = 0
    level.background = backgrounds[bIndex]
    renderLevel(level)
}

function testLevel() {
    reset(true)
    play(level,true)
}