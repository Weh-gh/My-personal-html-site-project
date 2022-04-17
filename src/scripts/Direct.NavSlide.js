const navSlide = () => {
    const burger = document.querySelector('.www_burger');
    const nav = document.querySelector('.www_nav-links');
    const navLinks = document.querySelectorAll('.www_nav-links li');
    // Toogle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('www_nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
    });
    //Burger Animation
    burger.classList.toggle('www_toggle');


});
}

navSlide();
