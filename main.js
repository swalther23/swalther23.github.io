function Strawberry() {
	document.getElementById("hello").innerHTML = "Strawberry";
	document.getElementById("hello").style.color = "white";
	document.getElementById("hello").style.backgroundColor = "Blue";
}
function WhyDidyouchangeme() {
	document.getElementById("hello").innerHTML = "Why Did you change me";
	document.getElementById("hello").style.backgroundColor = "yellow";
}
function Thanksforchangingme() {
	document.getElementById("hello").innerHTML = "Thanks for changing me";
	document.getElementById("hello").style.backgroundColor = "hotpink";
}
function Dontclickthatlastbutton() {
	document.getElementById("hello").innerHTML = "Don't click that last button";
	document.getElementById("hello").style.color = "black"
	document.getElementById("hello").style.backgroundColor = "white";
}
function HAHAHAHAYOUCLICKEDME() {
	document.getElementById("hello").innerHTML = "HAHAHAHA YOU CLICKED ME";
	document.getElementById("hello").style.backgroundColor = "red";
}
function brown() {
	document.getElementById("hello").innerHTML = "Brown";
	document.getElementById("hello").style.backgroundColor = "Brown";
}
function Green() {
	document.getElementById("hello").innerHTML = "Green";
	document.getElementById("hello").style.backgroundColor = "Green";
}
function Pink(){
	document.getElementById("hello").innerHTML = "Pink";
	document.getElementById("hello").style.backgroundColor = "pink";
}
function Yellow() {
	document.getElementById("hello").innerHTML = "Yellow";
	document.getElementById("hello").style.backgroundColor = "yellow";
}
function Black() {
	document.getElementById("hello").innerHTML = "Black";
	document.getElementById("hello").style.color = "white"
	document.getElementById("hello").style.backgroundColor = "black";
}

document.getElementById("ClickMe").addEventListener("click", Strawberry);
document.getElementById("button2").addEventListener("dblclick", WhyDidyouchangeme);
document.getElementById("button3").addEventListener("dblclick", Thanksforchangingme);
document.getElementById("button4").addEventListener("click", Dontclickthatlastbutton);
document.getElementById("button5").addEventListener("dblclick", HAHAHAHAYOUCLICKEDME);
document.getElementById("button6").addEventListener("dblclick", brown);
document.getElementById("button7").addEventListener("dblclick", Green);
document.getElementById("button8").addEventListener("dblclick", Pink);
document.getElementById("button9").addEventListener("dblclick", Yellow);
document.getElementById("button10").addEventListener("dblclick", Black);