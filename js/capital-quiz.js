var capitalQuiz = function(){
  
var $scoreWindowCC = $("<div class='cc-score-window-wrapper'><div class='cc-score-window'></div></div>");
var currQuestionParaCC =  $("<p class='countries'></p>");  /*list of countries text*/
var whichCountries = $("<p class='which-countries'>These are the countries whose capitals you missed</p>");
var $correctSentence = $("<p class='amount-correct'></p>");
$("body").append($scoreWindowCC);
$scoreWindowCC.hide(); 
$(".cc-score-window").append($correctSentence);
$(".cc-score-window").append(whichCountries);
$(".cc-score-window").append(currQuestionParaCC);
var $tryAgain = $("<div class='try-again-cc'>Try Again</div>");   
$(".cc-score-window").append($tryAgain);
var currQuestion = ""; 

  
  
  
var q1 = {
    q: "What is the capital of Peru?",
    ulClass: "ul-q1",
    a1: "San Jose",
    a2: "Tehran",
    a3: "Lima",
    a4: "Berlin",
    method: function(){
        $('li:contains("Lima")').addClass("correct");
        $('.ul-q1').addClass("peru");
        $('.ul-q1 li').each(function(){
        $(this).children().attr('name','q1');
        });   
    }
};
var q2 = {
    q: "What is the capital of Kenya?",
    ulClass: "ul-q2",
    a1: "Quito",
    a2: "Banjul",
    a3: "Vancouver",
    a4: "Nairobi",
    method: function(){
        $('li:contains("Nairobi")').addClass("correct");
        $('.ul-q2').addClass("kenya");
        $('.ul-q2 li').each(function(){
            $(this).children().attr('name','q2');
        });   
    }
};
var q3 = {
    q: "What is the capital of France?",
    ulClass: "ul-q3",
    a1: "London",
    a2: "Paris",
    a3: "Copenhagen",
    a4: "Tokyo",
    method: function(){
        $('li:contains("Paris")').addClass("correct");
        $('.ul-q3').addClass("france");
        $('.ul-q3 li').each(function(){
            $(this).children().attr('name','q3');
        });   
    }
};
var q4 = {
    q: "What is the capital of Pakistan?",
    ulClass: "ul-q4",
    a1: "Islamabad",
    a2: "Ramallah",
    a3: "Santiago",
    a4: "Oslo",
    method: function(){
        $('li:contains("Islamabad")').addClass("correct");
        $('.ul-q4').addClass("pakistan");
        $('.ul-q4 li').each(function(){
            $(this).children().attr('name','q4');
        });   
    }
};
var q5 = {
    q: "What is the capital of Colombia?",
    ulClass: "ul-q5",
    a1: "Beijing",
    a2: "Lisbon",
    a3: "Canberra",
    a4: "Bogota",
    method: function(){
        $('li:contains("Bogota")').addClass("correct");
        $('.ul-q5').addClass("colombia");
        $('.ul-q5 li').each(function(){
            $(this).children().attr('name','q5');
        });   
    }
};
var q6 = {
    q: "What is the capital of Philippines?",
    ulClass: "ul-q6",
    a1: "Manila",
    a2: "Managua",
    a3: "Copenhagen",
    a4: "Porto-Novo",
    method: function(){
        $('li:contains("Manila")').addClass("correct");
        $('.ul-q6').addClass("philippines");
        $('.ul-q6 li').each(function(){
            $(this).children().attr('name','q6');
        });   
    }
};
var q7 = {
    q: "What is the capital of Austria?",
    ulClass: "ul-q7",
    a1: "Algiers",
    a2: "Paris",
    a3: "Copenhagen",
    a4: "Vienna",
    method: function(){
        $('li:contains("Vienna")').addClass("correct");
        $('.ul-q7').addClass("austria");
        $('.ul-q7 li').each(function(){
            $(this).children().attr('name','q7');
        });   
    }
};
var q8 = {
    q: "What is the capital of Georgia?",
    ulClass: "ul-q8",
    a1: "Singapore",
    a2: "Addis Ababa",
    a3: "Tbilisi",
    a4: "Riyadh",
    method: function(){
        $('li:contains("Tbilisi")').addClass("correct");
        $('.ul-q8').addClass("georgia");
        $('.ul-q8 li').each(function(){
            $(this).children().attr('name','q8');
        });   
    }
};
var q9 = {
    q: "What is the capital of Vietnam?",
    ulClass: "ul-q9",
    a1: "Hanoi",
    a2: "Bissau",
    a3: "Abu Dhabi",
    a4: "Astana",
    method: function(){
        $('li:contains("Hanoi")').addClass("correct");
        $('.ul-q9').addClass("vietnam");
        $('.ul-q9 li').each(function(){
            $(this).children().attr('name','q9');
        });   
    }
};
var q10 = {
    q: "What is the capital of El Salvador?",
    ulClass: "ul-q10",
    a1: "Bratislava",
    a2: "Conakry",
    a3: "San Salvador",
    a4: "Port Vila",
    method: function(){
        $('li:contains("San Salvador")').addClass("correct");
        $('.ul-q10').addClass("el-salvador");
        $('.ul-q10 li').each(function(){
            $(this).children().attr('name','q10');
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

question(q1.q,q1.ulClass,q1.a1,q1.a2,q1.a3,q1.a4,q1.method);
question(q2.q,q2.ulClass,q2.a1,q2.a2,q2.a3,q2.a4,q2.method);
question(q3.q,q3.ulClass,q3.a1,q3.a2,q3.a3,q3.a4,q3.method);
question(q4.q,q4.ulClass,q4.a1,q4.a2,q4.a3,q4.a4,q4.method);
question(q5.q,q5.ulClass,q5.a1,q5.a2,q5.a3,q5.a4,q5.method);
question(q6.q,q6.ulClass,q6.a1,q6.a2,q6.a3,q6.a4,q6.method);
question(q7.q,q7.ulClass,q7.a1,q7.a2,q7.a3,q7.a4,q7.method);
question(q8.q,q8.ulClass,q8.a1,q8.a2,q8.a3,q8.a4,q8.method);
question(q9.q,q9.ulClass,q9.a1,q9.a2,q9.a3,q9.a4,q9.method);
question(q10.q,q10.ulClass,q10.a1,q10.a2,q10.a3,q10.a4,q10.method);
  
  
$(".submit-div").append("<div class='submit-cc'>Submit<div>");   // submit button
  
$tryAgain.on("click", function(){
    $("li").each(function(){
        $(this).parent().removeClass("correct");
    });
  $scoreWindowCC.hide();
  $(".amount-correct").empty();
  $(".countries").empty();
  currQuestionCL = "";
  correct = 0;
});

  
  
    
$(".submit-cc").click(function(){
    correct = 0; 
    var currQuestionCL = "";
    $("li").each(function(){
     if($(this).hasClass("correct") && $(this).children().prop("checked")){
        $(this).parent().addClass("correct");
        correct += 1;}
      });
     $(".question-container").each(function(){
        if(!$(this).children("ul").hasClass("correct")){
             currQuestion = $(this).children("h1").text().slice(22);
             currQuestion = currQuestion.slice(0,currQuestion.length - 1);
             currQuestionCL  += '"' + currQuestion + '"<br>';
        }
     });
    if(correct < 10){
    $correctSentence.text("You got " + correct + " correct!");
    currQuestionParaCC.html(currQuestionCL);
    }
    if(correct === 10){
      $correctSentence.text("You got em all!!");
      whichCountries.remove();
      currQuestionParaCC.remove();
    }    
    $scoreWindowCC.show(); 
  
});
  

    
    
};  
 //end of capital quiz function 
  
  
  

capitalQuiz(); // triggers this function on page load




