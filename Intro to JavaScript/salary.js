let salary = 30000;
const incrementRate = 8;
const salaryTable = [];
for (let year = 1; year <= 5; year++) {
  salary += (salary * incrementRate) / 100; 
  salaryTable.push({
    Year: year,
    Salary: Math.round(salary)
  });
}
console.table(salaryTable);
