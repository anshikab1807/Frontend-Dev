//Variable hoisting 
console.log(f)
let f=5;//reference error same with const


//class Hoisting
const s=new Student("Alice",34); //Reference error
s.show(); //TDZ

class Student{
    constructor(name,age){
        this.age=age
        this.name=name
    }
    show(){
        console.log(`Name:${this.name},Age :${this.age}`)
    }
}