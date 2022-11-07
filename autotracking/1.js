//https://www.pzuraq.com/blog/what-is-reactivity

// State 
// Think of variables, properties on an object and values in an array as "Root State"

let var1 = 2;
let var2 = 3;

//Derived state comes from combining root state, for example in a function
//We are declaring the values we want use and declare how they should be used together

const func = () => var1 + var2;

console.log('Derived State', func())

//Imperative approach


let a = 1;
let b = 2;
//Create root state imperatively
let aPlusB = a + b;
console.log(aPlusB)
// update `a`
a = 4;
aPlusB = a + b;
console.log(aPlusB)

// update `b`
b = 7;
aPlusB = a + b;
console.log(aPlusB)
