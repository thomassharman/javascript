//an object groups multiple values together
const product = {
name: 'socks',
price:'2000',
property: 'value',
'product-size': 'extra-large',
rating: {
    stars: 4.5,
    count: 87,
},
fun: function function1 () {
    console.log("You can also store functions inside an object!")
}
}

console.log(product)
console.log(product.name)

//objects make our code more organised. it can group properties and values together and lets us use multiple values together.
console.log(product ['product-size'])
//square brackets can be used to access object properties. Brackets are used to access properties with weird names like a dash

console.log(product.rating.count)
//objects can be nested within another object and can be accessed with multiple dot notations

product.fun()
//functions can be stored in objects because functions are also values and can be called with dot notation the same way you apply it to other parts of an object

//built in objects are objects already built into the language. E.g, console is a object and .log is a method

//JSON is a built in object. It used double quotes only! JSON can be understood universally by other languages so it is preferred when we make objects because it can be understood by multiple computers using different languages. The product object example above uses single quotes so this is NOT a JSON object - it is a javascript object. A JSON object can be used to turn a javascript object into a JSON Object.


console.log(JSON.stringify(product))
//this converts the object into JSON and stringify turns it into a string. This means it can now be sent to another computer or saved locally to the computer!
const jsonStringBacktoJavascriptObject = JSON.stringify(product)
console.log(JSON.parse(jsonStringBacktoJavascriptObject))
//this will turn the JSON stored object back into a Javascript Object

//even though const may be used for objects, porperties can still be changed within the object. For example:

const object1 = {
    name: 'Tom',
    age: 22
}

console.log(object1)
console.log(object2)

const object2 = object1

object1.age = 23
//^^ this will change what is stored in both objects, which can be good for efficiency so that you don't have to change multiple objects. This does not mean that this object is EQUAL to the below object

const object3 = {
    name: 'Tom',
    age: 23
}
console.log(object2===object3) //this will return false despite the fact that object1.age has changed the age within the object. this is because it is just referencing the object.



