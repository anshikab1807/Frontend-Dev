const expenses = [5000, 1200, 8000, 2000, 1500]; 
const total = expenses.reduce((sum, x) => sum + x, 0);
const average = (total / expenses.length).toFixed(2);
let finalAmount = total;
finalAmount += finalAmount * 0.10;
console.log("Total:", total);
console.log("Average:", average);
console.log("Final Amount After Tax:", finalAmount.toFixed(2));
