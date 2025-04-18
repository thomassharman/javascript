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
        newTaskItemDiv.classList = ('new-task-div')

        const TaskItemDivDeleteBtn = document.createElement('button')
        TaskItemDivDeleteBtn.textContent = "Delete"
        TaskItemDivDeleteBtn.classList = ('delete-btn')

        newTaskItemDiv.textContent = task
        taskItemsContainer.appendChild(newTaskItemDiv)
        newTaskItemDiv.appendChild(TaskItemDivDeleteBtn)
        
        TaskItemDivDeleteBtn.addEventListener("click", function() {
        deleteTask(newTaskItemDiv); // Pass the DOM element "newTaskItemDiv" to deleteTask placeholder when the delete btn is clicked
        // we use function(){deleteTask(newTaskItemDiv)} to tell the computer we are going to execute a funtion on the click and then we just refer to the function we made because it avoids repeating code if we want to use it elsewhere.
      });
    }
    return;
  }
  //this function puts a placeholder (parameter) in () for an argument to be passed into. It is using what is passed into the parameter to refer to it in the function.
  function deleteTask(TaskItemDiv) {
    if (TaskItemDiv && TaskItemDiv.parentNode)//this checks the taskItemDiv and the thing holding the div(the container we made) exists. if it does, it will do the following...
    {
        TaskItemDiv.parentNode.removeChild(TaskItemDiv); //this 
    }
  }


function clearTaskInput() {
 if (taskInput) {
    taskInput.value = null
 }

}