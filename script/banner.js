var images = [
"1.png",
"2.png",
"3.png"
];
var currentIndex = 1;
var indicator = document.querySelectorAll("#img_idx ul li");
indicator[0].style.backgroundColor = '#00B6FF';

function changeBanner() {
var banner = document.getElementById("banner");

indicator[currentIndex].style.backgroundColor = '#00B6FF';
if (currentIndex != 0){
	indicator[currentIndex - 1].style.backgroundColor = 'grey';
	if ((currentIndex + 1) < images.length){
	banner.innerHTML = "<img class='sideL' src='res/banner/" + images[currentIndex - 1] + "' /><img class='mp' src='res/banner/" + images[currentIndex] + "' /><img class='side' src='res/banner/" + images[currentIndex + 1] + "' />";
	}
	else{
	banner.innerHTML = "<img class='sideL' src='res/banner/" + images[currentIndex - 1] + "' /><img class='mp' src='res/banner/" + images[currentIndex] + "' /><img class='side' src='res/banner/" + images[0] + "' />";
	}
}
else{
	indicator[images.length - 1].style.backgroundColor = 'grey';
	banner.innerHTML = "<img class='sideL' src='res/banner/" + images[images.length - 1] + "' /><img class='mp' src='res/banner/" + images[currentIndex] + "' /><img class='side' src='res/banner/" + images[currentIndex + 1] + "' />";
}
currentIndex++;
if(currentIndex == images.length) {
currentIndex = 0;
}
}
window.onload = function() {
setInterval(changeBanner, 5000);
};