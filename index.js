var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.red("What is your name? "));

console.log("Welcome " + chalk.bold.blue(userName) + " to an My Quiz on Food/fruit");
console.log("-------------------------------------------");

var highScore = {
  name : "Ansh",
  score : 10
}

function ask(nickName, realName) {
  var userAnswer = readlineSync.question(chalk.blueBright("Q)Which food/fruit is ") + (nickName)+"\nA)");

  if(userAnswer.toUpperCase() === realName.toUpperCase()) {
    console.log(chalk.bold.greenBright("You are right!"));
    score++;
  } else {
    console.log(chalk.bold.redBright("You are wrong!"));
    console.log("The correct answer is " + chalk.bold.greenBright(realName));
  }

  console.log("Your current score :", score);
  console.log("----------------------");
}

var food = [ {
  nickName : "look like Noodles? ",
  realName : "Maggie"
}, {
  nickName : " called as dog?",
  realName : "Hotdog"
}, {
   nickName : " also known as alu bhurji?",
  realName : "alu fry"
}, {
  nickName : "recommedent by doctor? ",
  realName : "Apple"
}, {
  nickName : "is eatent in summer most of the time? ",
  realName : "Watermelon"
}, {
  nickName : "time food? ",
  realName : "nothing is there"
}]

for(var i = 0; i<food.length; i++ ) {
  var currentFood = food[i];
  ask(currentFood.nickName, currentFood.realName);
}

console.log("YAY! Your final score is :", score);

console.log("The latest  highscore is of " + chalk.bold.redBright(highScore.name) + " with score " + chalk.bold.redBright(highScore.score) );
