var time = 30;
var rightAnswers;
var wrongAnswers;
var questions;

//This code will run as soon as the page loads
window.onload = function() {
    $('#start').click(timer.start);
    $('#stop').click(timer.start);
    $('#reset').click(timer.start);
};

<button onclick="myFunction()">Click me</button>; {
    console.log("Click me!");
 }


//timer object
var timer = {
    time:0,
    reset: function() {
        timer:time = 0;

    },
start: function() {
    counter = setInterval(timer.count, 1000);

},  //clearInterval to stop count
stop: function() {
    clearInterval(counter);
},    //increment time by one
count: function() {
    timer.time++;
};