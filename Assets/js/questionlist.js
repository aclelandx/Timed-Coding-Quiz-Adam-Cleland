// defines all the prompts and the answer-key along with them 

const q1 = {
    question: `In this equation "math.floor(math.random() * 100 + 1)" what is the maximum number that we would be able to get`,
    choice1: [`99`, false],
    choice2: [`101`, false],
    choice3: [`100`, true],
    choice4: [`None of the above`, false],
    type: `MC`,
};

const q2 = {
    question: `You can only have up to 10 items inside of an Array`,
    choice1: [`True`, false],
    choice2: [`False`, true],
    type: `TF`,
};

const q3 = {
    question: `What is the semantic tag to store all the main content in an HTML page?`,
    choice1: [`<main>`, true],
    choice2: [`<div id="wrapper"`, false],
    choice3: [`<body>`, false],
    choice4: [`All of the above`, false],
    type: `MC`,
};

const q4 = {
    question: `console.log() allows you to see the information inside of the ()`,
    choice1: [`True`, true],
    choice2: [`False`, false],
    type: `TF`,
};

const q5 = {
    question:`A for loop will run Only when it is attached to an event listener`,
    choice1:[`True`, false],
    choice2:[`False`, true],
    type:`TF`
}

const q6 = {
    question:`Google fonts allows you to link / download their fonts and use them in your code`,
    choice1:[`True`, true],
    choice2:[`False`, false],
    type:`TF`
}

const q7 = {
    question:`CSS stands for Creating Style Syntax`,
    choice1:[`True`, false],
    choice2:[`False`, true] ,
    type:`TF`
}

const q8 = {
    question:`HTML stands for Hyper Text Markup Language`,
    choice1:[`True`, true],
    choice2:[`False`, false] ,
    type:`TF`
}

const q9 = {
    question:`In CSS what would you do to make a container; a flexbox?`,
    choice1:[`flex:flexbox`, false],
    choice2:[`position:flexbox`, false] ,
    choice3:[`display:flexbox`, true ] ,
    choice4:[`data-type:flexbox`, false] ,
    type:`MC`
}

const q10 = {
    question:`What tag do you use to link a JS file to an HTML file?`,
    choice1:[`<link>`, false],
    choice2:[`<script>`, true] ,
    choice3:[`<figure>`, false] ,
    choice4:[`<meta>`, false] ,
    type:`MC`
}

const q11 = {
    question:`Your JS File must always be linked inside of your <head> tag`,
    choice1:[`True`, false],
    choice2:[`false`, true] ,
    type:`TF`
}

const q12 = {
    question:`Where do you link your CSS file`,
    choice1:[`<head>`, true],
    choice2:[`<body>`, false] ,
    choice3:[`<div>`, false] ,
    choice4:[`<section>`, false] ,
    type:`MC`
}

const q13 = {
    question:`Which of these is NOT a js data type.`,
    choice1:[`string`, false],
    choice2:[`number`, false] ,
    choice3:[`boolean`, false] ,
    choice4:[`They are all data Types`, ] ,
    type:`MC`
}

const q14 = {
    question:`A body of text is known as what kind of data type`,
    choice1:[`number`, false],
    choice2:[`variable`, false] ,
    choice3:[`boolean`, false] ,
    choice4:[`String`, true] ,
    type:`MC`
}

const q15 = {
    question:`Apple was the creators of JS`,
    choice1:[`True`, true],
    choice2:[`False`, false] ,
    type:`TF`
}

const q16 = {
    question:`An href tag is used along with an anchor tag to make a link`,
    choice1:[`True`, true],
    choice2:[`False`, false] ,
    type:`TF`
}

const q17 = {
    question:`Only knowing how to code HTML classifies you as a full stack developer`,
    choice1:[`True`, false],
    choice2:[`False`, true] ,
    type:`TF`
}

const q18 = {
    question:`An SVG file is a Rasterized image made up of pixels.`,
    choice1:[`True`, false],
    choice2:[`False`, true] ,
    type:`TF`
}

const q19 = {
    question:`Using console.log is a great tool when looking for bugs in your code.`,
    choice1:[`True`, true],
    choice2:[`False`, false] ,
    type:`TF`
}

const q20 = {
    question:`You are only allowed to have one JS file per html page`,
    choice1:[`True`, false],
    choice2:[`False`, true] ,
    type:`TF`
}


// puts all the questions into an array so that they can be called upon via the quiz logic js sheet 
const questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];

