var changeAll = function () {
  $('h1').css('color', 'blue');
  $('body').css('background-color', 'red');
  $('#everything').css('font-size', '120%');
  $('.holder').css('border', '2px solid black');
  $('li').css('font-weight', 'bold');
  $('body').css('color', '#ffffff');
  $('#change-me').text('This stuff is pretty cool dont you think? Wish I had learned this stuff years ago!');
  $('#secret').css('display','none');

}


$('#change-button').click(changeAll);
