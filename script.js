const inputEmail = document.getElementById("email");
const button = document.getElementById("button");
const invalidMassage = document.getElementById("invalid-massage");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const dismissMessageButton = document.getElementById("dismiss-message");
const regexpEmail = /[a-z0-9]+(@)+[a-z0-9]+\.+\w/ig;

button.addEventListener("click", () => {
    validateInput();
});

function validateInput() {
    if (!regexpEmail.test(inputEmail.value) || inputEmail.value === ""){
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
    const confirmMessag = `
        <div class="confirmation-email">
            <div class="icon-success"></div>
            <h1>Thanks for subscription</h1>
            <p>
                A confirmation email has benn sent to <span id="user-email">${inputEmail.value}</span>.
                Please open it and click the button inside to confirm your 
                subscription. 
            </p>
            <button id="dismiss-message" onclick="displayNewslette()">Dismiss message</button>
        </div>
    `; 
    body.innerHTML = confirmMessag; 
} 
                                
function displayNewslette(){
    const confirmMessag = document.querySelector(".confirmation-email");
    confirmMessag.remove(); 
    invalidMassage.style.display = "none";
    body.appendChild(container);
    inputEmail.value = "";
}