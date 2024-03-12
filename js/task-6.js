// Завдання 6

// Напиши скрипт створення й очищення колекції елементів.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input  = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");


createButton.addEventListener("click", createMarkup);
destroyButton.addEventListener("click", destroyBoxes);
let height = 30;
let width = 30;
const step = 10;



function createMarkup() {

  if (input.value  < 0 || input.value > 100) {
    console.log('error');
    return;
  }
  createBoxes(input.value);

}

  
 function createBoxes(amount) {
    for (let i = 1; i <= amount; i++)
    {
       let box = document.createElement("div");
       box.style.height = `${height}px`;
       box.style.width = `${width}px`;
      box.style.backgroundColor = `${getRandomHexColor()}`;
      boxes.append(box);

      height = height+step;
      width = width+step;
   }
   input.value = "";
  }


  function destroyBoxes() {

    boxes.innerHTML = "";

}






