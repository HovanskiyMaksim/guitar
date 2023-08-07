window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_menu'),
    menuItem = document.querySelectorAll('.nav_menu__list_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('nav_menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('nav_menu__active');
        })
    })
})