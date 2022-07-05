function expand(){
    // NOTE: for some reason the onClick events do not work on the first try. I could not figure out why this happens,
    // however all onClick events after the first click on any button work perfectly, its just the first time after 
    // you load the page for some reason it needs a double click. I suspect it has something to do with my implementation
    // of said functions in both this JS file and the original HTML file but I do not have the knowledge on how to fix them.
    var exp = document.getElementsByClassName("expandable");
    var i;
    for (i = 0; i < exp.length; i++){
        exp[i].onclick = function(){
            this.classList.toggle("active")
            var element = this.nextElementSibling;
            if (element.style.maxHeight){
                element.style.maxHeight = null;
            }
            else {
                element.style.maxHeight = 300 + "px";
            }
        };
    }
}