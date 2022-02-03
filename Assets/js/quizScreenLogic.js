// article with the with the answer choices in it
let $answerChoices = document.getElementById(`answer-choices`);

// defining where the question will be displayed on the webpage
let $textDisplay = document.getElementById(`displayed-question`);

// for multiple choice questions.
let $optionOne = document.getElementById(`selection-1`);
let $optionTwo = document.getElementById(`selection-2`);
let $optionThree = document.getElementById(`selection-3`);
let $optionFour = document.getElementById(`selection-4`);
let $multipleChoiceAnswer = document.querySelector(`button[data-variant="multiple-choice"]`);

// for true or false questions
let $optionTrue = document.getElementById(`selection-true`);
let $optionFalse = document.getElementById(`selection-false`);
let $trueFalseAnswer = document.querySelector('button[data-variant="true-false"]');

// for both multiple choice and true-false questions
let $submitButton = document.getElementById(`submit`);
let questionBeingAsked = ``;

// defines the information to be displayed on the screen
let displayPoints = document.querySelector(`[data-tracker="score-value"]`);
let displayTimeRemaining = document.querySelector(`[data-tracker="time-value"]`);

// defining the the popup screen and the popup button so i can target them.
let $popupScreen = document.getElementById(`popup`);
let $popupButton = document.getElementById(`popup-button`);

let highScores = [];
// Shows the screen before the quiz begins, gives information about the quiz, then it is removed when it is time for the quiz to begin.
function beginExam() {
    $popupScreen.classList.remove(`shown`);
    $popupScreen.classList.add(`closed`);
};
// changes the information that is in the popup screen to be used as the end of exam screen allowing for the user to input their name and save their score to the leader boards. they are then sent to the high scores page.
function endExam() {
    $popupScreen.classList.remove(`closed`);
    $popupScreen.classList.add(`shown`);
    $popupScreen.innerHTML = `<h6> Congrats! You have reached the end of the exam! </h6>
    <p>
    Your final score this time around was ${scoreTracker}.
    <br>
    Please provide your name below to save your score to the records!
    </p>
    <input type="text" id="player-name" placeholder="Your Name">
    <a href="highscores.html"><button id="save-info-button">Submit!</button></a>`;
    let saveInfoButton = document.getElementById(`save-info-button`);
    console.log(saveInfoButton);
    saveInfoButton.addEventListener(`click`, function(){
        let leaderBoard = JSON.parse(localStorage.getItem(`highScores`));
        let playerName = document.getElementById(`player-name`).value;
        let newScore = {score: scoreTracker, newUser: playerName};
        if(leaderBoard == null) {
            leaderBoard = [];
        } 
        leaderBoard.push(newScore);
        let leaderBoardString = JSON.stringify(leaderBoard);
        localStorage.setItem(`highScores`, leaderBoardString);
    });
}

// chooses one of the index's of the array at random with 0 being inclusive
function randomQuestion() {
    let index = Math.floor(Math.random() * questionArray.length);
        questionBeingAsked = questionArray[index];
        return questionBeingAsked;
}
// fills out the information chosen by the random question output 
function questionInformationPopulate(x) {
  if (x.type === `MC`) {
    $answerChoices.classList.remove(`true-false`);
    $answerChoices.classList.add(`multiple-choice`);
    $textDisplay.textContent = x.question;
    $optionOne.textContent = x.choice1[0];
    $optionOne.setAttribute(`data-key`, x.choice1[1]);
    $optionTwo.textContent = x.choice2[0];
    $optionTwo.setAttribute(`data-key`, x.choice2[1]);
    $optionThree.textContent = x.choice3[0];
    $optionThree.setAttribute(`data-key`, x.choice3[1]);
    $optionFour.textContent = x.choice4[0];
    $optionFour.setAttribute(`data-key`, x.choice4[1]);
  } else if (x.type === `TF`) {
    $answerChoices.classList.remove(`multiple-choice`);
    $answerChoices.classList.add(`true-false`);
    $textDisplay.textContent = x.question;
    $optionTrue.textContent = x.choice1[0];
    $optionTrue.setAttribute(`data-key`, x.choice1[1]);
    $optionFalse.textContent = x.choice2[0];
    $optionFalse.setAttribute(`data-key`, x.choice2[1]);
  }
}
let lastButton = ``;
// sets the selected style for the choices
function makeSelection(selectedOption) {
  let target = selectedOption.target;
  if (target == $submitButton && lastButton !== ``) {
    return lastButton.classList.remove(`selected`);
  }
  if (lastButton !== ``) {
    lastButton.classList.remove(`selected`);
  }
  lastButton = target;
  target.classList.toggle(`selected`);
}


// defaults the screen back to its original css after .2 seconds
function originalColor() {
    setTimeout(() => {
        $textDisplay.style.backgroundColor = `rgb(0, 0, 0, .1)`;
    }, 200);
}
// flashes the screen green if answer came back as true 
function answerColorCorrect() {
    $textDisplay.style.backgroundColor = `green`;
    originalColor();
}
// flashes the screen red if answer cam back as false
function answerColorIncorrect() {
    $textDisplay.style.backgroundColor = `red`;
    originalColor();
}

let scoreTracker = 0;
// checks the answer in which you have chosen 
function checkAnswer() {
    let answerChoice = document.querySelector(`.selected`);
    if (answerChoice == null) {
        alert(`you need to make a selection to continue`);
        return;
    } else if (answerChoice.dataset[`key`] == `true`) { 
        displayPoints.textContent = scoreTracker = scoreTracker + 10;
        randomQuestion();
        questionInformationPopulate(questionBeingAsked);
        answerColorCorrect();
    } else if (answerChoice.dataset[`key`] == `false`) {
        timeRemaining -= 10;
        randomQuestion();
        questionInformationPopulate(questionBeingAsked);
        answerColorIncorrect();
    };
};

let timeRemaining = 120;
// uses timeRemaining variable as the time allotted for the quiz then removes one every second
function timerForQuiz() {
    countdown = setInterval(() => {
    if(timeRemaining > 0) {
        timeRemaining--;
        displayTimeRemaining.textContent = timeRemaining;
    } else {
        clearInterval(countdown);
        endExam()
        return;
    }}, 1000);
};
// starts the quiz
$popupButton.addEventListener(`click`, function () {
    timerForQuiz();
    beginExam();
    randomQuestion();
    questionInformationPopulate(questionBeingAsked);
});
// checks your answer on submit
$submitButton.addEventListener(`click`, function () {
    checkAnswer();
    randomQuestion();
    questionInformationPopulate(questionBeingAsked);
});
// changes the way that the selected option looks on the screen
$answerChoices.addEventListener(`click`, makeSelection);
