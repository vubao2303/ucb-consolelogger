var poem = "Some say the";
var words = poem.split(" ");


var mainEl = document.getElementById("main");
var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;


function prepareRead() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      speedRead();
      
    }

  }, 1000);
}


function speedRead() {
  mainEl.append(bodyEl);
// ["Some", "say", "the"]
  var poemInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
    } else {
      mainEl.textContent = words[i];
      i++;
    }

  }, 1000);
}

prepareRead();


