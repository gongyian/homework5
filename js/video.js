// Add js here.
let video = document.getElementById("videoplayer");
video.autoplay = false;
video.loop = false;

let playButton = document.getElementById("play");
playButton.addEventListener("click", playVideo);

let pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", pauseVideo);

let slowButton = document.getElementById("slower");
slowButton.addEventListener("click", slowVideo);

let fastButton = document.getElementById("faster");
fastButton.addEventListener("click", fastVideo);

let skipButton = document.getElementById("skip");
skipButton.addEventListener("click", skipVideo);

let muteButton = document.getElementById("mute");
muteButton.addEventListener("click", muteVideo);




function playVideo() {
    video.play();
}


function pauseVideo() {
    video.pause();
}



function slowVideo(){

    if(video.playbackRate == 0.5){
        alert("Video is at slowest speed!");
    }
    else if(video.playbackRate == 1){
        video.playbackRate = 0.5;
    }
    else if(video.playbackRate == 2){
        video.playbackRate = 1;
    }

}

function fastVideo(){

    if(video.playbackRate == 2){
        alert("Video is at fastest speed!");
    }
    else if(video.playbackRate == 1){
        video.playbackRate = 2;
    }
    else if(video.playbackRate == 0.5){
        video.playbackRate = 1;
    }

}

function skipVideo() { 
	if(video.currentTime + 15 > video.duration){
		video.currentTime = 0;}
    else if (video.currentTime + 15 <video.duration){
    video.currentTime=video.currentTime + 15;}
} 

function muteVideo(){
    if(muteButton.innerText == "Mute"){
        video.muted = true;
        muteButton.innerHTML = "Unmute";
    }
    else if(muteButton.innerText == "Unmute"){
        video.muted = false;
        muteButton.innerText = "Mute";
    }
}

let volumeSlider = document.getElementById("slider");
volumeSlider.addEventListener("change", volumeVideo);

function volumeVideo(){

var value = document.getElementById("slider").value;
console.log(value);
video.volume = value/100;

let volumeContext = document.getElementById("volume");
volumeContext.innerHTML = value;

}

