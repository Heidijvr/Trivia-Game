var allQuestions = [
  {
    question: 'Sukiyaki is a popular hot pot dish from which country?',
    options: ['Japan', 'China', 'Taiwan', 'South-Korea'],
    answerIndex: 0
  },
  {
    question: 'Lox, often served on a bagel, is a fillet of brined what?',
    options: ['Tuna', 'Salmon', 'Halibut', 'Swordfish'],
    answerIndex: 1
  },
  {
    question: 'Sriracha is type of hot sauce named after a city located in which country?',
    options: ['India', 'Sri-Lanka', 'Thailand', 'Chile'],
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
    options: ['California', 'Washington', 'Japan', 'China'],
    answerIndex: 0
  }, 
];

var currentQuestionIndex;
var seconds;
var countDownTimer;
var correctCount;
var incorrectCount;
var unansweredCount;
var currentQuestion;

var startTimer = function() {
  clearInterval(countDownTimer);
  seconds = 30;
  $('#secondsRemaining').text(seconds);

  countDownTimer = setInterval(function() {
    seconds--;
  
    $('#secondsRemaining').text(seconds);
    
    if (seconds == 0) {
      // unanswered
      unansweredCount++;
      $('#outcome').text('Time\'s up!');
      $('#correctAnswerBox').show();
      showQuestionResult();
    } 
  }, 1000);  
}

var showQuestionResult = function() {
  clearInterval(countDownTimer);
  $('.gameBox').hide();
  $('#questionResult').show();

  if(currentQuestionIndex < allQuestions.length - 1) {
    setTimeout(displayQuestion, 2000);
    currentQuestionIndex++;  
  } else {
    setTimeout(showFinalScore, 2000);
  }
};

$('.answerOptionBox').on('click', function() {
  console.log($(this).index());
  
  if (currentQuestion.answerIndex === $(this).index()) {
    // right anwser
    correctCount++;
    $('#outcome').text('Correct!');
    $('#correctAnswerBox').hide();
    showQuestionResult();
  } else {
    // wrong answer
    incorrectCount++;
    $('#outcome').text('Incorrect!');
    $('#correctAnswerBox').show();
    showQuestionResult();    
  }
});

var displayQuestion = function() {
  currentQuestion = allQuestions[currentQuestionIndex];
  $('.gameBox').hide();
  $('#quizContainer').show();
  $('#questionText').text(currentQuestion.question); 

  $('.answerOption').each(function(index, element) {
    $(element).text(currentQuestion.options[index]);
  });

  $('#correctAnswer').text(currentQuestion.options[currentQuestion.answerIndex]);

  startTimer();
};

$('#start').on('click', function() {
  displayQuestion();
}); 

var showFinalScore = function() {
  $('#correctScore').text(correctCount);
  $('#incorrectScore').text(incorrectCount);
  $('#unansweredScore').text(unansweredCount);

  $('.gameBox').hide();
  $('#scoreBox').show();
  $('#start').text('Play Again');
  $('#buttonBox').show();

  resetScore();
}

var resetScore = function() {
  correctCount = 0;
  incorrectCount = 0;
  unansweredCount = 0;
  currentQuestionIndex = 0;
}

$(document).ready(function() {
  resetScore();
  $('.gameBox').hide();
  $('#buttonBox').show();
});









