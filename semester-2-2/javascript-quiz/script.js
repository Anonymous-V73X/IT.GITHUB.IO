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
    id: "1",
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
      "&lt;script&gt;",
      "&lt;scripting&gt;",
      "&lt;js&gt;",
      "&lt;javascript&gt;",
    ],
    correct: "&lt;script&gt;",
  },
  {
    id: "2",
    question:
      'What is the correct JavaScript syntax to change the content of the HTML element below?\n\n&lt;p id="demo"&gt;This is a demonstration.&lt;/p&gt;',
    options: [
      'document.getElementById("demo").innerHTML = "Hello World!";',
      'document.getElementByName("p").innerHTML = "Hello World!";',
      'document.getElement("p").innerHTML = "Hello World!";',
      '#demo.innerHTML = "Hello World!";',
    ],
    correct: 'document.getElementById("demo").innerHTML = "Hello World!";',
  },
  {
    id: "3",
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
      "The &lt;head&gt; section",
      "The &lt;body&gt; section",
    ],
    correct:
      "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
  },
  {
    id: "4",
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    options: [
      '&lt;script src="xxx.js"&gt;',
      '&lt;script href="xxx.js"&gt;',
      '&lt;script name="xxx.js"&gt;',
    ],
    correct: '&lt;script src="xxx.js"&gt;',
  },
  {
    id: "5",
    question:
      "The external JavaScript file must contain the &lt;script&gt; tag.",
    options: ["False", "True"],
    correct: "False",
  },
  {
    id: "6",
    question: 'How do you write "Hello World" in an alert box?',
    options: [
      'alert("Hello World!");',
      'alertBox("Hello World!");',
      'msg("Hello World!");',
      'msgBox("Hello World!");',
    ],
    correct: 'alert("Hello World!");',
  },
  {
    id: "7",
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()",
    ],
    correct: "function myFunction()",
  },
  {
    id: "8",
    question: 'How do you call a function named "myFunction"?',
    options: [
      "myFunction()",
      "call function myFunction()",
      "call myFunction()",
    ],
    correct: "myFunction()",
  },
  {
    id: "9",
    question: "How to write an IF statement in JavaScript?",
    options: ["if (i == 5)", "if i = 5", "if i == 5 then", "if i = 5 then"],
    correct: "if (i == 5)",
  },
  {
    id: "10",
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    options: ["if (i != 5)", "if (i <> 5)", "if i <> 5", "if i =! 5 then"],
    correct: "if (i != 5)",
  },
  {
    id: "11",
    question: "How does a WHILE loop start?",
    options: [
      "while (i &lt;= 10)",
      "while i = 1 to 10",
      "while (i &lt;= 10; i++)",
    ],
    correct: "while (i &lt;= 10)",
  },
  {
    id: "12",
    question: "How does a FOR loop start?",
    options: [
      "for (i = 0; i &lt;= 5; i++)",
      "for (i = 0; i &lt;= 5)",
      "for i = 1 to 5",
      "for (i &lt;= 5; i++)",
    ],
    correct: "for (i = 0; i &lt;= 5; i++)",
  },
  {
    id: "13",
    question: "How can you add a comment in JavaScript?",
    options: [
      "//This is a comment",
      "'This is a comment",
      "&lt;!--This is a comment--&gt;",
    ],
    correct: "//This is a comment",
  },
  {
    id: "14",
    question: "How to insert a comment that has more than one line?",
    options: [
      "/*This comment has more than one line*/",
      "//This comment has more than one line//",
      "&lt;!--This comment has more than one line--&gt;",
    ],
    correct: "/*This comment has more than one line*/",
  },
  {
    id: "15",
    question: "What is the correct way to write a JavaScript array?",
    options: [
      'var colors = ["red", "green", "blue"]',
      'var colors = "red", "green", "blue"',
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
    ],
    correct: 'var colors = ["red", "green", "blue"]',
  },
  {
    id: "16",
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "round(7.25)"],
    correct: "Math.round(7.25)",
  },
  {
    id: "17",
    question: "How do you find the number with the highest value of x and y?",
    options: ["Math.ceil(x, y)", "ceil(x, y)", "top(x, y)", "Math.max(x, y)"],
    correct: "Math.max(x, y)",
  },
  {
    id: "18",
    question:
      'What is the correct JavaScript syntax for opening a new window called "w2" ?',
    options: [
      'w2 = window.open("http://www.w3schools.com");',
      'w2 = window.new("http://www.w3schools.com");',
    ],
    correct: 'w2 = window.open("http://www.w3schools.com");',
  },
  {
    id: "19",
    question: "JavaScript is the same as Java.",
    options: ["False", "True"],
    correct: "False",
  },
  {
    id: "20",
    question: "How can you detect the client's browser name?",
    options: ["navigator.appName", "client.navName", "browser.name"],
    correct: "navigator.appName",
  },
  {
    id: "21",
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onclick", "onmouseover", "onmouseclick", "onchange"],
    correct: "onclick",
  },
  {
    id: "22",
    question: "How do you declare a JavaScript variable?",
    options: ["var carName;", "variable carName;", "v carName;"],
    correct: "var carName;",
  },
  {
    id: "23",
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "x", "-", "*"],
    correct: "=",
  },
  {
    id: "24",
    question: "What will the following code return: Boolean(10 > 9)",
    options: ["true", "false", "NaN"],
    correct: "true",
  },
  {
    id: "25",
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No"],
    correct: "Yes",
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
  const textarea = document.createElement("textarea");
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
