const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];
function calculateBonus(employee) {
    try {
        if (!employee.name || !employee.salary || !employee.years) {
            throw new Error("Missing employee data fields.");
        }
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error("Invalid numeric conversion for salary/years.");
        }
        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        console.log(`
Employee Name : ${employee.name}
Salary        : ₹${salary}
Years Worked  : ${years}
Bonus Amount  : ₹${bonus}
        `);
    } catch (error) {
        console.error(` Error for employee "${employee.name || "Unknown"}": ${error.message}`);
    }
}
employees.forEach(emp => calculateBonus(emp));

