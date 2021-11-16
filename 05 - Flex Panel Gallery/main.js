const panels = document.querySelectorAll(".panel");

const toggleOpen = (panel) => {
    panel.classList.toggle("open");
}

const toggleActive = (panel) => {
    console.log("active");
    panel.classList.toggle("active");
}

panels.forEach(panel => panel.addEventListener("click", (e) => toggleOpen(e.target.closest(".panel"))));

panels.forEach(panel => panel.addEventListener("transitionend", (e) => {
    if (e.propertyName.includes("flex")) {
        toggleActive(e.target.closest(".panel"));
    };
}));

