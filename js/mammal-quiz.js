var mammalQuiz = function(){

var $scoreWindowMM = $("<div class='mm-score-window-wrapper'><div class='mm-score-window'></div></div>");
$("body").append($scoreWindowMM);  
var $correctSentence = $("<p class='amount-correct'></p>");
var $missed = $("<p class='missed'></p>");   
$scoreWindowMM.hide(); 
$(".mm-score-window").append($correctSentence);
$(".mm-score-window").append($missed);
var $tryAgain = $("<div class='try-again-mm'>Try Again</div>");   
$(".mm-score-window").append($tryAgain);
  
var q1 = {
  q: "What mammal is this?",
  animal: "cheetah",
  method: function(){
    $(".question-container").addClass("input-q");
  }
};  
var q2 = {
    q: "Bats typically live in what environments?",
    ulClass: "ul-q2",
    a1: "cars",
    a2: "caves",
    a3: "artic plains",
    a4: "vampire movies",
    method: function(){
        $('li:contains("caves")').addClass("correct");
        $('.ul-q2').addClass("bats");
        $('.ul-q2 li').each(function(){
        $(this).children().attr('name','q2');
        });   
    }
};
var q3 = {
    q: "What continent do Bison live on?",
    ulClass: "ul-q3",
    a1: "South America",
    a2: "Antartica",
    a3: "Africa",
    a4: "North America",
    method: function(){
        $('li:contains("North America")').addClass("correct");
        $('.ul-q3').addClass("bison");
        $('.ul-q3 li').each(function(){
        $(this).children().attr('name','q3');
        });   
    }
};
var q4 = {
  q: "What mammal is this?",
  animal: "dolphin", 
  method: function(){
    $(".question-container").addClass("input-q");
  }
}; 
var q5 = {
    q: "What is the name of this mammal?",
    ulClass: "ul-q5",
    a1: "Koala",
    a2: "Elephant",
    a3: "Walrus",
    a4: "Squirrel",
    method: function(){
        $('li:contains("Elephant")').addClass("correct");
        $('.ul-q5').addClass("elephant");
        $('.ul-q5 li').each(function(){
        $(this).children().attr('name','q5');
        });   
    }
};
  


function question(q,ulClass,a1,a2,a3,a4,method){
    var list = "<div class='question-container'>";
    list += "<h1 class='question'>" + q + "</h1>";
    list += "<ul class='" + ulClass + "'>";
    list += "<li><input type='radio'/>" + a1 + "</li>";
    list += "<li><input type='radio'/>" + a2 + "</li>";
    list += "<li><input type='radio'/>" + a3 + "</li>";
    list += "<li><input type='radio'/>" + a4 + "</li>";
    list += "</ul>";
    list += "</div>";
    $quizContainer.append(list);
    method(); 
}

function questionInput(animal,q,method){
    var question = "<div class='question-container " + animal + "'>";
    question += "<h1 class='question'>" + q + "</h1>";
    question += "<input type='text' name='answer'>";
    question += "</div>";
    $quizContainer.append(question);
    method(); 
}
  
 questionInput(q1.animal,q1.q,q1.method);
 question(q2.q,q2.ulClass,q2.a1,q2.a2,q2.a3,q2.a4,q2.method);
 question(q3.q,q3.ulClass,q3.a1,q3.a2,q3.a3,q3.a4,q3.method);
 questionInput(q4.animal,q4.q,q4.method);
 question(q5.q,q5.ulClass,q5.a1,q5.a2,q5.a3,q5.a4,q5.method);
 
$(".submit-div").append("<div class='submit-mm'>Submit<div>");   // submit button
  

  
  $tryAgain.on("click", function(){
      $("li").each(function(){
          $(this).parent().removeClass("correct");
      });
  $scoreWindowMM.hide(); 
});


$(".submit-mm").click(function(){
   var correct = 0;
    if($(".cheetah").children("input").val().toLowerCase() === "cheetah"){
        $(".cheetah").addClass("correct");
        $(".cheetah").removeClass("incorrect");
        correct += 1;
 }
    if($(".dolphin").children("input").val().toLowerCase() === "dolphin"){
        $(".dolphin").addClass("correct");
        $(".dolphin").removeClass("incorrect");
        correct += 1; 
 }
    if($(".cheetah").children("input").val().toLowerCase() !== "cheetah"){
        $(".cheetah").addClass("incorrect");
 }
    if($(".dolphin").children("input").val().toLowerCase() !== "dolphin"){
        $(".dolphin").addClass("incorrect");
 }
    $("li").each(function(){
     if($(this).hasClass("correct") && $(this).children().prop("checked")){
        $(this).parent().removeClass("incorrect").addClass("correct");
        correct += 1;}
      });
    $("li").each(function(){
      if(!$(this).parent().hasClass("correct")){
          $(this).parent().removeClass("correct").addClass("incorrect");}
        if($(this).hasClass("incorrect")){
            $(this).removeClass("correct");
        }
      });
    
      
    $scoreWindowMM.show(); 
    $(".mm-score-box").removeClass("score-box").addClass("mammals-score");
    $correctSentence.text("You got " + correct + " correct");
  if(correct === 5){
    $(".missed").text("Great Job!");
  }
  if(correct < 5){
    $(".missed").text("You might want to try again");
  }

  });

};
