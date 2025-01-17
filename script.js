// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a[data-target]");
    const sections = document.querySelectorAll("section");

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => section.classList.remove("active"));
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            // Hide all sections
            hideAllSections();

            // Get the target section ID from the data-target attribute
            const targetId = link.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Show the target section
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });

    // Optionally, show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add("active");
    }
});
