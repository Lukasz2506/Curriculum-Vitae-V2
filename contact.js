// github hover function

var gitHubIcon = document.querySelector(".gitHubIcon");
console.log(gitHubIcon);

gitHubIcon.addEventListener("mouseover", function() {
    this.src="./images/github.png"
})

gitHubIcon.addEventListener("mouseout", function() {
    this.src="./images/github-mark.png"
})