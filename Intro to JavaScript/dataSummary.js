const name = "Anshika";
const age = 21;
const isStudent = true;
const hobbies = ["coding", "reading"];
const details = { city: "Agra", course: "BTech" };
const emptyValue = null;
let unassigned;
console.table({
  name: { value: name, type: typeof name },
  age: { value: age, type: typeof age },
  isStudent: { value: isStudent, type: typeof isStudent },
  hobbies: { value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  details: { value: details, type: typeof details },
  emptyValue: { value: emptyValue, type: typeof emptyValue },
  unassigned: { value: unassigned, type: typeof unassigned }
});
