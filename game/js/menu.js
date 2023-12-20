eventListeners = []

function reset(test) {
    if (typeof cursor != 'undefined') delete cursor
    if (typeof player != 'undefined') delete player

    for (x in eventListeners) {
        window.removeEventListener(eventListeners[x].name, eventListeners[x])
    }

    wallTiles = []
    sprites = []
    dieTiles = []
    background = ''
    if (!test)  {
        icon = undefined
    }
}

function nextLevel() {
    console.log(level.id)
    reset()
    for (x in levelArray) {
        console.log(levelArray[x].id)
        if (levelArray[x].id == level.id + 1)  {
            play(levelArray[x])
            return
        }
    }
}

stories = [
    // 'hello world',
    // 'not today',
    // 'MARK GURNEY DIE',
    // "This message goes on and on and on and on and on. It never ends. It is sooo long. I'm bord. It's too long. Make it stop, please. Please make it stop. It's infuriating. Nobody should be expected to read this; it's too long. STOP IT! NOW! No, no no no. I've had enough. I hate this. Oh, wait. Hold on. I think the end is finally just around the c"
]

function mainMenu() {
    background = new Sprite(0,0,'assets/back/hills.png')
    document.querySelector('.menu').style.display = 'block'
    document.querySelector('#main').style.display = 'block'
    document.querySelector('#story').style.display = 'none'
    document.querySelector('#controls').style.display = 'none'
    document.querySelector('#pause').style.display = 'none'
}

function story() {
    document.querySelector('.story').innerHTML = stories[0]
    document.querySelector('#main').style.display = 'none'
    document.querySelector('#story').style.display = 'block'
}

function goToEdit() {
    document.querySelector('.menu').style.display = 'none'
    edit()
}

function controls() {
    document.querySelector('#main').style.display = 'none'
    document.querySelector('#controls').style.display = 'block'
}

function progressStory() {
    storyId = stories.indexOf(document.querySelector('.story').innerHTML)
    if (storyId + 2 <= stories.length) {
        document.querySelector('.story').innerHTML = stories[storyId+1]
    } else {
        document.querySelector('.menu').style.display = 'none'
        play(levelArray[0])
    }
}

function regressStory() {
    storyId = stories.indexOf(document.querySelector('.story').innerHTML)
    if (storyId >= 1) {
        document.querySelector('.story').innerHTML = stories[storyId-1]
    } else {
        mainMenu()
    }
}

function pause() {
    paused = true
    document.querySelector('.menu').style.display = 'block'
    document.querySelector('#main').style.display = 'none'
    document.querySelector('#story').style.display = 'none'
    document.querySelector('#controls').style.display = 'none'
    document.querySelector('#pause').style.display = 'block'
}

mainMenu()