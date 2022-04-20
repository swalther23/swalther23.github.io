var b1 = document.getElementById("Mustang");
var b2 = document.getElementById("TBird");
var b3 = document.getElementById("F150");
var b4 = document.getElementById("Chevelle");
var b5 = document.getElementById("Nova");
var b6 = document.getElementById("Cuda");
var b7 = document.getElementById("Gremlin");
var b8 = document.getElementById("K10");
var b9 = document.getElementById("Bronco");
var b10 = document.getElementById("SNX");
var image = document.getElementById("image1");

function changeMustang() {
	image.src = "67Mustang";
}
function changeTBird() {
	image.src = "65ThunderBird";
}
function changeF150() {
	image.src = "79F150";
}
function changeChevelle() {
	image.src = "69Chevelle";
}
function changeNova() {
	image.src = "69Nova";
}
function changeGremlin() {
	image.src = "Gremlin";
}
function changeK10() {
	image.src = "84K10";
}
function changeBronco() {
	image.src = "79Bronco";
}
function changeCuda() {
	image.src = "71Cuda";
}
function changeSNX() {
	image.src = "SNX";
}

b1.addEventListener("click" , changeMustang)
b2.addEventListener("click" , changeTBird)
b3.addEventListener("click" , changeF150)
b4.addEventListener("click" , changeChevelle)
b5.addEventListener("click" , changeNova)
b6.addEventListener("click" , changeCuda)
b7.addEventListener("click" , changeGremlin)
b8.addEventListener("click" , changeK10)
b9.addEventListener("click" , changeBronco)
b10.addEventListener("click" , changeSNX)