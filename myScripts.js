//Function which shows the hidden divs for the hobbies page
function onButtonClick(i){
    console.log(imagesEls[i].src)
    if (imagesEls[i].src.includes("images/down-chevron.png")){
        imagesEls[i].setAttribute("src", "images/up-chevron.png");
        hobbyTextEl = document.getElementsByClassName("hobbiesContent")[i]
        hobbyTextEl.style.display = "block";
        console.log("hi");
    } else {
        imagesEls[i].setAttribute("src", "images/down-chevron.png");
        console.log("hello");
        hobbyTextEl = document.getElementsByClassName("hobbiesContent")[i]
        hobbyTextEl.style.display = "none";
    }
}

//Adds events to all my hobbies
hobbiesEls = document.getElementsByClassName("hobbiesContainer");
imagesEls = document.getElementsByClassName("arrowImage");

for (let i = 0; i < hobbiesEls.length; i++){
    console.log(i);
    hobbiesEls[i].addEventListener("click", function(){ onButtonClick(i); });
}
