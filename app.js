document.addEventListener("DOMContentLoaded", () => {

    // =============================
    // SCROLL ANIMATION
    // =============================
    const elements = document.querySelectorAll(
        ".section h1, .section h2, .section h3, .section p, .section li"
    );

    elements.forEach(el => el.classList.add("scroll-animate"));

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -80px 0px" });

    document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));

    // =============================
    // STICKY NAVBAR
    // =============================
    const navbar = document.querySelector("nav");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) navbar.classList.add("scrolled");
            else navbar.classList.remove("scrolled");
        });
    }

    // =============================
    // PROJECT FADE-IN
    // =============================
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade-in").forEach(el => fadeObserver.observe(el));

    // =============================
    // MOBILE NAVIGATION (HAMBURGER)
    // =============================
    const hamburger = document.querySelector(".hamburger");

    if (hamburger && navbar) {

        // Toggle menu
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            navbar.classList.toggle("active");
            hamburger.classList.toggle("open");
        });

        // Close menu when clicking outside navbar
        document.addEventListener("click", () => {
            navbar.classList.remove("active");
            hamburger.classList.remove("open");
        });

        // Prevent closing when clicking inside navbar
        navbar.addEventListener("click", e => e.stopPropagation());
    }

    // =============================
    // SMOOTH SCROLL FOR NAV LINKS
    // =============================
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetID = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetID);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            // Close mobile menu if open
            if (navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                hamburger.classList.remove("open");
            }
        });
    });

});