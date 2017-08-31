// var answerLogger = function(thisCanBeAnything){
//   var answer = thisCanBeAnything();
//
//   $("#answer").text(answer);
// };
//
// answerLogger(function(){
//   return "I should appear in div#answer!"
// })

var answerLogger = function(arr){
  $("#answer").html('<ol></ol>');

  arr.forEach(function(fn){
    var answer = fn();
    $("#answer ol").append("<li>" + answer + "</li>")
  })
}

var fn1 = function(){
  return "I should appear in div#answer!"
}

var fn2 = function(){
  return "I should appear below the other one!"
}

answerLogger([fn1, fn2])

/*********** Functions as outputs *************/

var returnsFunction = function () {
  return function(){ console.log('BOOP!') }
}

// have we booped yet?
var booper = returnsFunction()

// how about now?
booper()

/************* Function Scope ***************/

var word = ' original '
var phrase = ' is the word '

var wordChanger = function(newWord){
  var word = newWord
  console.log(word + phrase)
}

console.log(word + phrase)
// console.log(newWord + phrase)
wordChanger('changed')
console.log(word + phrase)
// console.log(newWord + phrase)

// what's different here?
var leaky_word_changer = function (new_word) {
    word = new_word
    console.log(word + phrase)
}

leaky_word_changer('hello')
console.log(word + phrase)
// console.log(new_word + phrase)

/************* Excercise 2 ************/

var secretKeeper = function(string1, string2){
  var secret = 'You cant see me';
  var publicPhrase = string1 + " " + secret + " " + string2;

  $("#answer").append(publicPhrase);
};

/********** Closure *********/

var returnsFunction = function () {
  var word = 'I can see inside'
  return function(){ console.log('BOOP! ' + word) }
}

var word = 'I can see outside'

var newBooper = returnsFunction()
newBooper() // what does this log? why?

var returnsFunction = function () {
  var number = 5
  return function(){ console.log( "The number is: " + number) }
}

var number = 4
var fn = returnsFunction()
fn() // what will this log? why?

var runner = function(func){
  var number = 3
  func()
}

runner(fn) // what will this log? why?

/**************** Multiplies ***************/

var multipliesBy = function(num1){
  return function(num2) {
    return num1 * num2;
  }
}

var times5 = multipliesBy(5)


var times10 = multipliesBy(10)
