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
    question:
      "What is the output of the following code?\nint x = 5;\nprintf('%d', x++);",
    options: ["5", "6", "Compiler Error", "Undefined Behavior"],
    correct: "Compiler Error",
  },

  {
    id: "1",
    question: "What is a correct syntax to output 'Hello World' in C?",
    options: [
      'printf("Hello World");',
      'Console.WriteLine("Hello World");',
      'cout << "Hello World";',
      'System.out.printline("Hello World");',
    ],
    correct: 'printf("Hello World");',
  },
  {
    id: "2",
    question: "How do you insert COMMENTS in C code?",
    options: [
      "// This is a comment",
      "# This is a comment",
      "* This is a comment",
      "-- This is a comment",
    ],
    correct: "// This is a comment",
  },
  {
    id: "3",
    question:
      "When a variable is created in C, a memory address is assigned to the variable.",
    options: ["True", "False"],
    correct: "True",
  },
  {
    id: "4",
    question: "In C, code statements must end with a semicolon (;)",
    options: ["True", "False"],
    correct: "True",
  },
  {
    id: "5",
    question: "How can you create a variable with the numeric value 5?",
    options: ["int num = 5;", "num = 5 int;", "val num = 5;", "num = 5;"],
    correct: "int num = 5;",
  },
  {
    id: "6",
    question: "How can you create a variable with the floating number 2.8?",
    options: [
      "float num = 2.8;",
      "num = 2.8 float;",
      "num = 2.8 double;",
      "val num = 2.8;",
    ],
    correct: "float num = 2.8;",
  },
  {
    id: "7",
    question: "Which operator is used to add together two values?",
    options: ["The + sign", "The * sign", "The & sign", "The ADD keyword"],
    correct: "The + sign",
  },
  {
    id: "8",
    question: "Which function is often used to output values and print text?",
    options: ["printf()", "printword()", "write()", "output()"],
    correct: "printf()",
  },
  {
    id: "9",
    question: "Which format specifier is often used to print integers?",
    options: ["%d", "%f", "%s", "%c"],
    correct: "%d",
  },
  {
    id: "10",
    question: "Which operator can be used to compare two values?",
    options: ["==", "<>", "><", "="],
    correct: "==",
  },
  {
    id: "11",
    question:
      "Which operator can be used to find the memory size (in bytes) of a data type or variable?",
    options: [
      "The sizeof property",
      "The sizer property",
      "The length property",
      "The len property",
    ],
    correct: "The sizeof property",
  },
  {
    id: "12",
    question:
      "Which keyword can be used to make a variable unchangeable/read-only?",
    options: ["const", "final", "readonly", "constant"],
    correct: "const",
  },
  {
    id: "13",
    question:
      "What do we call the following? int myNumbers[] = {25, 50, 75, 100};",
    options: ["An array", "A class", "None of the above", "A pointer"],
    correct: "An array",
  },
  {
    id: "14",
    question: "Array indexes start with:",
    options: ["0", "1"],
    correct: "0",
  },
  {
    id: "15",
    question: "How do you call a function in C?",
    options: ["myFunction();", "(myFunction);", "myFunction[];", "myFunction;"],
    correct: "myFunction();",
  },
  {
    id: "16",
    question: "How do you start writing an if statement in C?",
    options: ["if (x > y)", "if x > y then", "if x > y()", "if x > y"],
    correct: "if (x > y)",
  },
  {
    id: "17",
    question: "How do you start writing a while loop in C?",
    options: [
      "while (x < y)",
      "while x < y",
      "while x < y then",
      "if x > y while",
    ],
    correct: "while (x < y)",
  },
  {
    id: "18",
    question: "Which keyword is used to return a value inside a function?",
    options: ["return", "void", "get", "break"],
    correct: "return",
  },
  {
    id: "19",
    question: "How do you start writing a for loop in C?",
    options: [
      "for (int i = 0; i < 5; i++)",
      "for (x in y)",
      "for (int i = 0; while < 5; i++)",
      "for (int i = 0; i < 5; i++)",
    ],
    correct: "for (int i = 0; i < 5; i++)",
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
