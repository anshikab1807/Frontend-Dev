console.log(" FIXED VERSION ");
console.log(score); 
announce();     

var score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}
function startGame() {
    console.log(status);
}
startGame();
console.log(" ARROW FUNCTION VERSION ");
var score2 = 100;
const announce2 = () => {
    console.log("Arrow: Game started");
};
let status2 = "ready";
const startGame2 = () => {
    console.log(status2);
};
announce2();
startGame2();

