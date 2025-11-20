//Primitive datatype 
//object datatype
//immutable datatype

let a="hello";//1st way of string declaration
let b="hello";//2nd way of string declaration
let c=`hello`;//3rd way of string declaration


let g=new String("hello");//4th way of string declaration

let d=a+ " "+b; //hellohello   first way of concatenation
let e=a.concat(b); //second way of concatenation
let f=`hello ${b}`; //third way of Interpolation

console.log(d);
console.log(e);
console.log(f);



//Inbuiltmethods
//length
b.length;//5

//toUpperCase
b.toUpperCase();//HELLO 
"Hello".toUpperCase();//HELLO

//toLowerCase
b.toLowerCase();//hello
"HELLO".toLowerCase();//hello

//trim
b.trim();//"hello"

//includes
"Hello".includes("He");//true

//lastIndexOf
"Hello".lastIndexOf("l");//3

//replace
"Hello".replace("H","J");//Jello

//split
"Hello World".split(" ");//["Hello","World"]

//charAt
"Hello".charAt(1);//e

//slice
"Hello".slice(1,4);//ell

//substring
"Hello".substring(1,4);//ell

// "hello".sub();
// @deprecated