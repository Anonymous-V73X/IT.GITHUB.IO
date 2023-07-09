//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};





//References or rather varibles to use in the js
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

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Which HTML attribute is used to define inline styles?",
    options: ["styles", "style", "font", "css"],
    correct: "style",
  },
  {
    id: "1",
    question:
      "Which CSS property is used to control the text size of an element?",
    options: ["font-size", "text-size", "text-style", "font-style"],
    correct: "font-size",
  },
  {
    id: "2",
    question: "Which HTML tag is used to define an unordered list?",
    options: ["&lt;ul&gt;", "&lt;li&gt;", "&lt;ol&gt;", "&lt;dl&gt;"],
    correct: "&lt;ul&gt;",
  },
  {
    id: "3",
    question:
      "Which CSS property is used to change the background color of an element?",
    options: ["background-color", "color", "bgcolor", "background"],
    correct: "background-color",
  },
  {
    id: "4",
    question: "Which HTML attribute is used to define a hyperlink?",
    options: ["a", "href", "link", "url"],
    correct: "href",
  },
  {
    id: "5",
    question: "Which CSS property is used to set the text color of an element?",
    options: ["text-color", "color", "font-color", "text-style"],
    correct: "color",
  },
  {
    id: "6",
    question: "Which HTML tag is used to define a table row?",
    options: ["&lt;tr&gt;", "&lt;td&gt;", "&lt;th&gt;", "&lt;table&gt;"],
    correct: "&lt;tr&gt;",
  },
  {
    id: "7",
    question: "Which CSS property is used to add shadows to elements?",
    options: ["box-shadow", "shadow", "text-shadow", "element-shadow"],
    correct: "box-shadow",
  },
  {
    id: "8",
    question: "Which HTML tag is used to define a form?",
    options: [
      "&lt;form&gt;",
      "&lt;form-style&gt;",
      "&lt;button&gt;",
      "&lt;label&gt;",
    ],
    correct: "&lt;form&gt;",
  },
  {
    id: "9",
    question: "Which HTML tag is used to create a numbered list?",
    options: ["&lt;ul&gt;", "&lt;li&gt;", "&lt;ol&gt;", "&lt;dl&gt;"],
    correct: "&lt;ol&gt;",
  },
  {
    id: "10",
    question:
      "Which CSS property is used to control the space between lines in a paragraph?",
    options: ["line-height", "spacing", "line-spacing", "text-line"],
    correct: "line-height",
  },
  {
    id: "11",
    question: "Which HTML tag is used to define a clickable button?",
    options: ["&lt;a&gt;", "&lt;button&gt;", "&lt;click&gt;", "&lt;link&gt;"],
    correct: "&lt;button&gt;",
  },
  {
    id: "12",
    question: "Which CSS property is used to add a border around an element?",
    options: ["border", "border-style", "outline", "border-color"],
    correct: "border",
  },
  {
    id: "13",
    question:
      "Which HTML tag is used to define a section or grouping of navigation links?",
    options: ["&lt;nav&gt;", "&lt;ul&gt;", "&lt;link&gt;", "&lt;a&gt;"],
    correct: "&lt;nav&gt;",
  },
  {
    id: "14",
    question: "Which CSS property is used to align text horizontally?",
    options: ["text-align", "alignment", "align", "horizontal-align"],
    correct: "text-align",
  },
  {
    id: "15",
    question: "Which HTML tag is used to define a level-three heading?",
    options: ["&lt;h1&gt;", "&lt;h2&gt;", "&lt;h3&gt;", "&lt;h4&gt;"],
    correct: "&lt;h3&gt;",
  },
  {
    id: "16",
    question:
      "Which CSS property is used to control the spacing between letters in a word?",
    options: ["letter-spacing", "word-spacing", "text-spacing", "spacing"],
    correct: "letter-spacing",
  },
  {
    id: "17",
    question: "Which HTML tag is used to insert an image?",
    options: ["&lt;img&gt;", "&lt;image&gt;", "&lt;picture&gt;", "&lt;src&gt;"],
    correct: "&lt;img&gt;",
  },
  {
    id: "18",
    question: "Which CSS property is used to control the width of an element?",
    options: ["width", "size", "element-width", "dimension"],
    correct: "width",
  },
  {
    id: "19",
    question:
      "Which HTML tag is used to define a division or section within an HTML document?",
    options: ["&lt;div&gt;", "&lt;section&gt;", "&lt;body&gt;", "&lt;p&gt;"],
    correct: "&lt;div&gt;",
  },

  {
    id: "20",
    question:
      "Which CSS property is used to control the visibility of an element?",
    options: ["display", "visibility", "hidden", "opacity"],
    correct: "visibility",
  },
  {
    id: "21",
    question: "Which HTML tag is used to define a line break?",
    options: ["&lt;br&gt;", "&lt;lb&gt;", "&lt;break&gt;", "&lt;line&gt;"],
    correct: "&lt;br&gt;",
  },
  {
    id: "22",
    question:
      "Which CSS property is used to control the space between the content and border of an element?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: "padding",
  },
  {
    id: "23",
    question:
      "Which HTML tag is used to create an input field for entering email addresses?",
    options: [
      "&lt;input&gt; type='email'",
      "&lt;input&gt; type='text'",
      "&lt;input&gt; type='email-address'",
      "&lt;input&gt; type='address'",
    ],
    correct: "&lt;input&gt; type='email'",
  },
  {
    id: "24",
    question:
      "Which CSS property is used to control the position of an element relative to its closest positioned ancestor?",
    options: ["position", "top", "relative", "float"],
    correct: "position",
  },
  {
    id: "25",
    question: "Which HTML tag is used to create a checkbox input field?",
    options: [
      "&lt;input&gt; type='checkbox'",
      "&lt;input&gt; type='radio'",
      "&lt;input&gt; type='checkbox'",
      "&lt;input&gt; type='button'",
    ],
    correct: "&lt;input&gt; type='checkbox'",
  },
  {
    id: "26",
    question:
      "Which CSS property is used to control the space between columns in a multi-column layout?",
    options: ["column-gap", "gap", "column-space", "column-width"],
    correct: "column-gap",
  },
  {
    id: "27",
    question: "Which HTML tag is used to define an italicized text?",
    options: ["&lt;i&gt;", "&lt;italic&gt;", "&lt;em&gt;", "&lt;italicize&gt;"],
    correct: "&lt;em&gt;",
  },
  {
    id: "28",
    question:
      "Which CSS property is used to control the space between the content and border of an element?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: "padding",
  },
  {
    id: "29",
    question: "Which HTML tag is used to define a level-one heading?",
    options: ["&lt;h1&gt;", "&lt;h2&gt;", "&lt;h3&gt;", "&lt;h4&gt;"],
    correct: "&lt;h1&gt;",
  },
  {
    id: "30",
    question: "Which CSS property is used to control the size of the font?",
    options: ["font-size", "text-size", "font-style", "size"],
    correct: "font-size",
  },
  {
    id: "31",
    question: "Which HTML tag is used to create a radio button input field?",
    options: [
      "&lt;input&gt; type='radio'",
      "&lt;input&gt; type='radiobutton'",
      "&lt;input&gt; type='radio'",
      "&lt;input&gt; type='button'",
    ],
    correct: "&lt;input&gt; type='radio'",
  },
  {
    id: "32",
    question:
      "Which CSS property is used to control the vertical alignment of text within an element?",
    options: ["vertical-align", "text-align", "align", "alignment"],
    correct: "vertical-align",
  },
  {
    id: "33",
    question: "Which HTML tag is used to create a submit button?",
    options: [
      "&lt;input&gt; type='submit'",
      "&lt;input&gt; type='button'",
      "&lt;input&gt; type='submit-button'",
      "&lt;button&gt;",
    ],
    correct: "&lt;input&gt; type='submit'",
  },
  {
    id: "34",
    question: "Which CSS property is used to control the color of text?",
    options: ["color", "text-color", "font-color", "text-style"],
    correct: "color",
  },
  {
    id: "35",
    question: "Which HTML tag is used to create an unordered list?",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
    correct: "&lt;ul&gt;",
  },
  {
    id: "36",
    question:
      "Which CSS property is used to control the background color of an element?",
    options: ["background-color", "color", "background", "bg-color"],
    correct: "background-color",
  },
  {
    id: "37",
    question: "Which HTML tag is used to create an ordered list?",
    options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
    correct: "&lt;ol&gt;",
  },
  {
    id: "38",
    question:
      "Which CSS property is used to control the size of an image element?",
    options: ["width", "size", "image-width", "element-width"],
    correct: "width",
  },
  {
    id: "39",
    question: "Which HTML tag is used to define a hyperlink?",
    options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;url&gt;", "&lt;href&gt;"],
    correct: "&lt;a&gt;",
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
