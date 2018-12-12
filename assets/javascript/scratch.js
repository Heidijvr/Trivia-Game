var time = 30;


var correctAnswers = 0;
var wrongAnswers = 0;
var totalScore = 0;
$(document).ready(function() {
    //event listeners
    $("#remaining-time").hide;
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);
    
})

//trivia properties
var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    //guessResult: '',
    //nextQuestion: '',
    timer: 20,
    timerOn: false,
    timerId: '',
}

var allQuestions = [
  {
    question: 'Sukiyaki is a popular hot pot dish from what country?',
    options: ['Japan', 'China', 'Taiwan', 'South-Korea'],
    answerIndex: 0
  },
  {
    question: 'Hoe\'s jou ma?',
    options: ['Lekker dankie', 'Hoe\'s JOU ma???', 'Besig om rond te naai', 'Uitgepass'],
    answer: 2
  },
];

//question options and answers
questions: {
    q1: 'Sukiyaki is a popular hot pot dish from what country?'
    q2: 'Lox, often served on a bagel, is a fillet of brined what?'
    q3: 'Sriracha is type of hot sauce named after a city located in what country?'
    q4: 'Malbec, Sangiovese, and Syrah are all a type of what?'
    q5: 'In which country did cheddar cheese originate?'
    q6: 'What is the main ingredient in thousand island dressing?'
    q7: 'In the US, a pint of milk is equal to how many cups of milk?'
    q8: 'Where was the fortune cookie invented?'
}
  
    options: {
      q1: ['Japan', 'China', 'Taiwan', 'South-Korea']
      q2: ['Tuna', 'Salmon', 'Halibut', 'Swordfish']
      q3: ['India', 'Sri-Lanka', 'Thailand', 'Chili']
      q4: ['Entrees', 'Cocktails', 'Wines', 'Deserts']
      q5: ['England','Switzerland','Austria','Denmark']
      q6: ['Vinegar','Garlic','Ketchup','Mayonnaise']
      q7: ['4', '1', '3','2']
      q8: ['California', 'Los-Angeles', 'Japan', 'China']
    }

    answers: {
      q1: 'Japan'
      q2: 'Salmon'
      q3: 'Thailand'
      q4: 'Wines'
      q5: 'England'
      q6: 'Mayonnaise'
      q7: '2'
      q8: 'California'
    }

    // method to initialize game
    startGame: (function() {
      // restarting game results
      trivia.currentSet = 0;
      trivia.correct = 0;
      trivia.incorrect = 0;
      trivia.unanswered = 0;
      clearInterval(trivia.timerId);
      
     
      var getRandomizedArray = function(to, count) {
        if (count <= 0 || to  < 1) {
          return [];
        }
      
        if (count > to) {
          count = to;
        }
      
        var output = [];
        for (var i = 0; i < to; i++) {
          output.push(i);
        }
      
        for (var i = output.length - 1; i >= output.length - count; i--) {
          var randomIndex = Math.floor(Math.random() * (i + 1));
          console.log("random", randomIndex);
          var temp = output[i];
          output[i] = output[randomIndex];
          output[randomIndex] = temp;
        }
      
        console.log(output);
        return output.slice(output.length - count, output.length);
      } 
            
      console.log(getRandomizedArray(467, 5));