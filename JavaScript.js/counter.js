let count = 0;
const display = document.getElementById('display');

function cnt() {  
    display.textContent = count;
}
cnt();

function decrease() {
  count++;
  cnt();
}

function increase() {
  count--;
  cnt();
}

function add() {
  count += 2;
  cnt();
}