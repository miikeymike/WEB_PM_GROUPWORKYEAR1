/*
 Description:
 This website is for the ICA group website product
 Individual 60%

 Coded by: Michael Watterston T7169253

 Group Members
 Michael Watterston
 Simon Dean
 Liam
 Miles

 gitHub: https://github.com/miikeymike/WEB_PM_GROUPWORKYEAR1.git
*/

// Testing to see if Javascript file link works

//var jsTest = "Javascript Resource Working &#10004;";
//document.getElementById("testBox").innerHTML = jsTest;


// Sticky Menu for Index.html

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

// Make menu burger button
function myFunction2() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};
