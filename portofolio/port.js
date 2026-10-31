const codeCard = document.querySelector(".code-card");

window.addEventListener("load", () => {
    codeCard.style.opacity = "0";
    codeCard.style.transform = "translateY(20px)";

    setTimeout(() => {
        codeCard.style.transition = "all 0.8s ease";
        codeCard.style.opacity = "1";
        codeCard.style.transform = "translateY(0)";
    }, 200);
});



window.addEventListener("load", function () {
    const skills = [
        { id: "html", target: 90 },
        { id: "css", target: 75 },
        { id: "js", target: 50 },
    ];

    skills.forEach(function (skill) {
        const progress = document.getElementById(skill.id + "-progress");
        const percent = document.getElementById(skill.id + "-percent");

        let current = 0;

        const interval = setInterval(function () {
            if (current >= skill.target) {
                clearInterval(interval);
                return;
            }

            current++;
            progress.style.width = current + "%";
            percent.textContent = current + "%";
        }, 25);
    });
});
window.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});