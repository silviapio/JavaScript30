const checkInputs = document.querySelectorAll("input");

console.log(checkInputs);

const firstCheckBoxClicked = "";
const secondCheckBoxClicked = "";

let checkedInputsIds = [];

checkInputs.forEach(checkInput => {
    checkInput.addEventListener("click", (e) => {
        const clickedCheckBox = e.target;
        if (clickedCheckBox.checked) {
            console.log(`checkbox ${clickedCheckBox.dataset.id} clicked`);
            // check if at least one other checkbox was checked
            const lastCheckedId = getLastChecked();
            console.log(`last checked id: ${lastCheckedId}`)
            if (checkedInputsIds) {
                if (e.shiftKey) {
                    console.log(`will select from lastchecked (${lastCheckedId}) to current (${clickedCheckBox.dataset.id})`)
                    selectMultipleCheckBoxes(lastCheckedId, parseInt(clickedCheckBox.dataset.id));
                }
            }
            // check if there is a lower id checkbox
            // 
            checkedInputsIds.push(parseInt(clickedCheckBox.dataset.id));
        } else {
            checkedInputsIds = [...checkedInputsIds].filter(input => input !== parseInt(clickedCheckBox.dataset.id));
        }
        console.log(checkedInputsIds);
    }

    )
})

function getLastChecked() {
    return checkedInputsIds[checkedInputsIds.length-1];
} 


function selectMultipleCheckBoxes(lastChecked, currentChecked) {
    checkInputs.forEach(checkInput => {
        const checkInputId = parseInt(checkInput.dataset.id);
        if (isSelectionDownwards(lastChecked, currentChecked)) {
            if (checkInputId > lastChecked && checkInputId < currentChecked) {
                checkInput.setAttribute("checked", "");
                addCheckedIdToArray(checkInputId);
                console.log(checkInput);
            }
        } else {
            if (checkInputId < lastChecked && checkInputId > currentChecked) {
                checkInput.setAttribute("checked", "");
                addCheckedIdToArray(checkInputId);
                console.log(checkInput);
            }
        }
    })
}

function isSelectionDownwards(lastChecked, currentChecked) {
    return currentChecked > lastChecked;
}

function addCheckedIdToArray(id) {
    checkedInputsIds.push(id);
}


