/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*========== year ==========*/

let footerText = document.querySelector('.footer .footer-text p b');


let currentYear = new Date().getFullYear();

footerText.textContent = currentYear;
document.getElementById('sendMailButton').addEventListener('click', function() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var subject = document.getElementById('emailSubject').value;
    var message = document.getElementById('message').value;

    var mailtoLink = `mailto:cecitasolano@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Nombre: ' + fullName + '\nCorreo: ' + email + '\nTel: ' + mobileNumber + '\n\n' + message)}`;

    window.open(mailtoLink, '_blank');
});


document.addEventListener("DOMContentLoaded", function() {
    if (new Date().getMonth() === 11) { // Diciembre es el mes 11 (0 es Enero)
        createSnowflakes();
    }
});

function createSnowflakes() {
    const colors = ['#FFC0CB', '#ADD8E6', '#90EE90', '#FFFFE0', '#FFA07A']; // Colores de las bolas de nieve

    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '●'; // Carácter para la bola de nieve
        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`; // Tamaño aleatorio
        snowflake.style.color = colors[Math.floor(Math.random() * colors.length)]; // Color aleatorio
        snowflake.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración aleatoria

        document.body.appendChild(snowflake);
    }
}
