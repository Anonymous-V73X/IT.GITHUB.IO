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
let count = 50;
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
    question:
      "Which instruction is used to move a byte from the source to the destination?",
    options: ["MOVS", "CMPS", "SCAS", "LODS"],
    correct: "MOVS",
  },
  {
    id: "2",
    question: "What is the purpose of the DF flag in the MOVS instruction?",
    options: [
      "To indicate if the operation resulted in an overflow",
      "To indicate if the result is zero",
      "To specify the direction of the operation",
      "To store the most significant bit of the result",
    ],
    correct: "To specify the direction of the operation",
  },
  {
    id: "3",
    question: "Which instruction is used to compare two strings?",
    options: ["MOVS", "CMPS", "SCAS", "LODS"],
    correct: "CMPS",
  },
  {
    id: "4",
    question: "What is the purpose of the Zero Flag in the CMPS instruction?",
    options: [
      "To indicate if the operation resulted in an overflow",
      "To indicate if the result is zero",
      "To specify the direction of the operation",
      "To store the most significant bit of the result",
    ],
    correct: "To indicate if the result is zero",
  },
  {
    id: "5",
    question: "Which instruction is used to search for a byte in a string?",
    options: ["MOVS", "CMPS", "SCAS", "LODS"],
    correct: "SCAS",
  },
  {
    id: "6",
    question: "What is the purpose of the Zero Flag in the SCAS instruction?",
    options: [
      "To indicate if the operation resulted in an overflow",
      "To indicate if the result is zero",
      "To specify the direction of the operation",
      "To store the most significant bit of the result",
    ],
    correct: "To indicate if the result is zero",
  },
  {
    id: "7",
    question:
      "Which instruction is used to load a byte from the source to the accumulator?",
    options: ["MOVS", "CMPS", "SCAS", "LODS"],
    correct: "LODS",
  },
  {
    id: "8",
    question: "What is the purpose of the DF flag in the LODS instruction?",
    options: [
      "To indicate if the operation resulted in an overflow",
      "To indicate if the result is zero",
      "To specify the direction of the operation",
      "To store the most significant bit of the result",
    ],
    correct: "To specify the direction of the operation",
  },
  {
    id: "9",
    question:
      "Which instruction is used to store a byte from the accumulator to the destination?",
    options: ["MOVS", "CMPS", "SCAS", "STOS"],
    correct: "STOS",
  },
  {
    id: "10",
    question: "Which instruction is used to rotate bits to the right?",
    options: ["ROL", "RCL", "ROR", "SHL"],
    correct: "ROR",
  },
  {
    id: "11",
    question: "What is the purpose of the Carry Flag in the ROR instruction?",
    options: [
      "To store the most significant bit of the result",
      "To store the least significant bit of the result",
      "To indicate if the operation resulted in an overflow",
      "To indicate if the operation resulted in a carry-out",
    ],
    correct: "To store the most significant bit of the result",
  },
  {
    id: "12",
    question:
      "What is the maximum number of bits that can be rotated using the ROR instruction?",
    options: ["8", "16", "32", "64"],
    correct: "32",
  },
  {
    id: "13",
    question:
      "Which register is used to specify the number of bits to be rotated in the ROR instruction?",
    options: ["AH", "CL", "DX", "SI"],
    correct: "CL",
  },
  {
    id: "14",
    question: "What is the difference between the ROR and RCR instructions?",
    options: [
      "ROR rotates bits to the right, while RCR rotates bits to the left",
      "ROR does not use the Carry Flag, while RCR uses the Carry Flag",
      "ROR rotates bits by a fixed number of bits, while RCR rotates bits by a variable number of bits",
      "ROR and RCR are identical instructions with different names",
    ],
    correct: "ROR does not use the Carry Flag, while RCR uses the Carry Flag",
  },
  {
    id: "15",
    question: "Which instruction is used to shift bits to the left?",
    options: ["ROL", "RCL", "ROR", "SHL"],
    correct: "SHL",
  },
  {
    id: "16",
    question: "What is the purpose of the Zero Flag in the SHL instruction?",
    options: [
      "To store the most significant bit of the result",
      "To store the least significant bit of the result",
      "To indicate if the operation resulted in an overflow",
      "To indicate if the result is zero",
    ],
    correct: "To indicate if the result is zero",
  },
  {
    id: "17",
    question:
      "What is the maximum number of bits that can be shifted using the SHL instruction?",
    options: ["8", "16", "32", "64"],
    correct: "32",
  },
  {
    id: "18",
    question: "What is the purpose of the XOR instruction?",
    options: [
      "Performs a boolean XOR operation between two operands and places the result in the destination operand.",
      "Performs a boolean AND operation between two operands and places the result in the destination operand.",
      "Performs a boolean OR operation between two operands and places the result in the destination operand.",
      "Performs a boolean NOT operation on a single operand.",
    ],
    correct:
      "Performs a boolean XOR operation between two operands and places the result in the destination operand.",
  },
  {
    id: "19",
    question:
      "What are some common applications of shift and rotate instructions?",
    options: [
      "Controlling I/O devices in low-level software.",
      "Performing arithmetic operations on binary numbers.",
      "Sorting data in memory.",
      "Converting binary numbers to decimal numbers.",
    ],
    correct: "Controlling I/O devices in low-level software.",
  },

  {
    id: "21",
    question:
      "Which instruction is used to store a byte from the accumulator to the destination?",
    options: ["MOVS", "CMPS", "SCAS", "STOS"],
    correct: "STOS",
  },
  {
    id: "22",
    question: "Which instruction is used to rotate bits to the right?",
    options: ["ROL", "RCL", "ROR", "SHL"],
    correct: "ROR",
  },
  {
    id: "23",
    question: "What is the purpose of the Carry Flag in the ROR instruction?",
    options: [
      "To store the most significant bit of the result",
      "To store the least significant bit of the result",
      "To indicate if the operation resulted in an overflow",
      "To indicate if the operation resulted in a carry-out",
    ],
    correct: "To store the most significant bit of the result",
  },
  {
    id: "24",
    question:
      "What is the maximum number of bits that can be rotated using the ROR instruction?",
    options: ["8", "16", "32", "64"],
    correct: "32",
  },
  {
    id: "25",
    question:
      "Which register is used to specify the number of bits to be rotated in the ROR instruction?",
    options: ["AH", "CL", "DX", "SI"],
    correct: "CL",
  },
  {
    id: "26",
    question: "What is the difference between the ROR and RCR instructions?",
    options: [
      "ROR rotates bits to the right, while RCR rotates bits to the left",
      "ROR does not use the Carry Flag, while RCR uses the Carry Flag",
      "ROR rotates bits by a fixed number of bits, while RCR rotates bits by a variable number of bits",
      "ROR and RCR are identical instructions with different names",
    ],
    correct: "ROR does not use the Carry Flag, while RCR uses the Carry Flag",
  },
  {
    id: "27",
    question: "Which instruction is used to shift bits to the left?",
    options: ["ROL", "RCL", "ROR", "SHL"],
    correct: "SHL",
  },
  {
    id: "28",
    question: "What is the purpose of the Zero Flag in the SHL instruction?",
    options: [
      "To store the most significant bit of the result",
      "To store the least significant bit of the result",
      "To indicate if the operation resulted in an overflow",
      "To indicate if the result is zero",
    ],
    correct: "To indicate if the result is zero",
  },
  {
    id: "29",
    question:
      "What is the maximum number of bits that can be shifted using the SHL instruction?",
    options: ["8", "16", "32", "64"],
    correct: "32",
  },
  {
    id: "30",
    question: "What is the purpose of the XOR instruction?",
    options: [
      "Performs a boolean XOR operation between two operands and places the result in the destination operand.",
      "Performs a boolean AND operation between two operands and places the result in the destination operand.",
      "Performs a boolean OR operation between two operands and places the result in the destination operand.",
      "Performs a boolean NOT operation on a single operand.",
    ],
    correct:
      "Performs a boolean XOR operation between two operands and places the result in the destination operand.",
  },
  {
    id: "31",
    question: "What is the purpose of the AND instruction?",
    options: [
      "Performs a boolean AND operation between two operands and places the result in the destination operand.",
      "Performs a boolean OR operation between two operands and places the result in the destination operand.",
      "Performs a boolean XOR operation between two operands and places the result in the destination operand.",
      "Performs a boolean NOT operation on a single operand.",
    ],
    correct:
      "Performs a boolean AND operation between two operands and places the result in the destination operand.",
  },
  {
    id: "32",
    question:
      "What is the difference between the rotate and shift instructions?",
    options: [
      "The rotate instruction shifts bits in a circular manner, while the shift instruction shifts bits in a linear manner.",
      "The rotate instruction shifts bits in a linear manner, while the shift instruction shifts bits in a circular manner.",
      "The rotate instruction performs a boolean AND operation, while the shift instruction performs a boolean OR operation.",
      "The rotate instruction performs a boolean OR operation, while the shift instruction performs a boolean AND operation.",
    ],
    correct:
      "The rotate instruction shifts bits in a circular manner, while the shift instruction shifts bits in a linear manner.",
  },
  {
    id: "33",
    question: "What is the purpose of the NOT instruction?",
    options: [
      "Performs a boolean NOT operation on a single operand.",
      "Performs a boolean AND operation between two operands and places the result in the destination operand.",
      "Performs a boolean OR operation between two operands and places the result in the destination operand.",
      "Performs a boolean XOR operation between two operands and places the result in the destination operand.",
    ],
    correct: "Performs a boolean NOT operation on a single operand.",
  },
  {
    id: "34",
    question: "Which instruction is used for unsigned division?",
    options: ["ADD", "SUB", "MUL", "DIV"],
    correct: "DIV",
  },

  {
    id: "36",
    question: "What is the purpose of the IDIV instruction?",
    options: [
      "Unsigned division",
      "Signed division",
      "Multiplication",
      "Subtraction",
    ],
    correct: "Signed division",
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
      count = 50;
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
  count = 50;
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
