var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I know your name?\n");
console.log("Welcome " + userName + "! " + "Do you know Gayathri?");
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
