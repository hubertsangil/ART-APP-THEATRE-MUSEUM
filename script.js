document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".theatre");

    function checkPosition() {
        sections.forEach((section, index) => {
            const distanceFromTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (distanceFromTop < windowHeight * 0.75) {
                if (index % 2 === 0) {
                    section.classList.add("animate-slide-left");
                } else {
                    section.classList.add("animate-slide-right");
                }
            } else {
                section.classList.remove("animate-slide-left");
                section.classList.remove("animate-slide-right");
            }
        });
    }

    window.addEventListener("scroll", checkPosition);
    checkPosition();
});
