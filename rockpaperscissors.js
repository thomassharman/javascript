//this is an object
const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

function reset() {
    score.wins = 0
    score.losses = 0
    score.ties = 0
    alert (`game reset. wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
    )
    let scoreBoard = document.querySelector('.scoreBoard')

scoreBoard.innerHTML = 
`<p> wins: ${score.wins}</p>
 <p> Losses: ${score.losses}</p>
 <p> Ties; ${score.ties}</p>`
    }
//keeping this object out of the scopes makes it a global variable.
//using objects to keep score of the game
function computerMakesMove() {
    let randomNumber = (Math.random())
     //generates a random number between 0 and 1
     let computerMove = " "; //declare outside of the scope so that it can be put into it and called out at the other end.

    if (randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = "rock"
    } 
    //will compare both booleans and return the result 
    else if (randomNumber >= 1/3 && randomNumber < 2 / 3){
        computerMove = "paper"
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = "scissors"
    }
    
    console.log = (computerMove)
    return computerMove
    //return allows this to leave the scope
}

loadGame()

function playGame (playerMove) {
    const computerMove = computerMakesMove()
    let result = " "

if (computerMove === playerMove) {
    result = "we tie"
}

else if (playerMove === "rock") {
if (computerMove === "paper") {
    result = "you lose"}
else if (computerMove === "scissors") {
    result = "I lose"
}
}

else if (playerMove === "scissors") {
    if (computerMove === "paper") {
        result = "I lose"}
    else if (computerMove === "rock") {
        result = "you lose"
    }
}

else if (playerMove === "paper") {
    if (computerMove === "scissors") {
        result = "you lose"}
    else if (computerMove === "rock") {
        result = "I lose"
    }
}

if (result === "I lose") {
    score.wins += 1
}
else if (result === "you lose" ) {
    score.losses += 1
} 
else if (result === "we tie" ) {
    score.ties += 1
}
    

alert (`Computer chose ${computerMove} ${result}. wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`)
// remember that === to avoid the computer converting it.

let scoreBoard = document.querySelector('.scoreBoard')

scoreBoard.innerHTML = 
`<p> wins: ${score.wins}</p>
 <p> Losses: ${score.losses}</p>
 <p> Ties; ${score.ties}</p>`

 saveGame()
}



//using JSON to save game score to the computer locally
function saveGame() {
    localStorage.setItem('game score', JSON.stringify(score))
    //
}

function loadGame() {
    const storedScore = localStorage.getItem('game score');
    //getItem will always receive what it is getting as a string. So, there's no need for the JSON.stringify part of the savegame() function.
    if (storedScore) //checks if a stored score exists and then executes the following:
    {
        Object.assign(score, JSON.parse(storedScore));
        //object.assign works directly with javascript objects and passing the 'score' object means it knows where it has to put the data it has just got and knows what it is that it is restoring. JSON.parse then converts what it just got from storedScore OUT of a string and into the object.
    }
    //this takes a value fot the saved game score and, if there is one, it will turn it back into an object using JSON.parse
}

let isAutoplaying = false
let intervalID; // declaring outside of the function avoids any scope form messing up. It can be inserted into the autoplay() function

function autoplay() {
    if (!isAutoplaying){
       intervalID = setInterval(function(){
            const AutoPlayerMove = computerMakesMove()
            playGame(AutoPlayerMove)
        },1000)
        isAutoplaying = true
    }
    //setInterval returns a number and this number can be used as an ID. this is what is used to stop the interval
    else {
    clearInterval(intervalID)//clearInterval is a built in function
    isAutoplaying = false
    }
}
