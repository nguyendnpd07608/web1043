
function showVideo(){
    document.getElementsByClassName("light")[0].style.display = "block";
    document.getElementById("back").style.display = "block";
    document.getElementById("videoCard").play();
}
function closeVideo(){
    document.getElementsByClassName("light")[0].style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("videoCard").pause();
}
