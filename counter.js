var count = 0;


function reset() {
	count = count *0;
	document.getElementById("number").innerHTML = count;
	if (count == 0) {
		document.getElementById("number").style.color = "BLACK";
	}
}
function minus() {
	count = count -1;
	document.getElementById("number").innerHTML = count;
	
}
function plus() {
	count = count +1;
	document.getElementById("number").innerHTML = count;
	if (count > 10) {
		document.getElementById("number").style.color = "RED";
	}
}
function plusfive() {
	count = count +5;
	document.getElementById("number").innerHTML = count;
	if (count > 10) {
		document.getElementById("number").style.color = "RED";
	}
}
function minusfive() {
	count = count -5;
	document.getElementById("number").innerHTML = count;
}
function timestwo() {
	count = count *10;
	document.getElementById("number").innerHTML = count;
}
function dividedbytwo() {
	count = count /2;
	document.getElementById("number").innerHTML = count;
}


document.getElementById("reset").addEventListener("click", reset);
document.getElementById("minusone").addEventListener("click", minus);
document.getElementById("plusone").addEventListener("click", plus);
document.getElementById("minusfive").addEventListener("click", minusfive);
document.getElementById("plusfive").addEventListener("click", plusfive);
document.getElementById("dividedbytwo").addEventListener("click", dividedbytwo);
document.getElementById("timestwo").addEventListener("click", timestwo);