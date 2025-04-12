//booleans
//booleans use true or false values

console.log(3 > 5)
//evaluates the argument and outputs true or false.

//if statements evaluate what is passed into the () to run.

if (true) {
    console.log("hello")
} else {
    console.log("bye")
}

//evaluating age for driving with "if", "else if" and "else"
let age = 18

if (age >= 17) {
    console.log("you can drive")
}
else if (age >= 14) {
console.log ("Not long until you can drive")
}
else {
    console.log ("you cannot drive")
}

//logical operators
console.log (true && true)
// || means OR
// ! means NOT

//truthy and falsy values
// falsy values include 0, '', NaN, undefined or null

let itemsInCart = 1
//because this is 1, it is a truthy value. if it was 0 it would be falsy and it would not run the following:

if (itemsInCart) {
    console.log("there is item(s) in the cart")
}

//ternary operators 
//can be used as shortcts for if and else if.

const currency = 'GBP' || 'USD'
console.log (currency)

// because there is a value other than a falsy value in currency, it will log GBP. Say this was 0 or null or undefined, it would use || (OR) to select USD as default.


