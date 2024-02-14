let background = document.getElementById('background-image');
let dragon = document.getElementById('dragon');
let f = document.getElementById('6');
let e = document.getElementById('5');
let d = document.getElementById('4');
let c = document.getElementById('3');
let b = document.getElementById('2');
let a = document.getElementById('1');
let menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
    var val = window.scrollY;
    background.style.top = (val * 0.8) + "px";
    a.style.top = (val * 0.08) + "px";
    b.style.top = (val * 0.20) + "px";
    c.style.top = (val * 0.30) + "px";
    d.style.top = (val * 0.40) + "px";
    e.style.top = (val * 0.50) + "px";
    f.style.top = (val * 0.65) + "px";
    dragon.style.top = (val * 0.55) + "px";
});