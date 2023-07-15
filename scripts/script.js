const room = document.querySelector('.room')

let rotateX = 0
let rotateY = 0

let prevMouseX = 0
let prevMouseY = 0

let isRightClick = false

window.onmousedown = (e) => {
    if (e.which === 3) isRightClick = true
}

window.onmouseup = (e) => {
    if (e.which === 3) isRightClick = false
}

window.oncontextmenu = () => false

window.onkeydown = (e) => {
    console.log(e.code)
    if (e.code === 'Space') {
        rotateX = 0
        rotateY = 0
        rotateZ = 0
        room.style.transform = `translate3d(0px, -500px, 0px) rotateY(${rotateX}deg) rotateX(${rotateY * Math.cos(rotateX * Math.PI / 180)}deg) rotateZ(${rotateZ * Math.sin(rotateX * Math.PI / 180)}deg)`
    }
}

window.onmousemove = (e) => {
    const currentMouseX = e.clientX
    const currentMouseY = e.clientY
    const deltaX = currentMouseX - prevMouseX
    const deltaY = currentMouseY - prevMouseY
    prevMouseX = currentMouseX
    prevMouseY = currentMouseY
    if (isRightClick) {
        rotateY += deltaY * 0.2
        rotateX -= deltaX * 0.2    
        if (Math.abs(rotateY) < 90) {
            room.style.transform = `translate3d(0px, -500px, 0px) rotateY(${rotateX}deg) rotateX(${rotateY * Math.cos(rotateX * Math.PI / 180)}deg) rotateZ(${rotateY * Math.sin(rotateX * Math.PI / 180)}deg)`
        }
    }
}



function Frame() {

    requestAnimationFrame(Frame)
}

Frame()