console.log('hello world')
let count = 0;
let element = document.getElementById('counter')

// body[0].className = 'theme'
// main[0].className = 'theme'

function increase(){
    count++
    element.innerText = count
}


function decrease(){
    count--
    element.innerText = count
}

function reset(){
    count = 0
    element.innerHTML = `<mark>${count}</mark>`
}

function selectTheme(theme){
    const body = document.getElementsByTagName('body')
    const main = document.getElementsByTagName('main')
    const buttons = document.getElementsByTagName('buttons')
    body[0] = theme
    main[0] = theme
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
}