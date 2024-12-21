// constants
const outerBleed = 40;
const perspective = 1.5;

const innerBack = document.querySelector("#backContent");
const outerBack = document.querySelector("#backBox");
const innerFront = document.querySelector("#frontContent");
const outerFront = document.querySelector("#frontBox");

const screenMouse = {x: 0, y: 0, s:0};
const canvas = document.querySelector("canvas");

const c = canvas.getContext('2d');

innerBack.style.width = `calc(100vw + ${outerBleed}px)`;
innerBack.style.height = `calc(100vh + ${outerBleed}px)`;
innerFront.style.width = `calc(100vw + ${perspective * outerBleed}px)`;
innerFront.style.height = `calc(100vh + ${perspective * outerBleed}px)`;

objects = []


updateCanvasSize()
animate()

// mouse move listener:
document.addEventListener('mousemove', event => {
    screenMouse.s = Math.sqrt((screenMouse.x - event.clientX)**2 + (screenMouse.y - event.clientY)**2)

    for (i=0;i<5;i++) {
        objects.push(
            new Spark(
                mouseToSystem().x,
                mouseToSystem().y,
                rand(-1.5,1.5),
                rand(-1.5,1.5),
                rand(),
                {r:255, g:rand(100,200), b:0, a:1}
            )
        )

    }
    
    screenMouse.y = event.clientY
    screenMouse.x = event.clientX

    x = (screenMouse.x/window.innerWidth * 2) - 1
    y = (screenMouse.y/window.innerHeight * 2) - 1

    setScroll(x,y)
    // setScroll(0,0)
})

// window resize listener:
window.addEventListener('resize', event => {
    updateCanvasSize()
});

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
        document.body.classList.add("fadeOut")
    }, 400)

    setTimeout(function() {
        window.location.href = "open.html";
    }, 1300)

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

class Circle {
    constructor(x,y,dx,dy,radius,colour = {r:255,g:255,b:255,a:1}) {
        this.pos = {x,y}
        this.r = radius
        this.velocity = {x:dx,y:dy}
        this.colour = colour
    }

    deleteSelf() {
        const myIndex = objects.indexOf(this)
        objects.splice(myIndex,1)
    }

    draw() {
        drawCircle(this.pos.x,this.pos.y,this.r,this.colour)
    }

    update() {
        this.pos.x += this.velocity.x
        this.pos.y += this.velocity.y

        this.draw()
    }
}

class Bouncer extends Circle {
    constructor(...args) {super(...args)}

    update() {
        if (Math.abs(this.pos.x) >= 500) this.velocity.x *= -1
        if (Math.abs(this.pos.y) >= 500) this.velocity.y *= -1
        
        super.update()
    }
}

class Spark extends Circle {
    constructor(...args) {super(...args)}

    update() {
        if (this.colour.a > 0) {
            this.colour.a -= 0.05
        }
        if (this.r > 0) {
            this.radius -= 0.01
        }

        if (this.r <= 0 || this.colour.a <= 0) {
            super.deleteSelf()
        }
        
        super.update()
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    for (object of objects) {
        object.update()
    }
}

for (x = 0; x < 1000; x++) {
    objects.push(
        new Bouncer(
            rand(-500,500),
            rand(-500,500),
            rand(-0.5,0.5),
            rand(-0.5,0.5),
            rand(0.5,2),
            {r:255,g:255,b:255,a:rand(0,0.25)}
        )
    )
}