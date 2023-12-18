//images
class Sprite {
    constructor(x,y,src,layer) {
        this.position = {x,y}
        this.image = new Image()
        this.image.src = src
        this.layer = layer
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

sprites = []

//collisions
class WallTile {
    constructor(x,y) {
        this.position = {x,y}
        this.width = 8
        this.height = 8
    }
}

wallTiles = []

//death
class DieTile {
    constructor(x,y) {
        this.position = {x,y}
        this.width = 4
        this.height = 4
    }
}

dieTiles = []

//cursor for editor
class Cursor {
    constructor(x,y) {
        this.position = {x,y}
        this.width = 8
        this.height = 8
    }

    draw() {
        c.fillStyle = 'rgba(200,200,200,0.5)'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}

//particle effects
class Particle {
    constructor(x,y,r,dir) {
        this.position = {x,y}
        this.radius = r
        this.direction = dir
        this.velocity = { x: Math.cos(this.direction), y: Math.sin(this.direction)}
    }

    draw() {
        c.fillStyle = 'rgba(255,255,255,0.5)'
        c.beginPath();
        c.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI)
        c.fill()
    }

    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.radius -= 0.2
    }
}