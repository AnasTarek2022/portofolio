// =========================
// PAGE LOADING
// =========================

window.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});


// =========================
// CODE CARD ANIMATION
// =========================

window.addEventListener("load", function () {

    const codeCard = document.querySelector(".code-card");

    if (codeCard) {
        setTimeout(function () {
            codeCard.classList.add("is-visible");
        }, 200);
    }

});


// =========================
// SKILLS ANIMATION
// =========================

window.addEventListener("load", function () {

    const skills = [
        90,
        85,
        85
    ];

    const skillBoxes = document.querySelectorAll(".skill-box");

    skillBoxes.forEach(function (box, index) {

        const progress = box.querySelector(".progress");
        const percent = box.querySelector(".skill-info span");

        const target = skills[index];

        if (!progress || !percent || target === undefined) {
            return;
        }

        let current = 0;

        progress.style.width = "0%";

        const interval = setInterval(function () {

            if (current >= target) {
                clearInterval(interval);
                return;
            }

            current++;

            progress.style.width = current + "%";
            percent.textContent = current + "%";

        }, 20);

    });

});