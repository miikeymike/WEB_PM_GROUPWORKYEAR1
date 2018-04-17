//function to add class to car specs
//Targets window resize event.

$(document).ready(function(){
    $(".clickDescription").click(function(){
        $(".carTitlehide").addClass("carTitle");
        $(".carTitlehide").removeClass("carTitlehide");

    });
});


//Michaels Function
var yourNavigation = $(".menuItems");
    stickyDiv = "sticky";
    yourHeader = $('.navwrap').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

//Smoth Sroll function
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".smoothScr").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//The next 3 functions are checking the width of viewport on load as to ensure the layout is consistent even if page is not cached.

$(window).ready(function() {
    //Conditional check for application of relevant class.
    if ($(window).width() >= 500) $('.carSpecListL').addClass("carSpecListR");
    //Conditional for removal of amended classes.
    else $('.carSpecListL').removeClass("carSpecListR");
});

$(window).ready(function() {
    //Conditional check for application of relevant class.
    if ($(window).width() >= 500) $('.carAdImgRight').addClass("carAdImg");
    //Conditional for removal of amended classes.
    else $('.carAdImgRight').removeClass("carAdImg");
});

$(window).ready(function() {
    //Conditional check for application of relevant class.
    if ($(window).width() >= 500) $('.addBox2').addClass("addBoxBreak");
    //Conditional for removal of amended classes.
    else $('.addBox2').removeClass("addBoxBreak");
});

//The next 3 functions are checking the width of viewport on the fly and changing the content accordingly.

$(window).resize(function() {
    //Conditional check for application of relevant class.
    if ($(window).width() >= 500) $('.carSpecListL').addClass("carSpecListR");
    //Conditional for removal of amended classes.
    else $('.carSpecListL').removeClass("carSpecListR");
});

//function to add class to nth child
//Targets window resize event.
$(window).resize(function() {
    //Conditional check for application of relevant class.
    if ($(window).width() >= 500) $('.carAdImgRight').addClass("carAdImg");
    //Conditional for removal of amended classes.
    else $('.carAdImgRight').removeClass("carAdImg");
});

//function to add class in order for image to float to left after changes.
//Targets window resize event.
$(window).resize(function() {
    //Conditional check for application of relevant class.
    if ($(window).width() >= 500) $('.addBox2').addClass("addBoxBreak");
    //Conditional for removal of amended classes.
    else $('.addBox2').removeClass("addBoxBreak");
});
