//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 30;
let countdown;




//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};




//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: "Cascading Style Sheets",
  },
  {
    id: "1",
    question:
      "What is the correct HTML for referring to an external style sheet?",
    options: [
      '&lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;',
      "&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;",
      '&lt;style src="mystyle.css"&gt;',
    ],
    correct: '&lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;',
  },
  {
    id: "2",
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: [
      "In the &lt;head&gt; section",
      "In the &lt;body&gt; section",
      "At the end of the document",
    ],
    correct: "In the &lt;head&gt; section",
  },
  {
    id: "3",
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["&lt;style&gt;", "&lt;script&gt;", "&lt;css&gt;"],
    correct: "&lt;style&gt;",
  },
  {
    id: "4",
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "styles", "font", "class"],
    correct: "style",
  },
  {
    id: "5",
    question: "Which is the correct CSS syntax?",
    options: [
      "body {color: black;}",
      "body:color=black;",
      "{body:color=black;}",
      "{body;color:black;}",
    ],
    correct: "body {color: black;}",
  },
  {
    id: "6",
    question: "How do you insert a comment in a CSS file?",
    options: [
      "/* this is a comment */",
      "// this is a comment",
      "// this is a comment //",
      "' this is a comment",
    ],
    correct: "/* this is a comment */",
  },
  {
    id: "7",
    question: "Which property is used to change the background color?",
    options: ["background-color", "color", "bgcolor"],
    correct: "background-color",
  },
  {
    id: "8",
    question: "How do you add a background color for all &lt;h1&gt; elements?",
    options: [
      "h1 {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
      "all.h1 {background-color:#FFFFFF;}",
    ],
    correct: "h1 {background-color:#FFFFFF;}",
  },
  {
    id: "9",
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "fgcolor", "text-color"],
    correct: "color",
  },
  {
    id: "10",
    question: "Which CSS property controls the text size?",
    options: ["font-size", "font-style", "text-style", "text-size"],
    correct: "font-size",
  },
  {
    id: "11",
    question:
      "What is the correct CSS syntax for making all the &lt;p&gt; elements bold?",
    options: [
      "p {font-weight:bold;}",
      '&lt;p style="font-size:bold;"&gt;',
      "p {text-size:bold;}",
      '&lt;p style="text-size:bold;"&gt;',
    ],
    correct: "p {font-weight:bold;}",
  },
  {
    id: "12",
    question: "How do you display hyperlinks without an underline?",
    options: [
      "a {text-decoration:none;}",
      "a {underline:none;}",
      "a {text-decoration:no-underline;}",
      "a {decoration:no-underline;}",
    ],
    correct: "a {text-decoration:none;}",
  },
  {
    id: "13",
    question:
      "How do you make each word in a text start with a capital letter?",
    options: [
      "text-transform:capitalize",
      "text-style:capitalize",
      "You can't do that with CSS",
      "transform:capitalize",
    ],
    correct: "text-transform:capitalize",
  },
  {
    id: "14",
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-weight"],
    correct: "font-family",
  },
  {
    id: "15",
    question: "How do you make the text bold?",
    options: ["font-weight:bold;", "font:bold;", "style:bold;"],
    correct: "font-weight:bold;",
  },
  {
    id: "16",
    question:
      "How do you display a border like this:\n\nThe top border = 10 pixels\nThe bottom border = 5 pixels\nThe left border = 20 pixels\nThe right border = 1 pixel?",
    options: [
      "border-width:10px 1px 5px 20px;",
      "border-width:10px 20px 5px 1px;",
      "border-width:10px 5px 20px 1px;",
      "border-width:5px 20px 10px 1px;",
    ],
    correct: "border-width:10px 1px 5px 20px;",
  },
  {
    id: "17",
    question: "Which property is used to change the left margin of an element?",
    options: ["margin-left", "indent", "padding-left"],
    correct: "margin-left",
  },
  {
    id: "18",
    question:
      "When using the padding property, are you allowed to use negative values?",
    options: ["No", "Yes"],
    correct: "No",
  },
  {
    id: "19",
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list-style-type: square;",
      "list-type: square;",
      "list: square;",
    ],
    correct: "list-style-type: square;",
  },
];











//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});







nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      // Stop the timer
      clearInterval(countdown);

      // Hide the question container and display the score container
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");

      // User score
      userScore.innerHTML =
        "You got " +
        scoreCount +
        " questions correct out of " +
        questionCount +
        " questions.";
    } else {
      // Display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Questions";
      // Display quiz
      quizDisplay(questionCount);
      count = 30;
      clearInterval(countdown);
      timerDisplay();
    }

    // Calculate percentage
    let answeredQuestions = questionCount;
    let totalQuestions = quizArray.length;
    let percentage = Math.floor((scoreCount / answeredQuestions) * 100);
    // Set default value to 0% if no questions answered
    percentage = isNaN(percentage) ? 0 : percentage;
    document.querySelector(".percentage").innerHTML = percentage + "%";

    // Display appraisal message based on percentage
    let appraisalHeading = document.getElementById("appraise-heading");
    if (percentage <= 50) {
      appraisalHeading.innerHTML = "Failed!";
    } else if (percentage <= 60) {
      appraisalHeading.innerHTML = "Above average!";
    } else if (percentage <= 80) {
      appraisalHeading.innerHTML = "Good job!";
    } else if (percentage <= 99) {
      appraisalHeading.innerHTML = "Excellent!";
    } else {
      appraisalHeading.innerHTML = "Perfect!";
    }
  })
);







//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};




//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};




//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Questions";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}



// Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  // Decode the correct option
  let decodedCorrectOption = decodeEntities(quizArray[questionCount].correct);

  // If user clicked answer matches the decoded correct option
  if (userSolution === decodedCorrectOption) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    // For marking the correct option
    options.forEach((element) => {
      if (element.innerText == decodedCorrectOption) {
        element.classList.add("correct");
      }
    });
  }

  // Clear interval (stop timer)
  clearInterval(countdown);
  // Disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}



// Function to decode HTML entities
function decodeEntities(encodedString) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = encodedString;
  return textarea.value;
}





//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 30;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}




//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});





