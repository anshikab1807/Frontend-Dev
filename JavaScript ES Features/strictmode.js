console.log(" Without Strict Mode ");
function demoNonStrict(a, a) {
    total = 10; 
    console.log("Non-strict total:", total);

    let obj = { value: 100 };
    console.log("Deleted obj.value?", delete obj.value); // true
}
demoNonStrict(5, 10);
console.log("\n With Strict Mode ");
"use strict";
function demoStrict(a, b) { 
    let total = 10;  
    console.log("Strict total:", total);
    let obj = { value: 200 };
    console.log("Deleted obj.value?", delete obj.value); // true
}

try {
    demoStrict(5, 10);
} catch (err) {
    console.error("Strict Mode Error:", err.message);
}

console.log("\n Correct ES6 Version ");

function demoFixed(x, y) {
    let total = 10;
    console.log("Total:", total);

    let obj = { value: 500 };
    console.log("Deleted obj.value?", delete obj.value); // true
}

demoFixed(5, 10);

