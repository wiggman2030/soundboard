const vaan = document.getElementById('vaan');
const tidus = document.getElementById('tidus');

vaan.onmouseover = function () {
    vaan.style.height = "450px";
    vaan.style.width = "450px";
    vaan.style.backgroundImage = "url('./images/vaan-head.jpg'";
};

vaan.onmouseleave = function () {
    vaan.style.height = "400px";
    vaan.style.width = "400px";
    vaan.style.backgroundImage = "url('./images/Vaan-thumb.jpg')";
}

tidus.onmouseover = function () {
    tidus.style.height = "450px";
    tidus.style.width = "450px";
    tidus.style.backgroundImage = "url('./images/tidus head.jpg')";
};

tidus.onmouseleave = function () {
    tidus.style.height = "400px";
    tidus.style.width = "400px";;
    tidus.style.backgroundImage = "url('./images/Tidus.jpg')";
};

/*
const audio = new Audio('./burp.mp3');

function playSound () {
    audio.currentTime = 0;
    audio.play();
}

const soundOne = document.getElementsById("one");
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');
const eleven = document.getElementById('eleven');
const twelve = document.getElementById('twelve');
const thirteen = document.getElementById('thirteen');
const fourteen = document.getElementById('fourteen');
const fifteen = document.getElementById('fifteen');

function playSound (url) {
    audio.currentTime = 0;
    audio(url).play();
};

tidus.addEventListener('click', playSound('./burp.mp3'));
*/