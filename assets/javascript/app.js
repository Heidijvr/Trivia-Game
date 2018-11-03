var currentQuestion = {};

currentQuestion.question = 'Sukiyaki is a popular hot pot dish from what country?';
currentQuestion.options = ['Japan', 'China', 'Taiwan', 'South-Korea'];
currentQuestion.answer = 'Japan';



$(".answerOptionBox").on("click", function() {
  console.log($(this).index());

});

var displayQuestion = function(questionAndAnswers) {
  $("#questionText").text(questionAndAnswers.question);
  
  $('.answerOption').each(function(index, element) {
    console.log('ksss ', index);
    $(element).text(questionAndAnswers.options[index]);
  });
};

displayQuestion(currentQuestion); 


