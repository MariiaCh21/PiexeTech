document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');

    if (burger && nav) {
        const links = nav.querySelectorAll('a');
    

        burger.addEventListener('click', () => {
            nav.classList.toggle('open');
            burger.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });

        links.forEach(link => {
           link.addEventListener('click', () => {
               nav.classList.remove('open');
               burger.classList.remove('open');
               document.body.classList.remove('menu-open')
    });
  });
}

const form= document.querySelector('.contact-form');
const successMessage = document.querySelector('.form-success');
const formHero = document.querySelector('.form-hero')

if (form && successMessage) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        form.style.display = "none";
        if (formHero) formHero.style.display = 'none';

        successMessage.classList.add('show');
    });
  }
});

const newsletterForm = document.getElementById("newsletterForm");
const newsletterSuccess = document.getElementById("newsletterSuccess");

if (newsletterForm && newsletterSuccess) {
    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();

        newsletterForm.style.display = "none";
        newsletterSuccess.style.display = "block";
    })
}

const cards = document.querySelectorAll('.card');
let currentIndex = 0;
let intervalId = null;

function startAutoHighlight() {
    intervalId = setInterval(() => {
      cards.forEach(card => card.classList.remove('is-active'));

      cards[currentIndex].classList.add('is-active');
      currentIndex = (currentIndex + 1) % cards.length;
 }, 2000);
}

function stopAutoHighlight() {
    clearInterval(intervalId);
    cards.forEach(card => card.classList.remove('is-active'));
}

cards.forEach(card => {
    card.addEventListener('mouseenter', stopAutoHighlight);
    card.addEventListener('mouseleave', startAutoHighlight);
});

startAutoHighlight();


const shortForm = document.getElementById("contactShortForm");
const shortSuccess = document.getElementById("contactSuccess");

if (shortForm) {
    shortForm.addEventListener("submit", function (e) {
        e.preventDefault();

        shortForm.style.display = "none";
        shortSuccess.classList.add("show");
    })
}