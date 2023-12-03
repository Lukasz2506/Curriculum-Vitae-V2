// onmouse on avatar

var arrow = document.querySelector("#arrow");
var arrowHover = "./images/arrowHover.png"
var arrowOut = "./images/arrow.png"
console.log(arrow);

arrow.addEventListener("mouseover", function() {
    arrow.src = arrowHover;
});

arrow.addEventListener("mouseout", function() {
    arrow.src = arrowOut;
});

arrow.addEventListener("click", function() {
    arrow.src = arrowHover;
    setTimeout(function() {
        arrow.src = arrowOut;
    }, "300")
});

