const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const randomOp = operators[Math.floor(Math.random() * operators.length)];
let answer;
switch (randomOp) {
  case "+":
    answer = num1 + num2;
    break;
  case "-":
    answer = num1 - num2;
    break;
  case "*":
    answer = num1 * num2;
    break;
  case "/":
    answer = (num1 / num2).toFixed(2);
    break;
}
console.log(`Question: ${num1} ${randomOp} ${num2}`);
console.log(`Correct Answer: ${answer}`);
