function submit(){
    // update name
    var name = document.getElementById("fname").value;
    document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
    
    // update paragraph text
    document.getElementById("oldP").innerHTML = document.getElementById("newP").value;

    // update page color
    if (document.getElementById("colorchange").value == "r"){
        document.querySelector("body").style = "background-color:red;";
    }
    else if (document.getElementById("colorchange").value == "g"){
        document.querySelector("body").style = "background-color:green;";
    }
    else if (document.getElementById("colorchange").value == "b"){
        document.querySelector("body").style = "background-color:blue;";
    }
    else if (document.getElementById("colorchange").value == "w"){
        document.querySelector("body").style = "background-color:white;";
    }
    else { //default white
        document.querySelector("body").style = "background-color:white;";
    }
}