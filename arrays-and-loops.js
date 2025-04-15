let myArray = [10, 20, 30]

console.log(myArray[0])
//returns the first value in the array
console.log(myArray[1])
//returns the second value in the array

myArray[0] = 99
//changes the first value of the array but won't work now because this asks for the value to change after it's already been console logged.

console.log (myArray)
//see now that it has been called again, it is 99.

myArray.push(100)
//adds to the end of the array
console.log(myArray)

myArray.splice(0, 1);
//used to remove values from an array. the first number is the index of the item you want to remove and the next number is the number of items in the array from that position you want to remove
console.log(myArray)

//loops
let i = 1

//a while loop will keep running as long as the (condition) is true
while (i <= 5) {
    console.log(i)
    ++i
    //shorthand to increment i
}

//for loop - this example is just a shorter version of a while loop. It creates a loop, for a variable, a condition and then what it must do until the condition is false.
for (let d = 1; d <= 5; d++) {
    console.log(d)
}

//the ; is a crucial seperator in a for loop.

//this is a non-standard loop
let randomNumber = 0

while (randomNumber < 0.5) {
    randomNumber = Math.random()
}

console.log(randomNumber)

//looping through an array

const todolist = 
['make dinner', 
'wash dishes', 
'walk dog']

// this will start at index 0 and loop as long as the last index is less than or equal to the index 0. 

//it increments the index by 1 each loop
for (let index = 0; index < todolist.length; index++) {
    const value = todolist[index] //accesses todlist index 0, 1 etc.
    console.log (value)
}

const nums = [1,5,3,4]
const doubledArray = []




for (let i = 0; i < nums.length; i++) {
    const num = nums[i] // to individually select something within the array you are looping over
    doubledArray.push(num * 2)
    
}
console.log(doubledArray)


const taskList = ['item0', 'item1']


function append (taskList) {
    for (let taskListindex = taskList.slice(-1); taskListindex > taskList.length; taskListindex--) {
        const taskItem = taskList[taskListindex]
        const taskOnDom = document.createElement('div') //knows it needs to make a div but needs to know what, which is why the following is so important:
        taskOnDom.textContent = taskItem 
        document.body.append(taskOnDom)
 }
}
append (taskList)








