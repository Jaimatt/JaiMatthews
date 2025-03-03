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

    mouseEffect()
    
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

function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    for (object of objects) {
        object.update()
    }
}