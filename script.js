const inputValue = document.getElementById("email");
const button = document.getElementById("button");
const invalidMassage = document.getElementById("invalid-massage"); 

button.addEventListener("click", () => {
    console.log(inputValue.value);
});