// Basic Functions

function print(a) {
    console.log(a)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}


// Loader

const loader = document.querySelector('.loader')


// Light Mode , Dark Mode

function toggleMode () {
    if (modeType == 'dark'){
        modeType = 'light'
        title.forEach( function (element) { 
            element.style.color = "#000"
        })
        text.forEach( function (element) { 
            element.style.color = "#000"
        })
        modeColor.forEach( function (element) { 
            element.style.backgroundColor = "#FFC4C4"
        })
        modeButtonImg.src = 'ressources/img/moon.png'
    }
    else if (modeType== 'light') {
        modeType = 'dark'
        title.forEach( function (element) { 
            element.style.color = "#fff"
        })
        text.forEach( function (element) { 
            element.style.color = "#fff"
        })
        modeColor.forEach( function (element) {
            element.style.backgroundColor = "#1A1C1D"
        })
        modeButtonImg.src = 'ressources/img/sun.png'
    }
}

let modeType = 'dark'
const modeColor = document.querySelectorAll('.backgroundColor')
const modeButton = document.querySelector('.toggleMode')
const modeButtonImg = document.querySelector('.toggleMode img')
const text = document.querySelectorAll('.text')
const title = document.querySelectorAll('.title')



modeButton.addEventListener('click', () => {
    toggleMode()
})


// Animation reveal
const ratio = .1
const options = {
    root: null,
    rootMargin :'1px',
    threshold: ratio,
}

const handleIntersectOne = function (entries, obs) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('revealVisible')
            obs.unobserve(entry.target)
        }
    })
}

const obsOne = new IntersectionObserver(handleIntersectOne, options)
revealOneTargets = document.querySelectorAll('.revealOne')
revealOneTargets.forEach( function (target) {
    obsOne.observe(target)
})

// Menu Burger

const burger = document.querySelector('.boxBurger')
const sidenav = document.getElementById("mySideNav")
let isBurgerActive

// Home Menu

let sliderMenuActiveNumber = 0
let sliderMenuActiveImg = document.querySelector(`.imgSlider${sliderMenuActiveNumber}`)


// TypeWritter Effect 

const bigTitle = document.querySelector('.bigTitle')
let bigTitleText 

function typewritter(word, index){
    if (index == word.length){
        bigTitle.innerText = bigTitleText
    }
    if (index < word.length) {
        setTimeout(() => {
            bigTitle.innerText += `${word[index]}`
            typewritter(word, index + 1)
        }, getRandomInt(4)*100)
    }
    
}

// Actions

document.addEventListener('DOMContentLoaded', () => {
    // Loader
    window.addEventListener('load', () => {
        loader.classList.add('fondu-out')
    })

    if (document.title == "Accueil - Lunar Pulse"){
        // Home Animation
        setInterval(()=>{
            if (sliderMenuActiveNumber == 2){
                sliderMenuActiveNumber = 0
                document.querySelector('.imgSlider1').classList.remove('active')
                document.querySelector('.imgSlider2').classList.remove('active')
            }else{
                sliderMenuActiveNumber++
                sliderMenuActiveImg = document.querySelector(`.imgSlider${sliderMenuActiveNumber}`)
                sliderMenuActiveImg.classList.add('active')
            }
        }, 7000)
    } 
    else if (document.title == "Agenda - Lunar Pulse"){
        bigTitleText = "Agenda"
        typewritter(bigTitleText, 0)
    }
    else if (document.title == "Galerie Photos - Lunar Pulse"){
        bigTitleText = "Galerie"
        typewritter(bigTitleText, 0)
    }
    else if (document.title == "Réserver - Lunar Pulse"){
        bigTitleText = "Réserver"
        typewritter(bigTitleText, 0)
    }
    else if (document.title == "Contact - Lunar Pulse"){
        bigTitleText = "Contact"
        typewritter(bigTitleText, 0)
    }

    // Menu Burger

    burger.addEventListener('click', e => {
        e.target.classList.toggle('active')
        isBurgerActive = e.target.classList.value
        if (isBurgerActive == 'boxBurger active'){
            sidenav.classList.add("active")
        }
        if (isBurgerActive == 'boxBurger'){
            sidenav.classList.remove("active")
        }
    })

})