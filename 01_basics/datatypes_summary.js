// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

//javascript is a dynamically typed language

const score = 100 //number
const scoreValue=100.3 //number

const isLoggedIn=false //boolean
const outsideTemp=null //object
let userEmail;//undefined 

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId); //false as Symbol is used for unique things


const bigNumber=34567894512564585545n //bigint
console.log(typeof userEmail);

//Reference(Non primitive)

//Array, Objects, Functions

const heros =["shaktiman","naagraj","doga"] //object

let myObj={
    name:"hitesh",
    age:22,


} //Object

const myFunction=function(){
    console.log("Hello World");
} //function

console.log(typeof myFunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ------------------------------------------------------------------------------------

// Stack(primitive),Heap(Non-primitive)

let myYoutubename="hiteshchaudharydotcom"

let anothername=myYoutubename;
anothername="chaiaurcode";
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo=userOne;

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);