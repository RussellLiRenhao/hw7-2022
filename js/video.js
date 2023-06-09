var video = document.querySelector("#player1")



window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.loop=false;
	video.autoplay=false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
    console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"


});

document.querySelector("#pause").addEventListener("click",function() {
	console.log("pause video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate = video.playbackRate*0.9;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate = video.playbackRate/0.9;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead 10 seconds");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Current location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/unmute video");
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Change volume");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Apply old school style");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove old school style");
	video.classList.remove("oldSchool");
});

