// Toggle navigation in mobile view
document.getElementById('nav-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('hidden')) {
        navLinks.classList.remove('hidden');
    } else {
        navLinks.classList.add('hidden');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('submit1').addEventListener('click', function (e) {
    const email1 = document.getElementById('email1').value;
    const message1 = document.getElementById('message1').value;
    if (!email1 || !message1) {
        alert('Please fill in both email and message.');
        e.preventDefault();
    }
});

document.getElementById('submit2').addEventListener('click', function (e) {
    const email2 = document.getElementById('email2').value;
    const phone = document.getElementById('phone').value;
    if (!email2 || !phone) {
        alert('Please fill in both email and phone number.');
        e.preventDefault();
    }
});

// Image slider
let currentSlide = 0;
const slides = document.querySelectorAll('#slider img');
setInterval(() => {
    slides[currentSlide].classList.add('hidden');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove('hidden');
}, 3000);
