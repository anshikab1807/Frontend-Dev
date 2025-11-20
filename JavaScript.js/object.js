//one way
const car=new Object();
car.brand="Toyota";
car.model="Corolla";
car.price=7000000;

//constructor functuion way
function bike(name,price)
{
    this.name=name;
    this.price=price;
    this.greet=function(){
        return `Hello, I am a ${this.name} bike priced at ${this.price}`;
    }
}
const bike1=new bike("KIA-SELTO",1000000);
console.log(bike1.greet());

//using create method
const child={
  greet()
  {
   console.log("hii")
  }
}
const child1=Object.create(child);
child1.name="child1";


//using JSON
const person='{"name":"Sahil","Age":22}'
const jsonObj=JSON.parse(person); //convert JSON object to String
console.log(jsonObj.name); //Sahil
console.log(jsonObj.Age); //22
const newJson=JSON.stringify(jsonObj); //convert String to JSON object
console.log(newJson); //{"name":"Sahil","Age":22}