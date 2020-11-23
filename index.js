var  score=0;
var readlineSync=require('readline-sync');
const chalk = require('chalk');
 



function check(question,answer){
var userAnswer=readlineSync.question(chalk.bgWhite.blue(question)); 
if(userAnswer.toUpperCase()==answer.toUpperCase()){
  console.log(chalk.bgGreenBright("your are right:"));
  score++;
}
else{
  console.log(chalk.bgRed("you are wrong:"));
  score--;
}
// if(highScore>score){
//     highScore=score;
//   }
// console.log(score);
// console.log(highScore);
}

var questions=[{
  question:"What Is Bilawal Nick Name?\n",
  answer:"billu"},{
  question:"what is bilawal age?\n",
  answer:"21"},{
  question:"what bilawal want to become?\n",
  answer:"geek"}
  ,{
  question:"what is bilawal favourite food?\n",
  answer:"biryani"}
];

var questions1=[
  {scores: 3}
];


function highScore(){
for(var i=0;i<questions1.length;i++){
  var currentQuestion1=questions1[i];

  if(score>currentQuestion1.scores){
    currentQuestion1.scores=score;
    console.log(chalk.bgCyan("congrats you broke the old record"));
  }
console.log(chalk.red("CurrentScore:",score));
console.log(chalk.bgRed("HighScore:",  currentQuestion1.scores));
}
}



function addcall(){
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  check(currentQuestion.question,currentQuestion.answer);
}}
console.log(chalk.bgMagenta.bold("Welcome Folks!!"));
var user_input=readlineSync.question(chalk.bgWhite.bold("If You Know Bilawal Press 1!!\nOR Press any thing to exit\n"));

if(user_input==1){
addcall();}
else{
  process.exit()
}
highScore();