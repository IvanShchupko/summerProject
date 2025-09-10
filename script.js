let first = document.getElementById('1')
let second = document.getElementById('2')
let third = document.getElementById('3')
let fourth = document.getElementById('4')
let fifth = document.getElementById('5')
let sixth = document.getElementById('6')
let sevens = document.getElementById('7')
let eights = document.getElementById('8')

let button = document.querySelector('.reset')

let firstFlip = -1
let flippedPairs = 0
let matched = []
let cardPicPairs = []

let mistakesNum = 0

let cards = [first, second, third, fourth, fifth, sixth, sevens, eights]
let icons = ['./img/appleCat.png', './img/appleCat.png', './img/malinaCat.png', './img/malinaCat.png', './img/orangeCat.png', './img/orangeCat.png', './img/melonCat.png', './img/melonCat.png']
let winP = icons.length / 2
let winN = 0
let numbers = [0,1,2,3,4,5,6,7]
let num = cards.length
let used = []
let cardValues = []


flippedPairs = 0
matched = 0
for(let i = 0; i < cards.length; i++){
    let colorNumber = Math.floor(Math.random() * num)
    num += -1
    numbers.splice(colorNumber,1)
    used.push(colorNumber)
    cards[i].style.backgroundImage = `url(${icons[colorNumber]})`
    cardValues.push(icons[colorNumber])
    icons.splice(colorNumber,1)
}
/* setTimeout(() => { */
    for(let i = 0; i < cards.length; i++){
        cards[i].style.backgroundImage = `url(./img/fone.avif)`
    }/* 
}, '1000') */
console.log(cardValues)

let win = document.querySelector('.win')
let lose = document.querySelector('.lose')
let gameMist = document.querySelector('.game_mist')

mist = 0
let startBtn = document.querySelector('.start')
let blur = document.querySelector('.game_blur')
startBtn.addEventListener('click', function(){
    blur.style.opacity = '0'
    blur.style.zIndex = '-1'
    startBtn.style.opacity = '0'
    startBtn.style.zIndex = '-1'
    gameMist.style.opacity = '0'
    mist = document.querySelector(".game_mist-num").value-1
    /* time = 0
    while(mistakesNum < mist || winN !== winP){
        setTimeout(() => {
            time ++
            console.log(time)
        }, '1000')
    } */
})


button.addEventListener('click', function(){
    location.reload()
})

cardColor = []
cardNumber = []

function flip(nume){
    if(firstFlip < 1){
        cards[nume-1].style.backgroundImage = `url(${cardValues[nume-1]})`

        firstFlip += 1
        cardColor.push(cardValues[nume-1])
        cardNumber.push(nume-1)
    } else if(cardNumber[0] === cardNumber[1]){
        alert("You mustn't cheat!")
        location.reload()
    } else if(cardColor[0] === cardColor[1]){
        firstFlip = -1
        cardColor = []
        cardNumber = []
        cardNumber.push(nume-1)

        cards[nume-1].style.backgroundImage = `url(${cardValues[nume-1]})`

        winN += 1
        firstFlip += 1
        cardColor.push(cardValues[nume-1])
    } else if(cardColor[0] !== cardColor[1]){
        cards[cardNumber[0]].style.backgroundImage = `url(./img/fone.avif)`
        cards[cardNumber[1]].style.backgroundImage = `url(./img/fone.avif)`

        cardColor = []
        cardNumber = []
        firstFlip = -1
        mistakesNum += 1
    }
    if(mistakesNum > mist){
        blur.style.opacity = '1'
        blur.style.zIndex = '1'
        lose.style.opacity = '1'
        lose.style.zIndex = '1'
    }
    if(winN === winP){
        blur.style.opacity = '1'
        blur.style.zIndex = '1'
        win.style.opacity = '1'
        win.style.zIndex = '1'
    }
}


first.addEventListener('click', function(){
    flip(1)
})
second.addEventListener('click', function(){
    flip(2)
})
third.addEventListener('click', function(){
    flip(3)
})
fourth.addEventListener('click', function(){
    flip(4)
})
fifth.addEventListener('click', function(){
    flip(5)
})
sixth.addEventListener('click', function(){
    flip(6)
})
sevens.addEventListener('click', function(){
    flip(7)
})
eights.addEventListener('click', function(){
    flip(8)
})