document.addEventListener("DOMContentLoaded", function () {
    const timelineContent = document.querySelectorAll(".timeline-content");
    const sr = ScrollReveal()

    function addReveal(classname, origin) {
        sr.reveal(classname, {
            origin: origin,
            distance: "300px",
            easing: "ease-in-out",
            duration: 900,
        });
    }

    if (window.innerWidth < 768) {
        timelineContent.forEach(function (content) {
            if (content.classList.contains("js--fadeInLeft")) {
                content.classList.remove("js--fadeInLeft");
                content.classList.add("js--fadeInRight");
            }
        });
        addReveal(".js--fadeInRight", "right")
    } else {
        addReveal(".js--fadeInLeft", "left");
        addReveal(".js--fadeInRight", "right");
    }
    addReveal(".js--fadeInLeft", "left");
    addReveal(".js--fadeInRight", "right");
})
