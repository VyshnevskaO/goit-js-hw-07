// Завдання 4

// Напиши скрипт управління формою логіна.


const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (event.target.elements.email.value === "" || event.target.elements.password.value === "") {
        alert('All form fields must be filled in')
    }
    else {

    
        
        const dataInput = {
            Email : event.target.elements.email.value.trim(),
            Password : event.target.elements.password.value.trim(),
        }
        

       
        console.log(dataInput);
        form.reset();
    
    }
       
}
 