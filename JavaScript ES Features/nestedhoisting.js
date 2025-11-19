function outer() {
    debugger; 
    console.log(count); 
    var count = 5;
    const inner = () => {
        debugger;
        console.log(count); 
        var count = 10;
    };
    inner();
}
outer();

function fixedOuter() {
    debugger;
    let count = 5;
    console.log("Outer count =", count);
    const inner = () => {
        console.log("Inner uses outer count =", count); 
    };
    inner();
}
console.log("\n Correct ES6 Version (Closure Works) ");
fixedOuter();

