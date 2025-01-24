// Script for basic interactivity

// Add event listener for DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Example: Dynamic message in the footer
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    footer.textContent = `© ${year} Your Website Name. All rights reserved.`;

    // Example: Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    console.log("Script.js loaded successfully!");
});

