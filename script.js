const inputEmail = document.getElementById("email");
const button = document.getElementById("button");
const invalidMassage = document.getElementById("invalid-massage");
const container = document.querySelector(".container"); 

button.addEventListener("click", () => {
    validateInput();
});

function validateInput() {
    if (inputEmail.validity.typeMismatch === true || inputEmail.value === ""){
        inputEmail.setCustomValidity("Valid email required");
        invalidMassage.style.display = "inline";
        inputEmail.style.border = "1px solid red";
    } else {
        inputEmail.style.border = "1px solid var(--Grey)";
        container.remove();
    }
}