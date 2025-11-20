

// global scope :  function ke bhr bhi access kr pa rhe ho aur function ke andar bhi
var globalVar = "I am a global variable";

function checkScope() {
    console.log(globalVar); // Accessing global variable inside function
}
checkScope();
console.log(globalVar); // Accessing global variable outside function


// local scope :  function ke andar hi access kr pa rhe ho
function localScope() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessing local variable inside function
}   
localScope();
// console.log(localVar); // Error: localVar is not defined



// function scope
function functionScope() {
    let funcVar = "I am a function-scoped variable";
    console.log(funcVar); // Accessing function-scoped variable inside function
}
functionScope();
// console.log(funcVar); // Error: funcVar is not defined

// block scope
if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessing block-scoped variable inside block
}
// console.log(blockVar); // Error: blockVar is not defined


// lexical scope
function outerFunction() {
    let outerVar = "I am from outer function";
    function innerFunction() {

        console.log(outerVar); // Accessing outer function's variable inside inner function
    }
    innerFunction();
}
outerFunction();