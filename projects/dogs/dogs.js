var puppyObject = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'https://i.pinimg.com/originals/70/bd/e5/70bde558835ff0d2b29154150a2a784c.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}]






// 1. Iterate over puppyObject and log each dog's name
puppyObject.forEach(function(puppy){
  console.log(puppy.name)
})


// 2. Iterate over puppyObject and add all the toys to a new allToys array
var allToys = []

puppyObject.forEach(function(puppy){
  allToys = allToys.concat(puppy.toys)
})
console.log(allToys)
// 3. Write a function that takes an array of dogs and a toy as an input and returns the name of the dog that owns that toy.
var toyOwner = function (dogArray, dogToy){
  var dogName = ''
  dogArray.forEach(function(puppy) {
    for (var i = 0; i < puppy.toys.length; i++) {
      if(puppy.toys[i] === dogToy) {
        dogName = puppy.name
      }
    }
  })
  return dogName
}

var dogName1 = toyOwner(puppyObject, 'bone')

console.log ('dogNmae1',dogName1)
// 4. Using jQuery, place the pictures of each dog on a web page with its name underneath.
puppyObject.forEach(function(puppy){
  var puppyDiv = "<div><img src=" + puppy.picture + "><p>" + puppy.name + "</p><div>"
  $('.doggie-div').append(puppyDiv)
})
