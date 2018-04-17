//Binding the function
window.onload = function () {
    //Adding function call to the elements on change event.
    document.getElementById("listSelector").addEventListener("change", populateContainer);
}

function findCarFunc() {
    //Obtains the value of current selected
    var listObj = document.getElementById("listSelector").value;
    //return string value.
    return listObj;
}

function populateContainer() {
    //create target to append element too.
    var target = document.getElementById("target");
    //obtain the string from the onchange event. is this recursion?
    var str = findCarFunc();
    //Append the events value associated element ID and then append as a child to target.

    //Does the target node already have a child.
    if (target.firstChild) {
      //If it does, append it back onto the grid.
      document.getElementById("gridAds").appendChild(target.firstChild);
    }

    //Append target onto target node.
    target.appendChild(document.getElementById(str));
}

function myFunction2() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};
