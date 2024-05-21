document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".theatre");
    const leftCurtain = document.getElementById("red-curtain-left");
    const rightCurtain = document.getElementById("red-curtain-right");

    function checkPosition() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach((section, index) => {
            const distanceFromTop = section.getBoundingClientRect().top;
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

        // Reverse the direction of curtain movement
        leftCurtain.style.transform = `translateY(-${scrollTop * 0.5}px)`;
        rightCurtain.style.transform = `translateY(-${scrollTop * 0.5}px) scaleX(-1)`;
    }

    window.addEventListener("scroll", checkPosition);
    checkPosition();
});
