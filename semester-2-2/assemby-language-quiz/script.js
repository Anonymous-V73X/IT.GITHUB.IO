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
    question:
      "How many bits are processed per instance by the bandwidth of a processor?",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    correct: "64 bits",
  },
  {
    id: "3",
    question:
      "Which stage of the instruction execution cycle involves fetching the instruction from memory?",
    options: [
      "Instruction Fetch (IF)",
      "Instruction Decode (ID)",
      "Execute (EX)",
      "Write Back (WB)",
    ],
    correct: "Instruction Fetch (IF)",
  },
  {
    id: "4",
    question:
      "Which memory component is directly built into the processor and provides fast access to data and instructions?",
    options: ["Registers", "Cache", "Main memory", "Auxiliary memory"],
    correct: "Registers",
  },
  {
    id: "5",
    question:
      "Which register in x86 architecture is commonly used as a pointer for source data access?",
    options: ["AX", "BX", "CX", "DX"],
    correct: "BX",
  },
  {
    id: "6",
    question:
      "What is the purpose of the MUL instruction in assembly language programming?",
    options: [
      "Perform addition",
      "Perform subtraction",
      "Perform unsigned multiplication",
      "Perform division",
    ],
    correct: "Perform unsigned multiplication",
  },
  {
    id: "7",
    question:
      "Which memory component provides non-volatile, high-capacity storage for long-term data storage?",
    options: ["Registers", "Cache", "Main memory", "Auxiliary memory"],
    correct: "Auxiliary memory",
  },
  {
    id: "8",
    question:
      "What is the purpose of the DIV instruction in assembly language programming?",
    options: [
      "Perform addition",
      "Perform subtraction",
      "Perform unsigned division",
      "Perform signed division",
    ],
    correct: "Perform unsigned division",
  },
  {
    id: "9",
    question:
      "Which instruction is used to multiply two signed values in assembly language programming?",
    options: ["MUL", "IMUL", "DIV", "IDIV"],
    correct: "IMUL",
  },
  {
    id: "10",
    question:
      "Which instruction is used to divide two signed values in assembly language programming?",
    options: ["MUL", "IMUL", "DIV", "IDIV"],
    correct: "IDIV",
  },
  {
    id: "11",
    question:
      "Which register in x86 architecture is commonly used as an accumulator for arithmetic and I/O operations?",
    options: ["AX", "BX", "CX", "DX"],
    correct: "AX",
  },
  {
    id: "12",
    question:
      "What is the purpose of the SUB instruction in assembly language programming?",
    options: [
      "Perform addition",
      "Perform subtraction",
      "Perform multiplication",
      "Perform division",
    ],
    correct: "Perform subtraction",
  },
  {
    id: "13",
    question:
      "How many bits are processed per instance by the bandwidth of a processor?",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    correct: "64 bits",
  },
  {
    id: "14",
    question:
      "Which stage of the instruction execution cycle involves fetching the instruction from memory?",
    options: [
      "Instruction Fetch (IF)",
      "Instruction Decode (ID)",
      "Execute (EX)",
      "Write Back (WB)",
    ],
    correct: "Instruction Fetch (IF)",
  },
  {
    id: "15",
    question:
      "Which memory component is directly built into the processor and provides fast access to data and instructions?",
    options: ["Registers", "Cache", "Main memory", "Auxiliary memory"],
    correct: "Registers",
  },
  {
    id: "16",
    question:
      "What is the purpose of the SBB instruction in assembly language programming?",
    options: [
      "Perform addition",
      "Perform subtraction",
      "Perform multiplication",
      "Perform division",
    ],
    correct: "Perform subtraction with borrow",
  },
  {
    id: "17",
    question: "How many address lines does the Intel 8086 processor have?",
    options: ["8 bits", "16 bits", "20 bits", "32 bits"],
    correct: "20 bits",
  },
  {
    id: "18",
    question:
      "Which register in x86 architecture is commonly used as a pointer for destination data access?",
    options: ["AX", "BX", "CX", "DX"],
    correct: "BX",
  },
  {
    id: "19",
    question:
      "What is the purpose of the IDIV instruction in assembly language programming?",
    options: [
      "Perform addition",
      "Perform subtraction",
      "Perform unsigned division",
      "Perform signed division",
    ],
    correct: "Perform signed division",
  },
  {
    id: "20",
    question:
      "Which instruction is used for unsigned multiplication in assembly language programming?",
    options: ["MUL", "IMUL", "DIV", "IDIV"],
    correct: "MUL",
  },
  {
    id: "21",
    question:
      "Which memory component provides temporary storage for frequently accessed instructions and data?",
    options: ["Registers", "Cache", "Main memory", "Auxiliary memory"],
    correct: "Cache",
  },
  {
    id: "22",
    question:
      "Which register in x86 architecture is commonly used as a counter in loop operations?",
    options: ["AX", "BX", "CX", "DX"],
    correct: "CX",
  },
  {
    id: "23",
    question:
      "What is the purpose of the IMUL instruction in assembly language programming?",
    options: [
      "Perform addition",
      "Perform subtraction",
      "Perform unsigned multiplication",
      "Perform signed multiplication",
    ],
    correct: "Perform signed multiplication",
  },
  {
    id: "24",
    question:
      "Which memory component has the largest capacity but slower access speeds compared to other memory components?",
    options: ["Registers", "Cache", "Main memory", "Auxiliary memory"],
    correct: "Auxiliary memory",
  },
  {
    id: "25",
    question: "What does the SBB instruction stand for?",
    options: [
      "Subtract with Borrow",
      "Subtract without Borrow",
      "Subtract and Branch if Borrow",
      "Subtract and Set Carry Flag",
    ],
    correct: "Subtract with Borrow",
  },
  {
    id: "26",
    question:
      "Which instruction is used for unsigned multiplication in assembly language programming?",
    options: ["MUL", "IMUL", "DIV", "IDIV"],
    correct: "MUL",
  },
  {
    id: "27",
    question:
      "Which register in x86 architecture is commonly used as an accumulator for arithmetic and I/O operations?",
    options: ["AX", "BX", "CX", "DX"],
    correct: "AX",
  },
  {
    id: "28",
    question:
      "What is the purpose of the SUB instruction in assembly language programming?",
    options: [
      "Perform addition",
      "Perform subtraction",
      "Perform multiplication",
      "Perform division",
    ],
    correct: "Perform subtraction",
  },
  {
    id: "29",
    question:
      "How many bits are processed per instance by the bandwidth of a processor?",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    correct: "64 bits",
  },
  {
    id: "30",
    question:
      "Which stage of the instruction execution cycle involves fetching the instruction from memory?",
    options: [
      "Instruction Fetch (IF)",
      "Instruction Decode (ID)",
      "Execute (EX)",
      "Write Back (WB)",
    ],
    correct: "Instruction Fetch (IF)",
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
