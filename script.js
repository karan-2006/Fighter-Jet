function big(img) {
    document.querySelector('.big').src = img;
  }
  
  function path(color) {
    document.querySelector('.path').style.background = color;
  }
  
  function bg(background) {
    document.querySelector(".background").style.background = background;
  }
  
  function changeText(newText, color) {
    const displayText = document.querySelector('#displayText');
    displayText.textContent = newText;
    displayText.style.color = color;
  }
  
  function modeText(color) {
    const showText = document.querySelector('h1');
    showText.style.color = color;
  }
  