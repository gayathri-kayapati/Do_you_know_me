var readlineSync = require("readline-sync");
var score = 0;
function welcome() {
  var userName = readlineSync.question("May I know your name?\n");
  console.log("Welcome " + userName + "! " + "Do you know Gayathri?");
}
var score = 0;
var highScores = [
  {
    name: "Pranavi",
    score: 4,
  },
  {
    name: "Chinna",
    score: 3,
  },
  {
    name: "Lalitha",
    score: 4,
  },
];
function frdsQuiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You're right");
    score++;
  } else {
    console.log("You're wrong");
  }
  console.log("Your current score is " + score);
}
var questions = [
  {
    question: "What is my husband's name?\n",
    answer: "Gangadhar",
  },
  {
    question: "What is my favourite movie?\n",
    answer: "Godavari",
  },
  {
    question: "Who is my favourite actor?\n",
    answer: "Nani",
  },
  {
    question: "What type of songs makes me happy?\n",
    answer: "Melody",
  },
  {
    question: "Where I am living now?\n",
    answer: "Bangalore",
  },
];
function game() {
  for (var i = 0; i < questions.length; i++) {
    frdsQuiz(questions[i].question, questions[i].answer);
  }
}
function showScores() {
  console.log("YAY! You SCORED: ", score);
  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );
  highScores.map((score) => console.log(score.name, " : ", score.score));
}
welcome();
game();
showScores();
