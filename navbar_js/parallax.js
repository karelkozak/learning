const debugElement = document.getElementById('debug')
const juggernautElement = document.getElementById('juggernaut')
const gyrocopterElement = document.getElementById('gyrocopter')
const treantElement = document.getElementById('treant')
const headerElement = document.getElementById('header')


function moveJuggernaut(scrollTop) {
    juggernautElement.style.top = `${scrollTop / 3}px`;
}

function moveGyrocopter(scrollTop) {
    gyrocopterElement.style.bottom = `${scrollTop / 3}px`;
}

function moveTreant(scrollTop) {
    if(scrollTop < 980) {
        return
    }
    let offset = (scrollTop - 980) / 20;
    if(offset > 50) {
        offset = 50
    }
    treantElement.style.left = `${offset}%`;
    headerElement.style.right = `${-25 + offset}%`;
}

function moveParallaxPieces(scrollTop) {
    moveJuggernaut(scrollTop)
    moveGyrocopter(scrollTop)
    moveTreant(scrollTop)
}

document.addEventListener('scroll',function(event) {
    debugElement.innerText = `${document.documentElement.scrollTop}`
    moveParallaxPieces(document.documentElement.scrollTop)
})
