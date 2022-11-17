var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I know your name?\n");
console.log("Welcome " + userName + "! " + "Do you know Gayathri?");
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
for (var i = 0; i < questions.length; i++) {
  frdsQuiz(questions[i].question, questions[i].answer);
}
console.log("YAY! You SCORED: ", score);
