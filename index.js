var imageList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var counter = 0;

// Carousel for left button

var left_btn = document.querySelector(".left");

left_btn.addEventListener("click",function(){
    console.log(this);
    console.log(counter);
    if (counter > 0) {
        counter --
    } else if (counter == 0) {
        counter = 8;
    } 
    var imagePath = `./images/i${imageList[counter]}.jpg`
    document.querySelector(".adventure-photo").src=imagePath;
})


// Carousel for right button

var right_btn = document.querySelector(".right");

right_btn.addEventListener("click",function(){
    console.log(this);
    console.log(counter);
    var imagePath = `./images/i${imageList[counter]}.jpg`
    document.querySelector(".adventure-photo").src=imagePath;
    counter++
    if (counter > imageList.length-1) {
        counter = 0;
    }
   
})







