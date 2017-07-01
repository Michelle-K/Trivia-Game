// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {
  $("#download-button,#start").on("click", stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 60,
  

  reset: function() {

    stopwatch.time = 0;
   

    // DONE: Change the "display" div to "00:00."
    $("#display").html("05:00");

    
  },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }

    $("#download-button,#start").hide();
    $("#submit").show();
    $("#overflow").css("filter", "none");

  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  timeUp: function() {

    console.log("testing");

  },
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    if(converted === "00:00"){
      alert("Time is up!");
      stopwatch.stop();
      stopwatch.timeUp();
      timeUp();
    }

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").html(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};






/*HIDE QUESTIONS ONCE ANSWERED*/
$(".q1").on("click",function(){
    $("#q1box").fadeOut(1000);
    $("#1correct").css("color","green");
});

$(".q2").on("click",function(){
    $("#q2box").fadeOut(1000);
    $("#2correct").css("color","green");
});

$(".q3").on("click",function(){
    $("#q3box").fadeOut(1000);
    $("#3correct").css("color","green");
});

$(".q4").on("click",function(){
    $("#q4box").fadeOut(1000);
    $("#4correct").css("color","green");
});

$(".q5").on("click",function(){
    $("#q5box").fadeOut(1000);
    $("#5correct").css("color","green");
});

$(".q6").on("click",function(){
    $("#q6box").fadeOut(1000);
    $("#6correct").css("color","green");
});

$(".q7").on("click",function(){
    $("#q7box").fadeOut(1000);
    $("#7correct").css("color","green");
});

$(".q8").on("click",function(){
    $("#q8box").fadeOut(1000);
    $("#8correct").css("color","green");
});

$(".q9").on("click",function(){
    $("#q9box").fadeOut(1000);
    $("#9correct").css("color","green");
});

function timeUp (){

//Show all questions again
  $("#q1box, #q2box, #q3box, #q4box, #q5box, #q6box, #q7box, #q8box, #q9box").show();
  $("#1correct").css("color","white");
  $("#2correct").css("color","white");
  $("#3correct").css("color","white");
  $("#4correct").css("color","white");
  $("#5correct").css("color","white");
  $("#6correct").css("color","white");
  $("#7correct").css("color","white");
  $("#8correct").css("color","white");
  $("#9correct").css("color","white");
  

//Remove slider styling
document.getElementById("quiz").disabled = true;

$("#submit").hide();



  var amountCorrect = 0;          
for(var i = 1; i <= 9; i++) {
  var checkboxes = $('.q'+i);
  for(var j = 0; j < checkboxes.length; j++) {
    var checkbox = checkboxes[j];
    if(checkbox.value == "correct" && checkbox.checked) {
      amountCorrect++;
    }
  }
}                   
        alert("Correct Responses: " + amountCorrect + "\nCorrect answers are displays in white.");


}

$("#submit").on("click", function(){
  timeUp();
  stopwatch.stop();
  $("#submit").hide();
});










