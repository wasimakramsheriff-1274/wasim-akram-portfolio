// ======================================
// HERO TYPING EFFECT
// ======================================

const text = "Hello, I'm Wasim Akram Sheriff 👋";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const sections = document.querySelectorAll("section");
const timelineItems = document.querySelectorAll(".timeline-item");
const projectCards = document.querySelectorAll(".project-card");
const skillCards = document.querySelectorAll(".skill-card");

function revealElements() {

    // Sections
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {
            section.classList.add("show");
        }
    });

    // Timeline
    timelineItems.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });

    // Projects (1 by 1 reveal)
    projectCards.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 250);
        }
    });

    // Skills (1 by 1 reveal)
    skillCards.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 150);
        }
    });

}

window.addEventListener("scroll", revealElements);

// ======================================
// LOADER
// ======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 800);

    typeEffect();
    revealElements();

});

// ======================================
// ACTIVE NAVBAR HIGHLIGHT
// ======================================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ======================================
// FLOATING PARTICLES (OPTIONAL)
// ======================================

const hero = document.querySelector(".hero");

for (let i = 0; i < 25; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration =
        (Math.random() * 5 + 4) + "s";

    hero.appendChild(particle);
}