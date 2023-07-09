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
    question: "Which HTML attribute is used to define inline styles?",
    options: ["styles", "style", "font", "css"],
    correct: "style",
  },
  {
    id: "1",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    id: "2",
    question: "Who is making the Web standards?",
    options: [
      "Mozilla",
      "Google",
      "Microsoft",
      "The World Wide Web Consortium",
    ],
    correct: "The World Wide Web Consortium",
  },
  {
    id: "3",
    question: "Choose the correct HTML element for the largest heading:",
    options: ["&lt;h1&gt;", "&lt;heading&gt;", "&lt;h6&gt;", "&lt;head&gt;"],
    correct: "&lt;h1&gt;",
  },
  {
    id: "4",
    question: "What is the correct HTML element for inserting a line break?",
    options: ["&lt;br&gt;", "&lt;break&gt;", "&lt;lb&gt;"],
    correct: "&lt;br&gt;",
  },
  {
    id: "5",
    question: "What is the correct HTML for adding a background color?",
    options: [
      '&lt;body style="background-color:yellow;"&gt;',
      "&lt;body bg='yellow'&gt;",
      "&lt;background&gt;yellow&lt;/background&gt;",
    ],
    correct: '&lt;body style="background-color:yellow;"&gt;',
  },
  {
    id: "6",
    question: "Choose the correct HTML element to define important text:",
    options: ["&lt;strong&gt;", "&lt;b&gt;", "&lt;important&gt;", "&lt;i&gt;"],
    correct: "&lt;strong&gt;",
  },
  {
    id: "7",
    question: "Choose the correct HTML element to define emphasized text:",
    options: ["&lt;em&gt;", "&lt;italic&gt;", "&lt;i&gt;"],
    correct: "&lt;em&gt;",
  },
  {
    id: "8",
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      '&lt;a href="http://www.w3schools.com"&gt;W3Schools&lt;/a&gt;',
      '&lt;a name="http://www.w3schools.com"&gt;W3Schools.com&lt;/a&gt;',
      '&lt;a url="http://www.w3schools.com"&gt;W3Schools.com&lt;/a&gt;',
      "&lt;a&gt;http://www.w3schools.com&lt;/a&gt;",
    ],
    correct: '&lt;a href="http://www.w3schools.com"&gt;W3Schools&lt;/a&gt;',
  },
  {
    id: "9",
    question: "Which character is used to indicate an end tag?",
    options: ["/", "*", "&lt;", "^"],
    correct: "/",
  },
  {
    id: "10",
    question: "How can you open a link in a new tab/browser window?",
    options: [
      '&lt;a href="url" target="_blank"&gt;',
      '&lt;a href="url" new&gt;',
      '&lt;a href="url" target="new"&gt;',
    ],
    correct: '&lt;a href="url" target="_blank"&gt;',
  },
  {
    id: "11",
    question: "Which of these elements are all &lt;table&gt; elements?",
    options: [
      "&lt;table&gt;&lt;tr&gt;&lt;td&gt;",
      "&lt;thead&gt;&lt;body&gt;&lt;tr&gt;",
      "&lt;table&gt;&lt;tr&gt;&lt;tt&gt;",
      "&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;",
    ],
    correct: "&lt;table&gt;&lt;tr&gt;&lt;td&gt;",
  },
  {
    id: "12",
    question:
      "Inline elements are normally displayed without starting a new line. Is this statement true or false?",
    options: ["True", "False"],
    correct: "True",
  },
  {
    id: "13",
    question: "How can you make a numbered list?",
    options: ["&lt;ol&gt;", "&lt;dl&gt;", "&lt;ul&gt;", "&lt;list&gt;"],
    correct: "&lt;ol&gt;",
  },
  {
    id: "14",
    question: "How can you make a bulleted list?",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;list&gt;", "&lt;dl&gt;"],
    correct: "&lt;ul&gt;",
  },
  {
    id: "15",
    question: "What is the correct HTML for making a checkbox?",
    options: [
      "&lt;input type='checkbox'&gt;",
      "&lt;check&gt;",
      "&lt;input type='check'&gt;",
      "&lt;checkbox&gt;",
    ],
    correct: "&lt;input type='checkbox'&gt;",
  },
  {
    id: "16",
    question: "What is the correct HTML for making a text input field?",
    options: [
      "&lt;input type='text'&gt;",
      "&lt;input type='textfield'&gt;",
      "&lt;textfield&gt;",
      "&lt;textinput type='text'&gt;",
    ],
    correct: "&lt;input type='text'&gt;",
  },
  {
    id: "17",
    question: "What is the correct HTML for making a drop-down list?",
    options: [
      "&lt;select&gt;",
      "&lt;input type='list'&gt;",
      "&lt;list&gt;",
      "&lt;input type='dropdown'&gt;",
    ],
    correct: "&lt;select&gt;",
  },
  {
    id: "18",
    question: "What is the correct HTML for making a text area?",
    options: [
      "&lt;textarea&gt;",
      "&lt;input type='textbox'&gt;",
      "&lt;input type='textarea'&gt;",
    ],
    correct: "&lt;textarea&gt;",
  },
  {
    id: "19",
    question: "What is the correct HTML for inserting an image?",
    options: [
      '&lt;img src="image.gif" alt="MyImage"&gt;',
      '&lt;img href="image.gif" alt="MyImage"&gt;',
      "&lt;img alt='MyImage'&gt;image.gif&lt;/img&gt;",
      "&lt;image src='image.gif' alt='MyImage'&gt;",
    ],
    correct: '&lt;img src="image.gif" alt="MyImage"&gt;',
  },

  {
    id: "20",
    question: "What is the correct HTML for inserting a background image?",
    options: [
      '&lt;body style="background-image:url(background.jpg);"&gt;',
      "&lt;background img='background.jpg'&gt;&lt;/background&gt;",
      "&lt;background-image src='background.jpg'&gt;",
      "&lt;img src='background.jpg' class='background'&gt;",
    ],
    correct: '&lt;body style="background-image:url(background.jpg);"&gt;',
  },
  {
    id: "21",
    question:
      "Which HTML element is used to specify a header for a document or section?",
    options: ["&lt;header&gt;", "&lt;h1&gt;", "&lt;head&gt;", "&lt;h2&gt;"],
    correct: "&lt;header&gt;",
  },
  {
    id: "22",
    question: "What is the correct HTML for creating a table?",
    options: [
      "&lt;table&gt;&lt;table-body&gt;&lt;table-row&gt;",
      "&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;",
      "&lt;table&gt;&lt;t&gt;&lt;tr&gt;",
      "&lt;table&gt;&lt;tr&gt;&lt;td&gt;",
    ],
    correct: "&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;",
  },
  {
    id: "23",
    question: "Which HTML element is used to define the title of a document?",
    options: ["&lt;title&gt;", "&lt;head&gt;", "&lt;header&gt;", "&lt;h1&gt;"],
    correct: "&lt;title&gt;",
  },
  {
    id: "24",
    question: "What is the correct HTML for creating an unordered list?",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
    correct: "&lt;ul&gt;",
  },
  {
    id: "25",
    question: "What is the correct HTML for creating a footer?",
    options: ["&lt;footer&gt;", "&lt;foot&gt;", "&lt;h1&gt;", "&lt;div&gt;"],
    correct: "&lt;footer&gt;",
  },
  {
    id: "26",
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      '&lt;a href="http://www.example.com"&gt;Click here&lt;/a&gt;',
      '&lt;a link="http://www.example.com"&gt;Click here&lt;/a&gt;',
      "&lt;a&gt;http://www.example.com&lt;/a&gt;",
      "&lt;a&gt;Click here&lt;/a&gt;",
    ],
    correct: '&lt;a href="http://www.example.com"&gt;Click here&lt;/a&gt;',
  },
  {
    id: "27",
    question: "What does the HTML acronym DOCTYPE stand for?",
    options: [
      "Document Type",
      "Document Type Code",
      "Declaration of Type",
      "Declaration of Type Code",
    ],
    correct: "Document Type",
  },
  {
    id: "28",
    question:
      "Which attribute specifies a short hint that describes the expected value of an input field?",
    options: ["placeholder", "hint", "value", "title"],
    correct: "placeholder",
  },
  {
    id: "29",
    question: "What is the correct HTML for inserting a horizontal rule?",
    options: ["&lt;hr&gt;", "&lt;rule&gt;", "&lt;line&gt;", "&lt;hrule&gt;"],
    correct: "&lt;hr&gt;",
  },
  {
    id: "30",
    question: "What is the correct HTML for creating a checkbox?",
    options: [
      '&lt;input type="checkbox"&gt;',
      '&lt;input type="check"&gt;',
      '&lt;input type="box"&gt;',
      '&lt;input type="checkmark"&gt;',
    ],
    correct: '&lt;input type="checkbox"&gt;',
  },
  {
    id: "31",
    question:
      "Which attribute specifies the text direction of the content inside an element?",
    options: ["dir", "text-direction", "direction", "text-dir"],
    correct: "dir",
  },
  {
    id: "32",
    question: "Which tag is used to define an embedded video?",
    options: [
      "&lt;video&gt;",
      "&lt;media&gt;",
      "&lt;embed&gt;",
      "&lt;play&gt;",
    ],
    correct: "&lt;video&gt;",
  },
  {
    id: "33",
    question: "What is the correct HTML for making a text area?",
    options: [
      "&lt;textarea&gt;",
      "&lt;input type='textarea'&gt;",
      "&lt;input type='textbox'&gt;",
      "&lt;area&gt;",
    ],
    correct: "&lt;textarea&gt;",
  },
  {
    id: "34",
    question: "Which element is used to specify a header cell in a table?",
    options: ["&lt;th&gt;", "&lt;td&gt;", "&lt;head&gt;", "&lt;header&gt;"],
    correct: "&lt;th&gt;",
  },
  {
    id: "35",
    question:
      "What is the correct HTML for making a text input field read-only?",
    options: [
      '&lt;input type="text" readonly&gt;',
      '&lt;input type="text" disable&gt;',
      '&lt;input type="text" readonly="true"&gt;',
      '&lt;input type="text" disabled&gt;',
    ],
    correct: '&lt;input type="text" readonly&gt;',
  },
  {
    id: "36",
    question:
      "Which element is used to define the possible options to choose from in a dropdown list?",
    options: [
      "&lt;option&gt;",
      "&lt;choose&gt;",
      "&lt;select&gt;",
      "&lt;list-item&gt;",
    ],
    correct: "&lt;option&gt;",
  },
  {
    id: "37",
    question:
      "Which attribute specifies an alternate text for an image if the image cannot be displayed?",
    options: ["alt", "src", "title", "link"],
    correct: "alt",
  },
  {
    id: "38",
    question: "What is the correct HTML for inserting a comment?",
    options: [
      "&lt;!-- This is a comment --&gt;",
      "&lt;comment&gt;This is a comment&lt;/comment&gt;",
      "&lt;comment&gt;!-- This is a comment --&gt;",
      "&lt;comment&gt;This is a comment --&gt;",
    ],
    correct: "&lt;!-- This is a comment --&gt;",
  },

  {
    id: "39",
    question: "What is the correct HTML for inserting a line break?",
    options: ["&lt;br&gt;", "&lt;line&gt;", "&lt;break&gt;", "&lt;brk&gt;"],
    correct: "&lt;br&gt;",
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





