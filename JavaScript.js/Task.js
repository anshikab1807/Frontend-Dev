// const box = document.getElementById('box');
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');
// const btn4= document.getElementById("btn4");

// btn1.addEventListener('click', () => {
//     box.classList.remove("bg-light","bg-color-1","bg-color-2","bg-color-3");
//     box.classList.add("bg-color-1");
// });
// btn2.addEventListener('click', () => {
//     box.classList.remove("bg-light","bg-color-1","bg-color-2","bg-color-3");
//     box.classList.add("bg-color-2");
// });
// btn3.addEventListener('click', () => {
//     box.classList.remove("bg-light","bg-color-1","bg-color-2","bg-color-3");
//     box.classList.add("bg-color-3");
// });
// btn4.addEventListener('click', () => {
//     box.classList.remove("bg-light","bg-color-1","bg-color-2","bg-color-3");
//     box.classList.add("bg-color-4");
// }); 
const box = document.querySelector('.box');

document.getElementById('redBtn').addEventListener('click', () => {
  box.style.backgroundColor = 'red';
});

document.getElementById('greenBtn').addEventListener('click', () => {
  box.style.backgroundColor = 'green';
});

document.getElementById('blueBtn').addEventListener('click', () => {
  box.style.backgroundColor = 'blue';
});

document.getElementById('yellowBtn').addEventListener('click', () => {
  box.style.backgroundColor = 'yellow';
});