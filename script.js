const inputEmail = document.getElementById("email");
const button = document.getElementById("button");
const invalidMassage = document.getElementById("invalid-massage");
const container = document.querySelector(".container");
const body = document.querySelector("body");


button.addEventListener("click", () => {
    validateInput();
});

function validateInput() {
    if (inputEmail.validity.typeMismatch === true || inputEmail.value === ""){
        inputEmail.setCustomValidity("Valid email required");
        invalidMassage.style.display = "inline";
        inputEmail.style.border = "1px solid red";
    } else {
        inputEmail.setCustomValidity("");
        inputEmail.style.border = "1px solid var(--Grey)";
        container.remove();
        displayConfirmationEmail();
    }
}

function displayConfirmationEmail() {
    const confirmationEmail = `<div class="confirmation-email">
                                        <div class="icon-success"></div>
                                        <h1>Thanks for subscription</h1>
                                        <p>
                                            A confirmation email has benn sent to <span id="user-email">${inputEmail.value}</span>.
                                            Please open it and click the button inside to confirm your 
                                            subscription. 
                                        </p>
                                        <button>Dismiss message</button>
                              f</div>`;
    body.innerHTML = confirmationEmail; 
} 
                                
// hhhh@jjjjj.com