// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2">1);
// console.log("02">1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true  reason is that an equality check == and comparisons ><>=<= work differently.Comparisons convert null to a number,treating it as 0.thatswhy (3)null>=0 is true and (1)null >0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//avoid these type of conversions....

//===

console.log("2" === 2);
