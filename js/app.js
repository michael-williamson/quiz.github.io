var $quizContainer = $("#quiz-container");
var $questionContainer = $("<div class='question-container'></div>");
var $question = $("<h1 class='question'>What is the capital of Peru?</h1>");
var $ulList = $("<ul class='answer-list'></ul>");
var $answer = $("<li><input type='checkbox'/></li>");
var $correctAnswer = $("<li class='correct'><input type='checkbox'/></li>");

$("select").change(function(){
 if($(this).val() === "Country Capitals"){
   $(".question-container").remove();
   $(".mm-score-window-wrapper").remove(); 
   $(".submit-mm").remove(); 
   capitalQuiz();
  } 
 if($(this).val() === "Mammals"){
   $(".question-container").remove();
   $(".cc-score-window-wrapper").remove(); 
   $(".submit-cc").remove(); 
   mammalQuiz(); 
  } 
});



