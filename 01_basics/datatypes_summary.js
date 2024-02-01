// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

//javascript is a dynamically typed language

const score = 100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;//undefined

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);


const bigNumber=34567894512564585545n
console.log(typeof bigNumber);

//Reference(Non primitive)

//Array, Objects, Functions

const heros =["shaktiman","naagraj","doga"]

let myObj={
    name:"hitesh",
    age:22,


}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction)