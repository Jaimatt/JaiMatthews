class Player {
    constructor() {
        this.position = {
            x: spawnpoint[0]*8 + 1,
            y: spawnpoint[1]*8 + 1
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 6
        this.height = 10
        this.gravity = 0.2
        this.speed = 1
        this.maxFallSpeed = 5
        this.image = new Image()
        this.image.src = 'assets/char/right.png'
        this.jumpState = 'ground'
        this.wallState = false
        this.crouchState = false
        this.testing = false
    }

    draw() {
        this.setSprite()
        if (this.wallState) c.fillStyle = 'magenta'
        else c.fillStyle = 'blue'
        c.fillRect(Math.round(this.position.x),Math.round(this.position.y),this.width,this.height)
        // c.drawImage(this.image,this.position.x-1,this.position.y-6)
    }

    update() {
        //determine jump states
        if (this.velocity.y > 0) this.jumpState = 'fall'
        else if (this.velocity.y < 0) this.jumpState = 'jump'
        else if (this.velocity.y == 0) this.jumpState = 'ground'

        //movement side-to-side
        if (keyPressed.a || keyPressed.arrowleft) this.velocity.x = this.speed * -1
        else if (keyPressed.d || keyPressed.arrowright) this.velocity.x = this.speed
        else this.velocity.x = 0

        //walking particles
        if (
            (keyPressed.a || keyPressed.arrowleft || keyPressed.d || keyPressed.arrowright)
            && this.jumpState == 'ground'
            && !this.crouchState
        ) { 
            particles.push(new Particle(this.position.x + (this.width / 2),this.position.y + this.height,2,(Math.random()*Math.PI) + Math.PI))
        }

        //wall particles
        if (this.jumpState == "fall" && this.wallState) { 
            if (this.velocity.x == -1) {
                particles.push(new Particle(this.position.x,this.position.y+2,2,(Math.random()*Math.PI) + 3*Math.PI/2))
            } else {
                particles.push(new Particle(this.position.x + this.width,this.position.y+2,2,(Math.random()*Math.PI) + Math.PI/2))
            }
            
        }
        
        
        //change gravity based on direction of vertical movement
        if (this.jumpState == 'jump') {
            this.gravity = 0.13
        } else {
            this.gravity = 0.3
        }

        //a higher gravity when you're going up but not pressing up. To create the short hops.
        if (!(keyPressed.w || keyPressed.arrowup || keyPressed.space) && this.jumpState == 'jump') {
            this.gravity = 0.4
        }

        //increase gravity when holding down
        if (keyPressed.s || keyPressed.arrowdown) this.gravity += 0.15

        //crouch
        if ((keyPressed.s || keyPressed.arrowdown) && !this.wallState) {
            if (this.height == 10) this.position.y += 5
            this.crouchState = true
            this.height = 5
            this.speed = 0.5
        } else if (!this.inWallTile(this.position.x,this.position.y-5,6,10)[0]) {
            if (this.height == 5) this.position.y -= 5
            this.crouchState = false
            this.height = 10
            this.speed = 1
        }

        //set gravity to very low when scraping down a wall
        if (this.wallState && this.jumpState == 'fall')  {
            this.gravity = 0
            this.velocity.y = 0.5
        }

        //change velocity for gravity
        this.velocity.y += this.gravity

        //establish a terminal velocity. Increase it when holding down
        if (keyPressed.s || keyPressed.arrowdown) this.maxFallSpeed = 7
        else this.maxFallSpeed = 4
        
        //make sure velocity isn't goign about maximum
        if (this.velocity.y > this.maxFallSpeed) this.velocity.y = this.maxFallSpeed

        //reset wall state
        this.wallState = false

        //update position & check for collision
        this.position.x += this.velocity.x
        this.xWalls()
        this.position.y += this.velocity.y
        this.yWalls()

        if (this.death() || this.position.y > canvas.height) {
            this.velocity.x = 0
            this.velocity.y = 0
            this.position.x = spawnpoint[0]*8 + 1
            this.position.y = spawnpoint[1]*8 - (this.height - 8)
        }
    }

    jump() {
        if (
            this.position.x <= door.x + 8 &&
            this.position.x + this.width >= door.x &&
            this.position.y + this.height >= door.y &&
            this.position.y <= door.y + 16 &&
            this.velocity.x == 0
        ) {
            if (!this.testing) {
                nextLevel()
                return
            } else {
                reset(true)
                edit(level)
                return
            }
        }
        if (this.jumpState == 'ground' || this.wallState) this.velocity.y = -3
        if (this.wallState) this.velocity.x = this.velocity.x * -4
    }

    xWalls() {
        const wt = this.inWallTile(this.position.x,this.position.y,this.width,this.height)

        if (wt[0]) {
            if (this.jumpState != 'ground') this.wallState = true
            if (this.velocity.x < 0) {
                this.position.x = wt[1].position.x + wt[1].width + 0.01
            }
            if (this.velocity.x > 0) {
                this.position.x = wt[1].position.x - this.width - 0.01
            }
        }
    }

    yWalls() {
        const wt = this.inWallTile(this.position.x,this.position.y,this.width,this.height)

        if (wt[0]) {
            if (this.velocity.y < 0) {
                this.velocity.y = 0
                this.position.y = wt[1].position.y + wt[1].height + 0.01
            }
            if (this.velocity.y > 0) {
                this.velocity.y = 0
                this.position.y = wt[1].position.y - this.height - 0.01
            }
        }
    }

    death() {
        for (this.i = 0; this.i < dieTiles.length; this.i++) {
            const dt = dieTiles[this.i]
            if (
                this.position.x <= dt.position.x + dt.width &&
                this.position.x + this.width >= dt.position.x &&
                this.position.y + this.height >= dt.position.y &&
                this.position.y <= dt.position.y + dt.height
            ) return true
        }
        return false
    }
    
    setSprite() {
        if (this.velocity.x > 0) this.image.src = 'assets/char/right.png'
        if (this.velocity.x < 0) this.image.src = 'assets/char/left.png'
    }

    inWallTile(x,y,width,height) {
        for (this.i = 0; this.i < wallTiles.length; this.i++) {
            const wt = wallTiles[this.i]

            if (
                x <= wt.position.x + wt.width &&
                x + width >= wt.position.x &&
                y + height >= wt.position.y &&
                y <= wt.position.y + wt.height
            ) {
                return [true,wt]
            }
        }
        return [false]
    }
}