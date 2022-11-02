console.log("Javascript Connected")

// step1: grab our HTML element

const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const counter = document.querySelector('#counter')

const themeBtns = document.querySelectorAll('.theme-buttons')

// console.log(themeBtns)

// step2: write our function

let count = 0

const increase = () => {
    count++
    console.log(count)
    counter.textContent = count
}

const decrease = () => {
    count--
    console.log(count)
    counter.textContent = count
}

const reset = () => {
    count = 0
    console.log(count)
    counter.textContent = count
}

const selectTheme = (event) => {
    console.log(event.target.textContent)
    let theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const buttons = document.querySelectorAll('button')
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }
    
}

// step3: combine steps 1 and 2 using an eventListener
// event listener syntax
// ElementName.addEventListener('name of event type', name of function)

plusBtn.addEventListener('click',  increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

for (let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme)
}