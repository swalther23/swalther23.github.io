var b2 = document.getElementById("TBird");
var b1 = document.getElementById("Mustang");
var image = document.getElementById("image1");

function changeMustang() {
	image.src = "Images/67Mustang";
}
function changeTBird() {
	image.src = "Images/65ThunderBird";
}
b1.addEventListener("click" , changeMustang)
b2.addEventListener("click" , changeTBird)