const menu = document.querySelector('.menu');
const navLink = document.querySelector('.nav-link');
const link = document.querySelectorAll('.nav-link li');

menu.addEventListener('click', function () {
    navLink.classList.toggle('slide');
    link.forEach(link => {
        link.classList.toggle('fade');
    });
});
