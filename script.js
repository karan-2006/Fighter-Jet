function big(img){

    document.querySelector('.big').src = img;
}

function path(color) {
    const path = document.querySelector('.path');
    path.style.background = color;
}
function bg(background){
    const bg = document.querySelector(".background");
    bg.style.background=background;
    
}
function changeText(newText, color) {
    const displayText = document.querySelector('#displayText')
    displayText.textContent = newText;
    displayText.style.color = color;
}
function modeText(color) {
    const showText= document.querySelector('h1');
    showText.style.color = color; 
}