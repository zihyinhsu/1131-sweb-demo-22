const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        navbar.classList.add('navbar-fixed');
    }else{
        navbar.classList.remove('navbar-fixed');
    }
})