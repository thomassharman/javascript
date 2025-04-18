const advancedFunction = function () {
    console.log('I am an advanced function')
}

advancedFunction()
//functions can be stored as values. Remember that values can be saved in objects.

const object1 = {
    num: 2,
    fun: function greeting() {
        console.log('hello');
    }
};

object1.fun()
//this will run the funciton in the object

function display(param) {
    console.log(param)
}

display (2) //this passes 2 into the parameter (param) of the display() function

function run (param) {
param();
}

run (function(){
    console.log('hello again')
})

//okay so this one is a little bit mad. It uses the parameter to call on itself whatever is passed into it. The function is stored in 'run' as an argument when it is called and then passed into the parameter. It is passing a function into another function, also known as a 'callback function'


//setTimeout is is a built-in function and we are passing another function into it
setTimeout(
    function () 
    {console.log('timeout')},3000 //this is the second parameter for setTimeout, which is how long it should wait before calling the function (in miliseconds)
); 

console.log('next line')

setInterval(function(){
    console.log('interval')
}, 3000) //this will run every three seconds. 


//another way of looping through an array

['make dinner', 'wash dishes','watch youtube'].forEach(function(value, index){
    if ( value === 'wash dishes') {
        return
        //this will return from the rest of the function and not apply the rest of the function if teh valye is equal.
    }
//for each value of the array, it will do the following:
console.log(index)
console.log(value)
});

//this is the preferred way of looping through an array