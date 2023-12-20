let text = document.getElementById('text');
let text1 = document.getElementById('text1');
let cnth2 = document.getElementById('cnth2');
let cnth8 = document.getElementById('cnth8');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginBottom = value * 2.5 + 'px';
    cnth2.style.right = value * -1.5 + 'px';
    cnth8.style.left = value * -1.5 + 'px';
});

``