const grid = document.querySelector('.grid')

const width = 9

const cells = []

let xwing = 76
let tiefighter = 0

for (let index = 0; index < width ** 2; index++) {
    const divBox = document.createElement('div')
    grid.appendChild(divBox)
    divBox.innerHTML = index
    divBox.style.width = `${100 / width}%`
    divBox.style.height = `${100 / width}%`
    cells.push(divBox)
}

cells[xwing].classList.add('shooter')
cells[tiefighter].classList.add('tie')
    // const fighter [
    //   fighter1: cells[tiefighter].classList.add('tie')
    // ]

document.addEventListener('keydown', (event) => {
    const key = event.key
    console.log(key)
    if (key === 'a' && !(xwing % width === 0) && !(xwing < width)) {
        cells[xwing].classList.remove('shooter')
        xwing -= 1
        cells[xwing].classList.add('shooter')
    }
    if (key === 'd' && !(xwing % width === width - 1)) {
        cells[xwing].classList.remove('shooter')
        xwing += 1
        cells[xwing].classList.add('shooter')
    }

    if (key === ' ') {
        let laser = xwing - width
        cells[laser].classList.add('laser')
        const intervalLaser = setInterval(() => {
            if (laser < width) {
                cells[laser].classList.remove('laser')
                clearInterval(intervalLaser)
                return
            }
            cells[laser].classList.remove('laser')
            laser = laser - width
            cells[laser].classList.add('laser')
        }, 600);
    }
    // console.log(cells)
})

setInterval(() => {
    if (tiefighter >= 0 && tiefighter < (width * (width - 1)) - 1) {
        cells[tiefighter].classList.remove('tie')
        tiefighter = tiefighter + 1
        cells[tiefighter].classList.add('tie')
    }
    if (tiefighter === 71) {
        cells[tiefighter].classList.remove('tie')
            // alert("unlucky")
            // xwing = 76
            // tiefighter = 0
    }
}, 200)

// laser and tie fighter intervals should similar but the laser should be a slight bit faster