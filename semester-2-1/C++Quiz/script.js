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
    question: "What is the syntax to output 'Hello World' in C++?",
    options: [
      'cout << "Hello World";',
      'System.out.println("Hello World");',
      'Console.WriteLine("Hello World");',
      'print ("Hello World");',
    ],
    correct: 'cout << "Hello World";',
  },

  {
    id: "1",
    question: "Which keyword is used to define a function in C++?",
    options: ["func", "def", "function", "void"],
    correct: "void",
  },
  {
    id: "2",
    question: "C++ is an alias of C#",
    options: ["True", "False"],
    correct: "False",
  },
  {
    id: "3",
    question: "How do you insert COMMENTS in C++ code?",
    options: [
      "// This is a comment",
      "# This is a comment",
      "/* This is a comment",
      "-- This is a comment",
    ],
    correct: "// This is a comment",
  },
  {
    id: "4",
    question:
      "Which data type is used to create a variable that should store text?",
    options: ["string", "Txt", "String", "myString"],
    correct: "string",
  },
  {
    id: "5",
    question: "How do you create a variable with the numeric value 5?",
    options: ["int x = 5;", "num x = 5", "double x = 5;", "x = 5;"],
    correct: "int x = 5;",
  },
  {
    id: "6",
    question: "How do you create a variable with the floating number 2.8?",
    options: ["double x = 2.8;", "x = 2.8;", "int x = 2.8;", "byte x = 2.8"],
    correct: "double x = 2.8;",
  },
  {
    id: "7",
    question: "Which method can be used to find the length of a string?",
    options: ["length()", "getLength()", "len()", "getSize()"],
    correct: "length()",
  },
  {
    id: "8",
    question: "Which operator is used to add together two values?",
    options: ["The + sign", "The & sign", "The * sign"],
    correct: "The + sign",
  },
  {
    id: "9",
    question:
      "The value of a string variable can be surrounded by single quotes.",
    options: ["False", "True"],
    correct: "False",
  },
  {
    id: "10",
    question: "Which header file lets us work with input and output objects?",
    options: [
      "#include <iostream>",
      "#include <stream>",
      "#include <inputstr>",
      "#include <iosstring>",
    ],
    correct: "#include <iostream>",
  },
  {
    id: "11",
    question: "Which operator can be used to compare two values?",
    options: ["==", "=", "><", "<>"],
    correct: "==",
  },
  {
    id: "12",
    question: "To declare an array in C++, define the variable type with:",
    options: ["[]", "{}", "()"],
    correct: "[]",
  },
  {
    id: "13",
    question: "Array indexes start with:",
    options: ["0", "1"],
    correct: "0",
  },
  {
    id: "14",
    question: "How do you create a function in C++?",
    options: [
      "functionName()",
      "(functionName)",
      "functionName.",
      "functionName[]",
    ],
    correct: "functionName()",
  },
  {
    id: "15",
    question: "How do you call a function in C++?",
    options: [
      "functionName();",
      "functionName[];",
      "functionName;",
      "(functionName);",
    ],
    correct: "functionName();",
  },
  {
    id: "16",
    question: "Which keyword is used to create a class in C++?",
    options: ["class", "MyClass", "className", "class()"],
    correct: "class",
  },
  {
    id: "17",
    question:
      "What is the correct way to create an object called myObj of MyClass?",
    options: [
      "MyClass myObj;",
      "class MyClass = new myObj();",
      "new myObj = MyClass();",
      "class myObj = new MyClass();",
    ],
    correct: "MyClass myObj;",
  },
  {
    id: "18",
    question:
      "In C++, it is possible to inherit attributes and methods from one class to another.",
    options: ["True", "False"],
    correct: "True",
  },
  {
    id: "19",
    question: "Which method can be used to find the highest value of x and y?",
    options: ["max(x,y)", "maxNum(x,y)", "maximum(x,y)", "largest(x,y)"],
    correct: "max(x,y)",
  },
  {
    id: "20",
    question: "Which operator is used to multiply numbers?",
    options: ["*", "#", "%", "x"],
    correct: "*",
  },
  {
    id: "21",
    question: "How do you create a reference variable of an existing variable?",
    options: [
      "With the * operator",
      "With the ref word",
      "With the REF word",
      "With the & operator",
    ],
    correct: "With the & operator",
  },
  {
    id: "22",
    question: "How do you start writing an if statement in C++?",
    options: ["if (x > y)", "if x > y then:", "if x > y:"],
    correct: "if (x > y)",
  },
  {
    id: "23",
    question: "How do you start writing a while loop in C++?",
    options: [
      "while (x > y)",
      "while x > y {",
      "while x > y:",
      "x > y while {",
    ],
    correct: "while (x > y)",
  },
  {
    id: "24",
    question: "Which keyword is used to return a value inside a method?",
    options: ["return", "void", "get", "break"],
    correct: "return",
  },
  {
    id: "25",
    question: "Which statement is used to stop a loop?",
    options: ["break", "exit", "return", "stop"],
    correct: "break",
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
