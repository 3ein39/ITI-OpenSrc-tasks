let buttons = document.querySelectorAll('button');
let body = document.querySelector('body');

buttons.forEach((button) => {
button.addEventListener('click', (e) => {
        let color = e.target.id;
        body.style.backgroundColor = color;
        localStorage.setItem('color', color);
    });
})

let color = localStorage.getItem('color');
body.style.backgroundColor = color;
