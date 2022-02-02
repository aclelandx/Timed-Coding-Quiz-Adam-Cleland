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
let $trueFalseAnswer = document.querySelector('button[data-variant="true-false"]')

// for both multiple choice and true-false questions
let $submitButton = document.getElementById(`submit`);

let questionBeingAsked = ``;

// for the timing interval function

// defining the the popup screen and the popup button so i can target them.
let $popupScreen = document.getElementById(`popup`);
let $popupButton = document.getElementById(`popup-button`);

// Shows the screen before the quiz begins, gives information about the quiz, then it is removed when it is time for the quiz to begin.
function beginExam() {
    $popupScreen.classList.remove(`shown`);
    $popupScreen.classList.add(`closed`);
};

let scoreTracker = 100;

// changes the information that is in the popup screen to be used as the end of exam screen allowing for the user to input their name and save their score to the leader boards. they are then sent to the high scores page.
function endExam() {
    $popupScreen.innerHTML = `<h6> Congrats! You have reached the end of the exam! </h6>
    <p>
    Your final score this time around was ${scoreTracker}.
    <br>
    Please provide your name below to save your score to the records!
    </p>
    <input type="text" id="player-name" placeholder="Your Name">
    <a href="./highscores.html"><button id="save-info-button">Submit!</button></a>`;
}

$popupButton.addEventListener(`click`, endExam);

const q1 = {
    question:`what is 2 + 2`,
    choice1: [`4`, true],
    choice2: [`3`, false],
    choice3: [`16`, false],
    choice4: [`12`, false],
    type: `MC`
}

const q2 = {
    question:`Did Adam Cleland Make this page?`,
    choice1: [`True`, true],
    choice2: [`False`, false],
    type: `TF`
}

const q3 = {
    question:`What is the correct tag to store all the main content in an HTML page?`,
    choice1: [`<main>`, true],
    choice2: [`<div id="wrapper"`, false],
    choice3: [`<body>`, false],
    choice4: [`All of the above`, false],
    type: `MC`
}

const q4 = {
    question:`Is Natural Light the greatest beer brand?`,
    choice1 : [`True`, true],
    choice2 : [`False`, false],
    type: `TF`
}

const questionArray = [q1, q2, q3, q4];

function randomQuestion() {
    let index = Math.floor(Math.random() * questionArray.length);
    questionBeingAsked = questionArray[index];
    return questionBeingAsked;
}

function questionInformationPopulate(x) {
    if(x.type === `MC`) {
        $answerChoices.classList.remove(`true-false`);
        $answerChoices.classList.add(`multiple-choice`)
        $textDisplay.textContent = x.question;
        $optionOne.textContent = x.choice1[0];
        $optionOne.setAttribute(`data-key`, x.choice1[1]);
        $optionTwo.textContent = x.choice2[0];
        $optionTwo.setAttribute(`data-key`, x.choice2[1]);
        $optionThree.textContent = x.choice3[0];
        $optionThree.setAttribute(`data-key`, x.choice3[1]);
        $optionFour.textContent = x.choice4[0];
        $optionFour.setAttribute(`data-key`, x.choice4[1]);
    } else if(x.type === `TF`) {
        $answerChoices.classList.remove(`multiple-choice`);
        $answerChoices.classList.add(`true-false`)
        $textDisplay.textContent = x.question;
        $optionTrue.textContent = x.choice1[0];
        $optionTrue.setAttribute(`data-key`, x.choice1[1]) ;
        $optionFalse.textContent = x.choice2[0];
        $optionFalse.setAttribute(`data-key`, x.choice2[1]) ;
    }
};

let lastButton = ``;

function makeSelection(selectedOption) {
    let target = selectedOption.target;
    if(target == $submitButton && lastButton !==``) {
        return lastButton.classList.remove(`selected`);
    }
    if(lastButton !== ``) {
        lastButton.classList.remove(`selected`);
    }
    lastButton = target;
    // $multipleChoiceAnswer.classList.remove('selected');
    target.classList.toggle(`selected`);
}

function checkAnswer() {
    let answerChoice = document.querySelector(`.selected`);
    console.log(answerChoice);
    if (answerChoice == null) {
        alert(`you need to make a selection to continue`)
        return;
    } else if (answerChoice.dataset[`key`] == `true`) {
        randomQuestion()
        questionInformationPopulate(questionBeingAsked)
        return;
    } else {
        
    }
}




$submitButton.addEventListener(`click`, function(){
    checkAnswer();
    console.log(checkAnswer);
    // randomQuestion()
    // questionInformationPopulate(questionBeingAsked);
    // console.log(questionBeingAsked);
});

$answerChoices.addEventListener(`click`, makeSelection);
// $answerChoices.addEventListener(`click`, makeSelection);

