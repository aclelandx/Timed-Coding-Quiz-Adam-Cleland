let userArray = JSON.parse(localStorage.getItem(`highScores`));
let displayHighScores = document.getElementById(`leaderboard`);
userArray.sort((x, y) => {return x.score < y.score ? 1: -1});

for (var i = 0; i < userArray.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userArray[i].newUser + ` : ` + userArray[i].score));
    displayHighScores.appendChild(li);
}