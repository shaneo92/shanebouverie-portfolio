var contactArray = [
  '<li><a href="https://github.com/shaneo92">Github</a></li>',
  '<li><a href="https://www.linkedin.com/in/shane-bouverie-3256a747">Linkedin</a></li>'
]

//While Loop
// var i = 0
//
// var appendStrings = function(arr, element){
// while (i < arr.length) {
//   $('.second-list').append('<' + element + '>' + arr[i] +  '</' + element + '>')
//   i++
//  }
// }
//
// appendStrings(contactArray, 'li')


// //For Loop
// var appendStrings = function(arr, element){
// for (var i = 0; i < arr.length; i++) {
//   $('.second-list').append('<' + element + '>' + arr[i] +  '</' + element + '>')
//  }
// }
//
// appendStrings(contactArray, 'li')

//forEach
contactArray.forEach(function(item){
  $('.second-list').append(item)
})
