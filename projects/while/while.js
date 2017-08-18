// Exercise 1
var n =1;

var outputTarget = document.querySelector(".loop-exercise1");
var outputHtml = "<p>Exercise 1:</p><ul>";

while (n <= 10){
  console.log(n);
  outputHtml += "<li>" + n + "</li>";
  n++;
}

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

// Exercise 2
var p = 2;
outputTarget = document.querySelector(".loop-exercise2");
outputHtml = "<p>Exercise 2:</p><ul>";

while (p <= 20) {
  console.log(p)
  outputHtml += "<li>" + p + "</li>";
  p += 2;
}

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

// Exercise 3
var s = 100;
var i = 1;
var sum = 0;
outputTarget = document.querySelector(".loop-exercise3");
outputHtml = "<p>Exercise 3:</p><ul>";

while (i < s){
  sum += i;
  console.log(sum);
  outputHtml += "<li>" + sum + "</li>";
  i++;
}

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

//Exercise 5
var r = 15;
outputTarget = document.querySelector(".loop-exercise5");
outputHtml = "<p>Exercise 5:</p><ul>";

while (r > 0) {
    console.log(r);
    if ( r % 2 === 0) {
        outputHtml += "<li>" + r + " even</li>";
    } else {
        outputHtml += "<li>" + r + " odd</li>";
    }
    r--;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

//Exercise 6
var t = 1;
outputTarget = document.querySelector(".loop-exercise6");
outputHtml = "<p>Exercise 6:</p><ul>"

while (t <= 100) {
    if(t % 3 === 0 && t % 5 == 0){
        console.log("FizzBuzz");
        outputHtml += "<li>FizzBuzz</li>";
    } else if (t % 3 === 0) {
        console.log("Fizz");
        outputHtml += "<li>Fizz</li>";
    } else if (t % 5 === 0) {
        console.log("Buzz");
        outputHtml += "<li>Buzz</li>";
    } else {
        console.log(t);
        outputHtml += "<li>" + t + "</li>";
    }

    t++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;
