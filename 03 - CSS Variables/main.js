const padding = document.getElementById("padding");
const blur = document.getElementById("blur");
const baseColor = document.getElementById("base-color");
const root = document.querySelector(":root");

window.addEventListener("input", (e) => {
    if (e.target == padding) {
        root.style.setProperty("--padding", `${padding.value}px`);
    }
    if (e.target == blur) {
        root.style.setProperty("--blur", `${blur.value}px`);
    }
    if (e.target == baseColor) {
        root.style.setProperty("--base-color", baseColor.value);
    }
});
