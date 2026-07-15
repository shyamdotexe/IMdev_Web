const intro = document.getElementById("intro");
const rajni = document.getElementById("rajni");

// Click animation

document.body.addEventListener("click", () => {
    intro.classList.add("active");
}, { once: true });


