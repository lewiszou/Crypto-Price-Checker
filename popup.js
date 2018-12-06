/*  Authors: Lewis Zou and Junu Lee
*   Project: Crypto Price Checker
*
*   popup.js
*   This script collapses html items that are coded within it (i.e. "siblings").
*/

/*  Preconditions: None
*   Note that if there is no element with class "collapsible", the script will do nothing.
*/

var coll = document.getElementsByClassName("collapsible");
// Collapse the whole element that has class "collapsible"
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // Select the siblings of the currently selected element
    var content = this.nextElementSibling;
    // Toggle status between blocked and non-blocked
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    });
}


