

let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

menu.onclick = () => {
    nav.classList.toggle('active');
}