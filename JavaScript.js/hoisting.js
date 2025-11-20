//hoisting 

//it is the behaivour of javascript where it moves the declaration of variables functions and classes
//  to the top of their scope before execution during compilation phase



//primary phase 
//variables and function declaration 



//execution phase
//

//types of hoisting
//variable function class Hoisting
add();//20
function add (){
    console.log(10+10)  //fully hoisting
}



d() //Type error
d(); //d=undefined
var d=function sub() {
    console.log(10-10)
}


   d() //TReferenceError
   d(); //d=undefined
   const d=function sub(){ //let const TDZ
    console.log(10-10)
   }
