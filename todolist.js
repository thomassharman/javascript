const taskInput = document.querySelector('.taskInput')
const taskItemsContainer  = document.querySelector('.task-items')
const taskList = []

function enterAddtask() {
    if (event.key === 'Enter') {
        addTask()
        clearTaskInput()
    }
}

function addTask() {
    let task = taskInput.value
    
    if (task) {
        taskList.push(task)
        console.log ("Task Item Added:", task)
        console.log("task List:", taskList)
        clearTaskInput()
        appendNewTaskToDom(task)

}
    else {
    alert ("No Task Entered")
  return 
}
}


function appendNewTaskToDom(task) {
       if (taskItemsContainer) {
        const newTaskItemDiv = document.createElement('div')
        newTaskItemDiv.textContent = task
        taskItemsContainer.append(newTaskItemDiv)
       }
       
    }


function clearTaskInput() {
 if (taskInput) {
    taskInput.value = null
 }

}