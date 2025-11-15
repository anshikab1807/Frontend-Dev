const age = 19;
const isCitizen = true;
if (isCitizen && age >= 18) {
  console.log("Eligible for all services.");
} else if (isCitizen && age >= 18 && age <= 20) {
  console.log("Eligible to vote");
} else if (!isCitizen && age >= 18) {
  console.log("criteria met");
} else {
  console.log("Not eligible");
}
