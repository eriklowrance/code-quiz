const startBtn = document.querySelector("#start");
const startPrompt = document.querySelector("#start-prompt");
let questionContainer = document.getElementById("question-container");
const questionText = document.querySelector("#question-text");
const answerDiv = document.querySelector("#answers");
let time = document.querySelector("#time");
const questions = [
  {
    text:
      "What punishment did Arya have to endure after stealing from the Many-Faced God?",
    answers: ["Blindness", "Memory loss", "Paralysis", "Loss of hearing"],
    correctIndex: 0,
  },
  {
    text:
      "What is the name of the direwolf that Jon Snow adopted and raised?",
    answers: ["Nymeria", "Ghost", "Lady", "Grey Wind"],
    correctIndex: 1,
  },
  {
    text:
      "In addition to Valyrian Steel, what is the only other substance that can kill a White Walker?",
    answers: [
      "Lava",
      "Fire arrow to the heart",
      "Dragonglass",
      "Drowning",
    ],
    correctIndex: 2,
  },
  {
    text: "What does Bran become?",
    answers: [
      "Two-Headed Dog",
      "Three-Eyed Raven",
      "A Dragon",
      "A White Walker",
    ],
    correctIndex: 1,
  },
  {
    text: "Which musical artist made a cameo in Game of Thrones?",
    answers: [
      "Ed Sheeran",
      "Blake Shelton",
      "Lady Gaga",
      "Paul McCartney",
    ],
    correctIndex: 0,
  },
  {
    text:
      "Which of the following names does not belong to Daenerys' dragons?",
    answers: ["Drogon", "Viserion", "Venim", "Rhaegal"],
    correctIndex: 2,
  },
  {
    text: "What does the phrase Valar Morghulis mean?",
    answers: [
      "All men must serve",
      "All men must eat",
      "All men must bend the kneel",
      "All men must die",
    ],
    correctIndex: 3,
  },
  {
    text: "Who did Brienne of Tarth pledge her sword to?",
    answers: [
      "Jamie Lannister",
      "Arya Stark",
      "Sansa Stark",
      "Catelyn Stark",
    ],
    correctIndex: 3,
  },
  {
    text: "What was the name of Arya's sword?",
    answers: ["Pencil", "Oathkeeper", "Needle", "Fire"],
    correctIndex: 2,
  },
];

let timeRemaining = questions.length * 15;
let questionIndex = 0;
let timeId = 0;
// register a click event handler
startBtn.addEventListener("click", function (e) {
  startPrompt.style.display = "none";
  questionContainer.style.display = "block";
  //created variable to store current question
  displayQuestion();

  let choice = document.querySelector(".choice");
  console.log(choice)
  for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", function (e) {
      e.preventDefault();
      console.log('click')

      var correctAnswerIndex = questions[questionIndex].correctIndex;
      var correctAnswer =
        questions[questionIndex].answers[correctAnswerIndex];
      var userAnswer = this.textContent;
      if (userAnswer === correctAnswer) {
        document.querySelector("#answer-prompt").textContent = "Correct";
      } else {
        document.querySelector("#answer-prompt").textContent =
          "Incorrect";
        timeRemaining = timeRemaining - 10;

        //else remove 10 seconds from time, move to next question
      }
      clearInterval(timeId);

      //moves to next question
      questionIndex++;
      //pauses timer and displays answer right/wrong
      setTimeout(displayQuestion, 2000);
      //displays next question
    });
  }
});
function displayQuestion() {
  document.querySelector("#answer-prompt").textContent = "";

  const currentQuestion = questions[questionIndex];
  //set the text content
  questionText.textContent = currentQuestion.text;
  answerDiv.textContent = "";
  //create a button for each answer
  for (let i = 0; i < questions[questionIndex].answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary choice");
    //maybe a fix?
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('click')

      var correctAnswerIndex = questions[questionIndex].correctIndex;
      var correctAnswer =
        questions[questionIndex].answers[correctAnswerIndex];
      var userAnswer = this.textContent;
      if (userAnswer === correctAnswer) {
        document.querySelector("#answer-prompt").textContent = "Correct";
      } else {
        document.querySelector("#answer-prompt").textContent =
          "Incorrect";
        timeRemaining = timeRemaining - 10;

        //else remove 10 seconds from time, move to next question
      }
      clearInterval(timeId);

      //moves to next question
      questionIndex++;
      //pauses timer and displays answer right/wrong
      setTimeout(displayQuestion, 2000);
      //displays next question
    });
    btn.textContent = answer;
    answerDiv.appendChild(btn);
  }
}
// every second, takes one off countdown
function countdown() {
  timeId = setInterval(countdown, 1000);
  timeRemaining--;
  time.textContent = timeRemaining;
  if (timeRemaining === 0) {
    clearInterval(timeId);
  }
}