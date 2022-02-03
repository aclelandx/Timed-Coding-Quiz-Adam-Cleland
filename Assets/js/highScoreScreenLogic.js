
// grabs the information from the local storage being the highscores and displays them on the screen 
let userArray = JSON.parse(localStorage.getItem(`highScores`));
let displayHighScores = document.getElementById(`leaderboard`);
let clearHS = document.getElementById(`clear-hs`);
userArray.sort((x, y) => {return x.score < y.score ? 1: -1});

// loop for creating the li's
for (var i = 0; i < userArray.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userArray[i].newUser + ` : ` + userArray[i].score));
    displayHighScores.appendChild(li);
}

// Removes the highScores from the local storage and forces a refresh so the user can see the changes automatically
clearHS.addEventListener(`click`, function(){
    localStorage.removeItem(`highScores`);
    document.location.reload(true);
});