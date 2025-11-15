let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
  console.log("Secure");
} else {
  console.log("Unsafe");
}
isDoorLocked = false;
console.log("Door Unlocked Test:");
console.log(isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");
