// Завдання 2

// Напиши скрипт для створення галереї зображень на основі масиву даних. 

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const list = document.querySelector(".gallery");
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.gap = "25px";

const markup = images
  .map((image) => `<img src="${image.url}" alt="${image.alt}" width="612" height="375" />`)
  .join("");

// Adding all the markup in one operation
list.innerHTML = markup;

       
