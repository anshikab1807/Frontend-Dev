function randomDelay() {
  return Math.floor(Math.random() * 1000) + 1000;
}
function takeOrder() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2; 
    setTimeout(() => {
      failed ? reject("Take order failed") : resolve("Order taken");
    }, randomDelay());
  });
}
function prepare() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2;
    setTimeout(() => {
      failed ? reject("Preparation failed") : resolve("Food prepared");
    }, randomDelay());
  });
}
function pack() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2;
    setTimeout(() => {
      failed ? reject("Packing failed") : resolve("Package ready");
    }, randomDelay());
  });
}
function dispatch() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2;
    setTimeout(() => {
      failed ? reject("Dispatch failed") : resolve("Out for delivery");
    }, randomDelay());
  });
}
function deliver() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2;
    setTimeout(() => {
      failed ? reject("Delivery failed") : resolve("Delivered");
    }, randomDelay());
  });
}
async function runPipeline() {
  console.log("Start Pipeline");

  try {
    const step1 = await takeOrder();
    console.log("Step 1:", step1);

    const step2 = await prepare();
    console.log("Step 2:", step2);

    const step3 = await pack();
    console.log("Step 3:", step3);

    const step4 = await dispatch();
    console.log("Step 4:", step4);

    const step5 = await deliver();
    console.log("Delivery completed!");
  } catch (err) {
    console.log("Pipeline failed!");
    console.error(err);
  }
}
runPipeline();
