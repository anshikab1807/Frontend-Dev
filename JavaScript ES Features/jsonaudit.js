const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];  
const invalidLogs = [];
const minors = []; 

console.log(" JSON Audit Starting \n");

rawData.forEach((entry, index) => {
  const lineNumber = index + 1;
  try {
    let parsed;

    parsed = JSON.parse(entry);

    if (!parsed.hasOwnProperty("user") || !parsed.hasOwnProperty("age")) {
      const missing = [];
      if (!parsed.hasOwnProperty("user")) missing.push("user");
      if (!parsed.hasOwnProperty("age")) missing.push("age");

      const reason = `Missing key(s): ${missing.join(", ")}`;
      invalidLogs.push({ line: lineNumber, raw: entry, reason });
      console.warn(`Line ${lineNumber}  ${reason} — ${entry}`);
      return; 
    }
    const ageNum = Number(parsed.age);

    if (Number.isNaN(ageNum)) {
      const reason = `Invalid age value (not a number): ${parsed.age}`;
      invalidLogs.push({ line: lineNumber, raw: entry, reason });
      console.warn(`Line ${lineNumber} ${reason} — ${entry}`);
      return;
    }
    const cleaned = {
      user: String(parsed.user),
      age: ageNum,
      ...Object.keys(parsed)
        .filter(k => k !== "user" && k !== "age")
        .reduce((acc, k) => (acc[k] = parsed[k], acc), {})
    };

    cleanData.push(cleaned);

    if (cleaned.age < 18) {
      minors.push(cleaned);
    }

    console.log(`Line ${lineNumber}  Parsed & cleaned:`, cleaned);

  } catch (err) {
    const reason = `Invalid JSON: ${err.message}`;
    invalidLogs.push({ line: lineNumber, raw: entry, reason });
    console.error(`Line ${lineNumber}  ${reason} — ${entry}`);
  }
});

console.log("\n  AUDIT SUMMARY ");
console.log(`Total entries processed : ${rawData.length}`);
console.log(`Valid entries (clean)   : ${cleanData.length}`);
console.log(`Invalid entries         : ${invalidLogs.length}`);
console.log(`Minors (age < 18)      : ${minors.length}`);

if (cleanData.length) {
  console.log("\n Clean Data ");
  console.table(cleanData);
}

if (minors.length) {
  console.log("\n Minors ");
  console.table(minors);
}

if (invalidLogs.length) {
  console.log("\n Invalid Logs (with line numbers) ");
  invalidLogs.forEach(log => {
    console.log(`Line ${log.line} : ${log.reason} -> ${log.raw}`);
  });
}

console.log("\n JSON Audit Complete ");

