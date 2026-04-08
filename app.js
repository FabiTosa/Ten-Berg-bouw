// =============================
// PREMIUM SCROLL ANIMATION
// =============================

// select elements
const elements = document.querySelectorAll(
    ".section h1, .section h2, .section h3, .section p, .section li"
);

// add animation class
elements.forEach(el => {
    el.classList.add("scroll-animate");
});

// intersection observer
const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            // animate only once (performance)
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px"
});

// observe elements
document.querySelectorAll(".scroll-animate").forEach(el => {
    observer.observe(el);
});



// =============================
// STICKY NAVBAR EFFECT
// =============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* PROJECT FADE IN ANIMATION */
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => {
  fadeObserver.observe(el);
});

// MOBILE NAV TOGGLE
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

