function Quiz(questions){
    this.score= 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex]
}

Quiz.prototype.checkOptionWithAnswer = function(answer){
    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}
Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
}

function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice){
    return this.answer === choice;
}

//Create questions here
var questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
  ];


  function loadQuestions(){
    if(quiz.isEnded()){
        //show score
    }else{
        //question = getQuestionByIndex
        //getElementById("question").innerText = question
        //question.choices
        let question = quiz.getQuestionByIndex();
        var element = document.getElementById("question");
        element.innerHTML = question.text;
        for(let i=0; i<choices.lenghth; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choice[i];
            handleOptionButton("btn"+i,choices[i]);
        //getElementByID("choice"+i).innerText = question.choices[i]
        //handleOptionButton("btn"+i,question.choices[i])
        }
        //showProgressBar()
    }
  }
  
  function handleOptionButton(id,choice){ 
    let button = document.getElementById(id);
    button.onclick = function(){
      quiz.checkOptionWithAnswer(choice);
      loadQuestions();
      }
  }
  
 
  let quiz = new Quiz(questions);
  loadQuestions();