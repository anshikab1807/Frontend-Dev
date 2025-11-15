let count = 0;
function increment() {
  function update() {
    count++;
    console.log("Incremented Count:", count);
  }
  update();
}
function decrement() {
  function update() {
    count--;
    console.log("Decremented Count:", count);
  }
  update();
}
increment();
increment();
decrement();
increment();
