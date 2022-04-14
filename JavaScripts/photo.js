var b1 = document.getElementById("Mustang");
var b2 = document.getElementById("TBird");
var b3 = document.getElementById("F-150");
var b4 = document.getElementById("Chevelle");
var b5 = document.getElementById("Nova");
var image = document.getElementById("image1");

function changeMustang() {
	image.src = "Images/67Mustang";
}
function changeTBird() {
	image.src = "Images/65ThunderBird";
}
function changeF150() {
	image.src = "Images/79F-150";
}
function changeChevelle() {
	image.src = "Images/69Chevelle";
}
function changeNova() {
	image.src = "Images/69Nova";
}
b1.addEventListener("click" , changeMustang)
b2.addEventListener("click" , changeTBird)
b3.addEventListener("click" , changeF150)
b4.addEventListener("click" , changeChevelle)
b5.addEventListener("click" , changeNova)