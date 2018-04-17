/**
 * Created by t7169253 on 27/03/2018.
 */

/*
 Description:
 This website is for the ICA group website product

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

var navbar = document.getElementById("myTopnav2");
var sticky = navbar.offsetTop;

// Make menu burger button
function myFunction2() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};
