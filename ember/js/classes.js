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

class Cloud extends Circle {

}

class Air {
    constructor() {
        this.elements = []
        for (this.x = 0; this.x < 1000; this.x++) {
            this.elements.push(
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
    }

    deleteSelf() {
        const myIndex = objects.indexOf(this)
        objects.splice(myIndex,1)
    }

    update() {
        for (this.x = 0; this.x < this.elements.length; this.x++) {
            this.elements[this.x].update()
        }
    }
}

class Mouse {
    constructor() {
    }

    deleteSelf() {
        const myIndex = objects.indexOf(this)
        objects.splice(myIndex,1)
    }

    update() {
        for (this.i=0;this.i<5;this.i++) {
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
    }
}

class Transition {
    
}