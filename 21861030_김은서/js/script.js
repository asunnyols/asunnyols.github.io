// console.log('load')


var $cursorDot = document.querySelector('#cursor-dot');
var $cursorBG = document.querySelector('#cursor-bg');
var $progress = document.querySelector('#progress');

var $list = document.querySelector("#list");
var $listEl = document.querySelectorAll("a");


window.addEventListener("mousemove", OnMouseMoveWindow);

function OnMouseMoveWindow(e) {
   
    console.log(e);
    var posX = e.pageX, posY = e.pageY;
    TweenMax.to($cursorDot, 0.15, {css : {top : posY, left : posX}, ease: Quad.easeInOut});
    TweenMax.to($cursorBG, 0.1, {css : {top : posY, left : posX}, ease: Quad.easeInOut});
    TweenMax.to($progress, 0.15, {css : {top : posY, left : posX}, ease: Quad.easeInOut});
}
for(var i = 0;i < $listEl.length; i++) {
    $listEl[i].addEventListener("mouseenter", function(){
        // console.log("enter");
        if(!$cursorDot.classList.contains("acitve")){
            $cursorDot.classList.add("active");
        }
        if(!$cursorBG.classList.contains("acitve")){
            $cursorBG.classList.add("active");
        }
        if(!$progress.classList.contains("active")){
            $progress.classList.add("active");
        }
    })
    $listEl[i].addEventListener("mouseleave", function(){
        // console.log("leave");
        if(!$cursorBG.classList.contains("acitve")){
            $cursorBG.classList.remove("active");
        }
        if(!$progress.classList.contains("active")){
            $progress.classList.remove("active");
        }
    })
}

var bleep = new Audio();
bleep.src ="mp4/ocean eyes.mp3";

