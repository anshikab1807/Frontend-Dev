console.log(a); // Hoisted but gives undefined (declared later)
var a = 10; // Declaration and initialization






// function demoVar() {
// var b = 20; // Function-scoped
// var b = 30; // Redeclared in the same scope
// b = 40; // Reassigned
// console.log("Inside function:", b);
// }
// demoVar();
// console.log("Outside function:", a); // Accessible here
// // console.log(b); Error: b is not defined (function-scoped)