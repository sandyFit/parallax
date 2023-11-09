let moon = document.getElementById('moon');
console.log(moon);
let text = document.getElementById('text');
console.log(text);
let cityLeft = document.getElementById('cityLeft');
console.log(cityLeft);
let cityRight = document.getElementById('cityRight');
console.log(cityRight);

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    moon.style.top = value * .8 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    cityLeft.style.left = value * -1.5 + 'px';
    cityRight.style.left = value * 1.5 + 'px';
    
    
})
