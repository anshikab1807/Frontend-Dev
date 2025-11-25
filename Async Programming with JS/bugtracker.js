function getBugs() {
  return new Promise((resolve, reject) => {
    const apiFailed = Math.random() < 0.4; 
    setTimeout(() => {
      if (apiFailed) {
        reject(" API Error: Failed to fetch bugs");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}
console.log("Fetching bugs...");
getBugs()
  .then(bugs => {
    console.log(" Bug List:");
    console.table(bugs); 
  })
  .catch(error => {
    console.error(error);
  });
