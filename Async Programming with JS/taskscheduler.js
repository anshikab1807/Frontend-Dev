console.log("Start"); 
setTimeout(() => {
  console.log("setTimeout callback (Macrotask)");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise.then callback (Microtask)");
});
console.log("Synchronous log");
console.log("End"); 
