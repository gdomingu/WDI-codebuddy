$(document).ready(function() {
  var links = $('#container>header a');
  links.hide();
  $('#hamburger').on('click', function(){
    links.toggle('showOrHide');
    $('body').toggleClass('active');

  });
});