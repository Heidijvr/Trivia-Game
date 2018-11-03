var allQuestions = [
  {
    question: 'Sukiyaki is a popular hot pot dish from what country?',
    options: ['Japan', 'China', 'Taiwan', 'South-Korea'],
    answerIndex: 0
  },
  {
    question: 'Lox, often served on a bagel, is a fillet of brined what?',
    options: ['Tuna', 'Salmon', 'Halibut', 'Swordfish'],
    answerIndex: 1
  },
  {
    question: 'Sriracha is type of hot sauce named after a city located in what country?',
    options: ['India', 'Sri-Lanka', 'Thailand', 'Chili'],
    answerIndex: 2
  },
  {
    question: 'Malbec, Sangiovese, and Syrah are all a type of what?',
    options: ['Entrees', 'Cocktails', 'Wines', 'Deserts'],
    answerIndex: 2
  },
  {
    question: 'In which country did cheddar cheese originate?',
    options: ['England','Switzerland','Austria','Denmark'],
    answerIndex: 0
  },
  {
    question: 'What is the main ingredient in thousand island dressing?',
    options: ['Vinegar','Garlic','Ketchup','Mayonnaise'],
    answerIndex: 3
  },
  {
    question: 'In the US, a pint of milk is equal to how many cups of milk?',
    options: ['4', '1', '3','2'],
    answerIndex: 3
  },
  {
    question: 'Where was the fortune cookie invented?',
    options: ['California', 'Los-Angeles', 'Japan', 'China'],
    answerIndex: 0
  }, 
];

var currentQuestionIndex = 0;
var seconds;
var countDownTimer;

var startTimer = function() {
  clearInterval(countDownTimer);
  seconds = 5;
  $("#secondsRemaining").text(seconds);

  countDownTimer = setInterval(function() {
    seconds--;
  
    $("#secondsRemaining").text(seconds);
    
    if (seconds == 0) {
      stopTimer();
    } 
  }, 1000);  
}

var stopTimer = function() {
  clearInterval(countDownTimer);
  $("#questionAnswerBox").hide();
  $("#winLoseBox").show();
  $("#secondsRemaining").text("Ha ha! Doos!");

  setTimeout(displayQuestion, 2000);
  currentQuestionIndex++;
};

$(".answerOptionBox").on("click", function() {
  console.log($(this).index());

});

var displayQuestion = function() {
  var currentQuestion = allQuestions[currentQuestionIndex];
  $("#questionAnswerBox").show();
  $("#winLoseBox").hide();

  $("#questionText").text(currentQuestion.question);
  
  $('.answerOption').each(function(index, element) {
    $(element).text(currentQuestion.options[index]);
  });
  startTimer();
};

displayQuestion(); 






