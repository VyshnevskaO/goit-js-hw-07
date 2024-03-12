// Завдання 6

// Напиши скрипт створення й очищення колекції елементів.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const amountInput  = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");


createButton.addEventListener("click", createMarkup);
destroyButton.addEventListener("click", destroyBoxes);

const step = 10;



function createMarkup() {

  if (amountInput.value  < 1 || amountInput.value > 100) {
     alert('Будь ласка, введіть число від 1 до 100.')
    return;
  }
  createBoxes(amountInput.value);

}

  
function createBoxes(amount) {
    destroyBoxes();
    for (let i = 0; i < amount; i++)
    {

      const size = 30 + step * i;
      let box = document.createElement("div");
      box.style.height = `${size}px`;
      box.style.width = `${size}px`;
      box.style.backgroundColor = `${getRandomHexColor()}`;
      boxes.append(box);

   }
   amountInput.value = "";
  }


  function destroyBoxes() {

    boxes.innerHTML = "";

}






