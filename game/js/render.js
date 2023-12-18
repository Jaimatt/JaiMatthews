var background
function renderLevel(level) {
    //clear arrays
    wallTiles = []
    sprites = []
    dieTiles = []
    background = ''

    //create background (temporary)
    background = new Sprite(0,0,'assets/back/'+level.background+'.png',2)

    //create off-screen walls
    for (i = 0; i < level.data.length; i++) {
        wallTiles.push(new WallTile(-8,i*8))
        wallTiles.push(new WallTile(level.data[0].length*8,i*8))
    }
    for (i = 0; i < level.data[0].length; i++) {
        wallTiles.push(new WallTile(i*8,-8))
    }

    //create tiles from level data
    level.data.forEach((row, y) => {
        row.forEach((tile, x) => {
            if (tile.includes('W')) {
                wallTiles.push(new WallTile(x*8,y*8))
                imageLayers = chooseSpriteForBlock(x,y,level,'assets/debug','W')
                for (i in imageLayers) {
                    sprites.push(new Sprite(x*8,y*8,imageLayers[i],1))
                }
            }
            if (tile.includes('C')) {
                wallTiles.push(new WallTile(x*8,y*8))
                imageLayers = chooseSpriteForBlock(x,y,level,'assets/concrete','C')
                for (i in imageLayers) {
                    sprites.push(new Sprite(x*8,y*8,imageLayers[i],1))
                }
            }
            if (tile.includes('B')) {
                imageLayers = chooseSpriteForBlock(x,y,level,'assets/brick','B')
                for (i in imageLayers) {
                    sprites.push(new Sprite(x*8,y*8,imageLayers[i],2))
                }
            }
            if (tile.includes('S')) {
                sprites.push(new Sprite(x*8,y*8,chooseSpriteForCling(x,y,level,'assets/spike'),2))
                dieTiles.push(new DieTile((x*8)+2,(y*8)+2))
            }
            if (tile.includes('!')) {
                sprites.push(new Sprite(x*8,y*8-7,'assets/door.png',2))
            }
            if (tile.includes('*')) {
                sprites.push(new Sprite(x*8,y*8-7,'assets/door2.png',2))                
            }
        });
    });
}

function chooseSpriteForBlock(x,y,level,dir,type,alt) {
    symbol = type
    block = {
        top: false,
        bottom: false,
        left: false,
        right: false,
        NW: false,
        NE: false,
        SW: false,
        SE: false
    }

    textures = []

    if (random(parseInt(x.toString() + y.toString()),level.seed)<0.2) textures.push(dir+'/ALT.png')
    else textures.push(dir+'/NONE.png')

    //determine neighbours
    if (y == 0) block.top = true
    else if (level.data[y-1][x].includes(symbol)) block.top = true

    if (y == level.data.length - 1) block.bottom = true
    else if (level.data[y+1][x].includes(symbol)) block.bottom = true

    if (x == 0) block.left = true
    else if (level.data[y][x-1].includes(symbol)) block.left = true

    if (x == level.data[0].length - 1) block.right = true
    else if (level.data[y][x+1].includes(symbol)) block.right = true

    //walls
    if (block.top && block.bottom && block.left && !block.right) textures.push(dir+'/WE.png')
    if (block.top && block.bottom && !block.left && block.right) textures.push(dir+'/WW.png')
    if (block.top && !block.bottom && block.left && block.right) textures.push(dir+'/WS.png')
    if (!block.top && block.bottom && block.left && block.right) textures.push(dir+'/WN.png')

    if (!block.top && block.bottom && block.left && !block.right) textures.push(dir+'/BC1.png')
    if (!block.top && block.bottom && !block.left && block.right) textures.push(dir+'/BC2.png')
    if (block.top && !block.bottom && !block.left && block.right) textures.push(dir+'/BC3.png')
    if (block.top && !block.bottom && block.left && !block.right) textures.push(dir+'/BC4.png')
    if (block.top && block.bottom && !block.left && !block.right) textures.push(dir+'/VERT.png')
    if (!block.top && !block.bottom && block.left && block.right) textures.push(dir+'/HORI.png')

    if (!block.top && !block.bottom && !block.left && block.right) textures.push(dir+'/NE.png')
    if (!block.top && !block.bottom && block.left && !block.right) textures.push(dir+'/NW.png')
    if (!block.top && block.bottom && !block.left && !block.right) textures.push(dir+'/NS.png')
    if (block.top && !block.bottom && !block.left && !block.right) textures.push(dir+'/NN.png')

    if (!block.top && !block.bottom && !block.left && !block.right) textures.push(dir+'/ALL.png')

    //determien corner neighbours
    if (y == 0 || x == 0) block.NW = true
    else if (level.data[y-1][x-1].includes(symbol)) block.NW = true

    if (y == level.data.length - 1 || x == 0) block.SW = true
    else if (level.data[y+1][x-1].includes(symbol)) block.SW = true

    if (y == 0 || x == level.data[0].length - 1) block.NE = true
    else if (level.data[y-1][x+1].includes(symbol)) block.NE = true

    if (y == level.data.length - 1 || x == level.data[0].length - 1) block.SE = true
    else if (level.data[y+1][x+1].includes(symbol)) block.SE = true

    //corner walls
    if (!block.NE && block.top && block.right) textures.push(dir+'/SC1.png')
    if (!block.NW && block.top && block.left) textures.push(dir+'/SC2.png')
    if (!block.SW && block.bottom && block.left) textures.push(dir+'/SC3.png')
    if (!block.SE && block.bottom && block.right) textures.push(dir+'/SC4.png')

    return textures
}

function chooseSpriteForCling(x,y,level,type) {
    var direction = ''

    if (x == level.data[0].length - 1) direction = 'W'
    else if (['W','C'].includes(level.data[y][x+1])) direction = 'W'

    if (x == 0) direction = 'E'
    else if (['W','C'].includes(level.data[y][x-1])) direction = 'E'

    if (y == 0) direction = 'S'
    else if (['W','C'].includes(level.data[y-1][x])) direction = 'S'

    if (y == level.data.length - 1) direction = 'N'
    else if (['W','C'].includes(level.data[y+1][x])) direction = 'N'


    if (direction == '') direction = 'A'

    return type + '/' + direction + '.png'
}

function random(inp,seed) {
    var x = Math.sin(seed*(inp+1)) * 10000;
    return x - Math.floor(x);
}