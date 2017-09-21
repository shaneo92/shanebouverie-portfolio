var contactArray = [
  '<li><a href="https://www.linkedin.com/in/shane-bouverie-3256a747">Linkedin</a></li>',
  '<li><a href="https://www.linkedin.com/in/shane-bouverie-3256a747">Different Profile</a></li>',
  '<li><a href="https://www.linkedin.com/in/shane-bouverie-3256a747">Different Profile</a></li>',
  '<li><a href="https://www.linkedin.com/in/shane-bouverie-3256a747">Different Profile</a></li>',
]


var contactObject = {
    "name": {
        "firstName": "Professor",
        "lastName": "Chaos"
    },
    "email": "professor@professorchaos.com",
    "twitter": "@ProfChaos",
    "quote": "Prepare to meet thy doom"
}

contactObject['phone'] = '123456789'
contactObject['facebook'] = 'my facebook'

var quote = 'Carpe Diem'

contactObject['quote'] = quote

contactObject.quote = [
    "Prepare to meet thy doom",
    "Nobody expects Professor Chaos",
    "Bow before the power of the DARK SIDE"
]

// contactObject.getGithub = function() {
//   return contactObject.github
// }


var elementLister = function(contactElement) {
  var listString = "<li> " + contactElement + "</li>";

  if (Array.isArray(contactElement)) {
    listString ="<ol>"

    contactElement.forEach (function(element) {
      listString += "<li>" + element + "</li>";
    })

    listString += "</ol>"
  }else if(typeof contactElement === "object"){
    listString = "<li>";

    for(var element in contactElement){
      listString += contactElement[element] + " ";
    }

    listString += "</li>";
  }

  $(".second-list").append(listString);
};

// For in loop
// for(var contactType in contactObject){
//   elementLister( contactObject[contactType] );
// }
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

// forEach
contactArray.forEach(function(item){
  $('.second-list').append(item);
})
