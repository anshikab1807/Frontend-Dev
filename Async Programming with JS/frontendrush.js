function design(cb) {
  setTimeout(() => {
    console.log(" Designing UI...");
    cb();
  }, 1000);
}
function build(cb) {
  setTimeout(() => {
    console.log(" Building components...");
    cb();
  }, 1000);
}
function test(cb) {
  setTimeout(() => {
    console.log(" Running tests...");
    cb();
  }, 1000);
}
function deploy(cb) {
  setTimeout(() => {
    console.log(" Deploying application...");
    cb();
  }, 1000);
}

function celebrate(cb) {
  setTimeout(() => {
    console.log(" Celebrate successful release!");
    cb();
  }, 1000);
}
design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("✔ Pipeline finished (Callback Hell)");
        });
      });
    });
  });
});
function waitLog(message) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000)
  );
}
async function runPipeline() {
  await waitLog(" Designing UI...");
  await waitLog(" Building components...");
  await waitLog(" Running tests...");
  await waitLog(" Deploying application...");
  await waitLog(" Celebrate successful release!");
 console.log("✔ Pipeline finished (Async/Await)");
}
runPipeline();
