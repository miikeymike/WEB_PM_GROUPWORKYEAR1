/**
 * Created by t7169253 on 27/03/2018.
 */


// Testing to see if Javascript file link works

var jsTest = "Javascript Resource Working &#10004;";
document.getElementById("testBox").innerHTML = jsTest;

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}