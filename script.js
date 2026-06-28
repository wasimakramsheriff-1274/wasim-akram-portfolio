// ======================================
// HERO TYPING EFFECT
// ======================================

const text = "Hello, I'm Wasim Akram Sheriff 👋";
let index = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const sections = document.querySelectorAll("section");
const timelineItems = document.querySelectorAll(".timeline-item");
const displayCards = document.querySelectorAll(".display-card"); // Target updated card style
const skillCards = document.querySelectorAll(".skill-card");

function revealElements() {

    // Sections Reveal
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            section.classList.add("show");
        }
    });

    // Timeline Reveal
    timelineItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });

    // Display Cards (Projects, Certs, Resume) 1-by-1 Reveal
    displayCards.forEach((card, idx) => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            setTimeout(() => {
                card.classList.add("show");
            }, idx * 200);
        }
    });

    // Skills 1-by-1 Reveal
    skillCards.forEach((card, idx) => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            setTimeout(() => {
                card.classList.add("show");
            }, idx * 150);
        }
    });
}

window.addEventListener("scroll", revealElements);

// ======================================
// INITIALIZATION ON LOAD
// ======================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.classList.add("loader-hidden");
        }
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
        const sectionTop = section.offsetTop - 160;
        const sectionId = section.getAttribute("id");

        if (window.scrollY >= sectionTop && sectionId) {
            current = sectionId;
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
// FLOATING PARTICLES SYSTEM
// ======================================

const hero = document.querySelector(".hero-section"); // Target updated flex layout class

if (hero) {
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement("span");
        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = (Math.random() * 5 + 4) + "s";

        hero.appendChild(particle);
    }
}