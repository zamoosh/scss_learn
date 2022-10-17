window.addEventListener("load", function () {
    let menuBtn = document.querySelector('.menu-btn');
    let burger = document.querySelector('.menu-btn__burger');
    
    let nav = document.querySelector('.nav');
    let navMenu = document.querySelector('.menu-nav');
    
    let menuNavItem = document.querySelectorAll('.menu-nav__item');
    
    
    let showMenu = false;
    
    menuBtn.addEventListener("click", function () {
        if (!showMenu) {
            burger.classList.add("open");
            nav.classList.add("open");
            navMenu.classList.add("open");
            for (let i = 0; i < menuNavItem.length; i++) {
                let counter = (i + 1) * 0.1;
                menuNavItem[i].style.transitionDelay = `${counter}s`;
                menuNavItem[i].classList.add("open");
            }
        } else {
            burger.classList.remove("open");
            nav.classList.remove("open");
            navMenu.classList.remove("open");
            for (let i = 0; i < menuNavItem.length; i++) {
                menuNavItem[i].classList.remove("open");
            }
        }
        showMenu = !showMenu;
    });
});