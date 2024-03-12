// Завдання 3

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. 
// Обов’язково очищай значення в інпуті по краях від пробілів.Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
   
    const trimmedValue = event.target.value.trim();
    textOutput.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
    
});