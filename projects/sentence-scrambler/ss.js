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
