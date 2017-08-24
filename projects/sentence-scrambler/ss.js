var stringPrinter = function(starterString){
  $('#output').append(starterString)
}

var funnySentence = function(noun, adjective, verb, adverb) {
  var sentence = `<p>The ${adjective} ${noun} ${verb} ${adverb}.</p>`
  stringPrinter(sentence)
}

// Random Word Generator
// Remove Inputs

var randomNumBetween0and4 = function () {
  var randomNum = Math.floor(Math.random() * 4)
  return randomNum
}

var randomWordGenerator = function() {
   var nouns = ['car', 'cat', 'table', 'tv', 'eclipse']
   var adjectives = ['quiet', 'loud', 'brass', 'tiny', 'cloudy']
   var verbs = ['stops', 'ran', 'jumped', 'kicked', 'swam']
   var adverbs = ['loudly', 'softly', 'quickly', 'quietly', 'positively']
   var randomWordObject = {
     randomNoun : nouns [randomNumBetween0and4()],
     randomAdjective : adjectives[randomNumBetween0and4()],
     randomVerb : verbs [randomNumBetween0and4()],
     randomAdverb : adverbs [randomNumBetween0and4()],



   }
   return randomWordObject
}

var autoFunnySentence = function () {
  var randomWordObject = randomWordGenerator()
  funnySentence(randomWordObject.randomNoun, randomWordObject.randomAdjective, randomWordObject.randomVerb, randomWordObject.randomAdverb)
}

autoFunnySentence()

var fn = function () {
  console.log('heeey')
}

// Native JS event listener
// Use below if using multiple times on site
document.querySelector('#target').addEventListener('click', fn);

// Below is used for single event function
document.querySelector('#target').addEventListener('click', function(){
  console.log('Same Deal');
});

// Jquery event listener
$('div').on('click', function() {
  console.log('A div has been clicked!')
})

$('p').click (function(){
  $('p').show().css('color', 'red').text('boom goes the dynamite!')
})

// // Mouseover Listener
// $('li').on('mouseover', function(event){
//   var target = event.target
//   $(target).addClass('highlighted')
// })
//
// $('li').on('mouseleave', function(event){
//   var target = event.target
//   $(target).removeClass('highlighted')
// })

// Mouseover Listener
$('li').on('mouseover', function(){
  $(this).addClass('highlighted')
})

$('li').on('mouseleave', function(){
  $(this).removeClass('highlighted')
})
