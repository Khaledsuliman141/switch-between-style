// add the default color from the local storge
document.body.classList.add(localStorage.getItem('newColor') || "green");

var el = document.querySelectorAll(".colors li");
var classesList = [];

//loop elements
for (var i = 0; i < el.length; i=i+1) {

    // get classes List
    classesList.push(el[i].getAttribute('data-color'));

    // the click event

    el[i].addEventListener(
        "click",
        function(){
            document.body.classList.remove(...classesList);
            document.body.classList.add(this.getAttribute("data-color"));

            // save the new style on the local storge
            localStorage.setItem('newColor', this.getAttribute("data-color"));
        },false
    );

}