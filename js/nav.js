
//Assigning function in jquery.
$(document).ready(function() {
//binding on click event to function call
$(".burger-nav").on("click", function() {
  //toggle class on target ul element. 
    $("header nav ul").toggleClass("open");

});

});
