const checkInputs = document.querySelectorAll("input");
let lastChecked;

checkInputs.forEach(input => {
    input.addEventListener("click", handleCheckClick)
});

function handleCheckClick(e) {
    const isMultipleSelection = this.checked && e.shiftKey;
    if (isMultipleSelection) {
        checkInputsInBetween(this);
    }
    lastChecked = this;
}

function checkInputsInBetween(currentChecked) {
    let inBetween = false;
    checkInputs.forEach(input => {
        if (input === currentChecked || input === lastChecked) {
            inBetween = !inBetween;
        }
        if (inBetween) {
            input.checked = true;
        }
    })
}