// functions
function report() {
    console.log(
        Math.round(outerBack.scrollTop),
        Math.round(outerBack.scrollLeft)
    )
}

function setScroll(x,y) {
    // domain: -1 to 1.
    // range: screen size
    outerBack.scrollTop = (y + 1) * outerBleed/2
    outerBack.scrollLeft = (x + 1) * outerBleed/2

    outerFront.scrollTop = (y + 1) * perspective * outerBleed/2
    outerFront.scrollLeft = (x + 1) * perspective * outerBleed/2
}

function updateCanvasSize() {
    canvas.width = window.innerWidth + outerBleed*2
    canvas.height = window.innerHeight + outerBleed*2
}

function drawCircle(x = 0, y = 0, r = 10, colour = {r:255,g:255,b:255,a:1}) {
    // xy domain: -500 to 500
    // xy range: canvas size

    largerDimension = Math.max(canvas.width,canvas.height);

    xpos = ((x + 500)/1000)*largerDimension - (largerDimension - canvas.width)/2
    ypos = ((y + 500)/1000)*largerDimension - (largerDimension - canvas.height)/2
    
    normalisedRadius = (r/1000)*largerDimension

    c.beginPath()
    c.arc(xpos, ypos, normalisedRadius, 0, Math.PI * 2, false)
    // c.strokeStyle = 'rgba('+colour.r+','+colour.g+','+colour.b+','+colour.a+')'
    c.fillStyle = 'rgba('+colour.r+','+colour.g+','+colour.b+','+colour.a+')'
    c.fill()
    // c.stroke()
}

function rand(min = 0, max = 1, integer = false) {
    out = Math.random() * (max - min) + min;
    if (!integer) return out
    else return Math.round(out)
}

// the following function converts mouse position on page, to system position (-500 to 500)
// you have no idea how fucking long it took to figure out how to make this work. Seriously fuck me

function mouseToSystem() {
    // screen pixels from top left corner.
    screenPixelsFromCornerX = outerFront.scrollLeft + screenMouse.x
    screenPixelsFromCornerY = outerFront.scrollTop + screenMouse.y

    // width of the canvas
    canvas.width
    canvas.height
    
    // now we need screen pixels from the centre of the canvas
    screenPixelsFromCenterX = screenPixelsFromCornerX - canvas.width/2 + 10
    screenPixelsFromCenterY = screenPixelsFromCornerY - canvas.height/2 + 10

    // normalise to be out of 1000 system pixels, rather than
    x = screenPixelsFromCenterX/canvas.width * 1000
    y = screenPixelsFromCenterY/canvas.width * 1000

    return {x,y}
}
