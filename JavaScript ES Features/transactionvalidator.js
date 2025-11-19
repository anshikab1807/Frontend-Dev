class NullEntryError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullEntryError";
    }
}
class MissingFieldError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingFieldError";
    }
}
class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

transactions.forEach((txn, index) => {
    try {
        debugger;

        if (txn === null) {
            throw new NullEntryError(`Transaction at index ${index} is null`);
        }

        if (!txn.id || txn.amount === undefined) {
            throw new MissingFieldError(`Missing id or amount at index ${index}`);
        }

        if (txn.amount < 0) {
            throw new NegativeAmountError(`Negative amount detected for ID ${txn.id}`);
        }
        valid.push(txn);
        console.log(` Valid Transaction:`, txn);

    } catch (error) {
        invalid.push({
            index,
            errorType: error.name,
            message: error.message
        });
        console.error(` Error [${error.name}] → ${error.message}`);
    }
});
console.log("\n ");
console.log("        FINAL REPORT");
console.log(" \n");

console.log(" Valid Transactions:", valid);
console.log(" Invalid Transactions:", invalid);

console.log("\nSummary:");
console.log(`Total Valid:   ${valid.length}`);
console.log(`Total Invalid: ${invalid.length}`);

