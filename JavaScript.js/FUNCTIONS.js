//Arrow Function
const  add=(a,b)=>a+b;

//Anonymous Function

const multiply = function(a, b) {
    return a * b;
};

//IIFE
(function(){
    console.log("IIFE executed");
})();

//Higher Order Function
function higherOrderFunction(fn, value) {
    return fn(value);
}
//CALL BACK FUNCTION
function callbackFunction(value) {
    return value * 2;
}
