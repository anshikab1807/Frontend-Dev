function getLimitFromUser(defaultLimit = 5) {
  if (typeof prompt === "function") {
    const raw = prompt(`Enter pyramid height (default ${defaultLimit}):`);
    const n = Number(raw);
    return Number.isInteger(n) && n > 0 ? n : defaultLimit;
  }
  if (typeof process !== "undefined" && Array.isArray(process.argv)) {
    const arg = process.argv[2];
    const n = Number(arg);
    return Number.isInteger(n) && n > 0 ? n : defaultLimit;
  }
  return defaultLimit;
}
function pyramidWithLet(limit = 5) {
  console.log("\n Pyramid using let ");
  for (let i = 1; i <= limit; i++) {
    let lineParts = [];
    for (let j = 0; j < i; j++) {
      lineParts.push("*");
    }
    console.log(lineParts.join(" "));
  }
}
function pyramidWithVar(limit = 5) {
  console.log("\n Pyramid using var ");
  for (var i = 1; i <= limit; i++) {
    var lineParts = [];
    for (var j = 0; j < i; j++) {
      lineParts.push("*");
    }
    console.log(lineParts.join(" "));
  }
  try {
    console.log(`(After var-loop) i = ${i}, j = ${j}`);
  } catch (e) {
  }
}
function asyncDemoLet(limit = 5) {
  console.log("\n Async Demo with let (correct per-iteration capture) ");
  for (let i = 1; i <= limit; i++) {
    setTimeout(() => {
      console.log(`let callback sees i = ${i}`);
    }, i * 50);
  }
}
function asyncDemoVar(limit = 5) {
  console.log("\n Async Demo with var (shows variable re-use issue) ");
  for (var i = 1; i <= limit; i++) {
    setTimeout(() => {
      console.log(`var callback sees i = ${i}`);
    }, i * 50);
  }
}

(function main() {
 const limit = getLimitFromUser(5);
 console.log(`\nPyramid height (limit) = ${limit}`);
pyramidWithLet(limit);
  pyramidWithVar(limit);
  asyncDemoLet(limit);
  setTimeout(() => {
    asyncDemoVar(limit);
  }, (limit + 1) * 60);
})();
