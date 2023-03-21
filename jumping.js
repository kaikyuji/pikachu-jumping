const pikachu = document.querySelector('.pikachu')
const pokeball = document.querySelector('.pokeball')
const tryAgain = document.querySelector('.tryagain')
let h6ActualPoints = document.querySelector('.actualPoints') // h6 dos pontos atuais
let h6RecordPoints = document.querySelector('.recordPoints') // h6 do recorde
const buttonJump = document.querySelector('.jumpButton')
let pointsNow = 000
let record = 000

document.addEventListener('keydown', checkJumping)
function checkJumping(keycap){
    if(keycap.code == 'Space'){
        pikachu.classList.add('jump')
        buttonJump.style.transform = 'translateY(4px)';
    }
    setTimeout(()=>{
        pikachu.classList.remove('jump')
        buttonJump.style.transform = 'translateY(0)'
    }, 600)
}

function jumpOnButton(){
    pikachu.classList.add('jump')
    setTimeout(()=>{
        pikachu.classList.remove('jump')
    }, 600)
}


function verifyCollision(){
    if(getComputedStyle(pikachu).bottom == '0px' && pokeball.offsetLeft <= 150){
        pokeball.style.left = pokeball.offsetLeft + 'px'
        pokeball.style.animation = 'none';
        clearInterval(loop)
        pikachu.src = 'imgs/fainted.png'
        tryAgain.classList.remove('hidden')
        document.removeEventListener('keydown', checkJumping)
        record = pointsNow
    }else{
        pointsNow+= 10
        h6ActualPoints.innerText = pointsNow
        h6RecordPoints.innerText = record
    }
}
let loop = setInterval(verifyCollision, 100)

function refresh(){
    pointsNow = 000
    pikachu.src = 'imgs/pikachu-running.gif'
    let loop = setInterval(verifyCollision, 100)
    pokeball.style.animation = 'pokeballAnimation 2s linear infinite'
    document.addEventListener('keydown', checkJumping)
    tryAgain.classList.add('hidden')
}