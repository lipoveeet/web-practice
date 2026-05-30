const burger = document.querySelector(".burger");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileClose = document.querySelector(".mobile-menu-close");

const mobileLinks = document.querySelectorAll(".mobile-menu a");

burger.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});

mobileClose.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});