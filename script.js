document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".theatre");

    function checkPosition() {
        sections.forEach(section => {
            const distanceFromTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (distanceFromTop < windowHeight * 0.75) {
                section.classList.add("animate-slide-left"); // Add sliding animation class
            } else {
                section.classList.remove("animate-slide-left");
            }
        });
    }

    window.addEventListener("scroll", checkPosition);
    checkPosition();
});
