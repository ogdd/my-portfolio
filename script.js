alert('This Page is still being developed please do not laugh!')



function randomColor () {
    var letters = "0123456789ABCDEF";
    var colorMaker = "#";
    for (var i = 0; i < 6; i++) {
        colorMaker = colorMaker + letters[Math.floor(Math.random() * 16)];
        console.log('color being generated')
    }
    return colorMaker;
}

var headerNode = document.querySelector('about-me');
headerNode.addEventListener("click", function() {headerNode.style.color = 'green'});