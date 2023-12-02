// github hover function

var icons = document.querySelectorAll(".social-media img");
console.log(icons);

//Marked icons list
var imagePathsMouseOver = ["./images/github-mark.png", "./images/linkedin-mark.png"];

//Normal icon list
var imagePathsMouseOut = ["./images/github.png", "./images/linkedin.png"]

//mouseover
for (let i=0; i<icons.length; i++) {
    icons[i].addEventListener("mouseover", () => {
        icons[i].src=imagePathsMouseOver[i];
});
}

//mouseout
for (let i=0; i<icons.length; i++) {
    icons[i].addEventListener("mouseout", () => {
        icons[i].src=imagePathsMouseOut[i];
});
}