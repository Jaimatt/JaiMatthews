//initial
canvas = document.querySelector('canvas')
menu = document.querySelector('.menu')
c = canvas.getContext('2d')

canvas.width = 256
canvas.height = 144
particles = []

//animating & movement
function animate() {
    window.requestAnimationFrame(animate)

    //reset
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width,canvas.height)

    //draw background (will be animated down the line)
    if (typeof background != 'undefined') {
        if (background != '') background.draw()
    }

    //draw sprites in layer 2
    for(x in sprites) {
        if (sprites[x].layer == 2) sprites[x].draw()
    }

    //draw particles
    for(x in particles) {
        particles[x].draw()
        particles[x].update()
        if (particles[x].radius < 0) {
            particles.splice(x, 1)
        }
    }

    //if player exists, draw her
    if(typeof player != 'undefined') {
        player.draw()
        player.update()
    }

    //draw sprites in player 1
    for(x in sprites) {
        if (sprites[x].layer == 1) sprites[x].draw()
    }

    //if cursor exists, draw it
    if(typeof cursor != 'undefined'){
        cursor.draw()

    }

    if (typeof icon != 'undefined') {
        if(typeof cursor != 'undefined'){
            if (cursor.position.x > 56 || cursor.position.y > 8) {
                drawToolbar()
            }
        } else {
            drawToolbar()
        }
    } 
}
animate()

function drawToolbar() {
    uiColour = '159'
    c.fillStyle = 'rgb('+uiColour+','+uiColour+','+uiColour+')'
    c.fillRect(2,2,58,14)
    for (x in icon) {
        icon[x].draw()
    }
    c.fillStyle = 'rgba('+uiColour+','+uiColour+','+uiColour+',0.85)'
    c.fillRect(2,2,24,14)
    c.fillRect(35,2,24,14)
}