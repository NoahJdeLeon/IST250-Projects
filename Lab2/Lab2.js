// JavaScript source code
function getFood() {
    var choice = document.getElementById("food").value;
    console.log(choice);
    var firstName = document.getElementById("fName").value;
    document.getElementById("message").innerHTML = firstName +
        " has chosen " + choice +
        " for lunch today!";
    document.body.style.backgroundColor =choice;
    
}