let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
console.log("Scores:", scores);
let highest = Math.max(scores);
let lowest = Math.min(scores);
let average = (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(2);
let passedCount = scores.filter(score => score >= 50).length;
console.log(`\nPerformance Summary:\nHighest Score: ${highest}\nLowest Score: ${lowest}\nAverage Score: ${average}\nStudents Passed: ${passedCount}`);
