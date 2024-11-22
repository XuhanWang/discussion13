var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay= false;
	video.loop = false
	console.log("Autoplay is set to" + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is" + video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.//
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log("Current location" + video.currentTime);
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Going back to beginning");
	}
	});
