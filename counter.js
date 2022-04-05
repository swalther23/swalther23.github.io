var count = 0;

function minus() {
	count = count -1;
	document.getElementById("number").innerHTML = count;
}
function plus() {
	count = count +1;
	document.getElementById("number").innerHTML = count;
}

document.getElementById("minusone").addEventListener("click", minus);
document.getElementById("plusone").addEventListener("click", plus);