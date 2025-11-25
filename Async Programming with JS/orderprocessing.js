function submitOrder() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.5;

    setTimeout(() => {
      if (failed) {
        reject("API Failure");
      } else {
        resolve("Order submitted successfully");
      }
    }, 500);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success → ${result}`);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed → ${error}`);
    }
  }

  throw "Order could not be processed";
}

(async () => {
  try {
    await processOrder();
    console.log("Order completed successfully 🚀");
  } catch (finalError) {
    console.error("❌ " + finalError);
  }
})();