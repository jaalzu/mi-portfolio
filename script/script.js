let menu = document.getElementById('nav-menu');
let navList = document.getElementById('nav-list');

menu.addEventListener('click',() => {
    navList.classList.toggle('show-menu');
})