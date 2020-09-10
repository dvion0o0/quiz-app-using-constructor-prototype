(function(){
  function Question(questions, answers, correctanswer){
  this.question = questions;
  this.answers = answers;
  this.correct = correctanswer;
}

Question.prototype.displayQuestion = function(){
  console.log(this.question);
  
  for(var i = 0; i < this.answers.length; i++){
    console.log(i + ":" + this.answers[i]);
  }
}


Question.prototype.checkAnswer = function(ans){
 if(ans === this.correct){
   console.log("Correct Answer !");
 }else{
   console.log("Wrong Answer *");
 }
}



var q1 = new Question("The largest living animal is the ?",
                      ["Blue Whale", "Lion", "Elephant", "Giraffe"],
                     0);

var q2 = new Question("The largest bird alive is the ?",
                     ["Crow", "Pigeon", "Parrot", "Ostrich"],
                     3);

var q3 = new Question("The smallest dog on earth is the ?",
                     ["Doberman", "Pomeranian", "Chihuaha", "Pitbull"],
                     2);

 
 var q4 = new Question("The fastest land animal is the ?",
                      ["Deer", "Dog", "Cheetah", "Turtoise"],
                      2);
  
  var q5 = new Question("The fastest-moving land snake in the world is the ?",
                       ["Cobra", "Black Mamba", "Python"]);
  
  var q6 = new Question("The largest of all lizards is the ?",
                       ["Iguana", "Komodo Dragon", "Chameleons",
                       1]);
  
  var q7 = new Question("The fish that can taste with its whole body is the ?", 
                       ["Cat Fish", "Star Fish", "Makeral"],
                       0);
  
  var q8 =  new Question("The only animal that sleeps on its back is ?",
                        ["Dog", "Cat", "Wolf", "Man"],
                        3);
  
  var q9 = new Question("The average weight of a blue whale is ?",
                       ["120000 kg", "10000kg", "300kg", "50000"],
                        0);
  
  var q10 = new Question("The Number of Teeth Fox Has ?",
                        ["12", "22", "32", "42", "52", "62"],
                        3);
  
  
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 ];

var random = Math.floor(Math.random() * questions.length);

questions[random].displayQuestion();



var answer = parseInt(prompt("Please select the correct Answer -: "));


questions[random].checkAnswer(answer);

})();
