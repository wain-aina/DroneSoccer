const soccerform = document.getElementById("soccerForm");

const soccerButton = document.getElementById("soccer-btn");

const checkSoccerFields = () => {
    let isEmpty = false;
    const inputs = soccerform.querySelectorAll("input[required]");
    for (const input of inputs) {
        if (input.value.trim() === "") {
            isEmpty = true;
            break;
        }
    }
    soccerButton.disabled = isEmpty;
}

soccerform.addEventListener("keyup", checkSoccerFields);

