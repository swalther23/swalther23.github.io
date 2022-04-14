var q1 =document.getElementById("a1");
var q2 =document.getElementById("a2");
var q3 =document.getElementById("a3");
var q4 =document.getElementById("a4");
var q5 =document.getElementById("a5");
var q6 =document.getElementById("a6");
var q7 =document.getElementById("a7");
var q8 =document.getElementById("a8");
var q9 =document.getElementById("a9");
var q10 =document.getElementById("a10");
var submit =document.getElementById("check1");
var result = 0;
var score = document.getElementById("Score")
function calculate() {
	result = 0
	if (q1.value == "Texas"){
		result = result +1;
	}
	if (q2.value == "Ford Mustang"){
		result = result +1;
	}
	if (q3.value == "North America") {
		result = result +1;
	}
	if (q4.value == "Pres. Biden") {
		result = result +1;
	}
	if (q5.value == "WaterBoy") {
		result = result +1;
	}
	if (q6.value =="Ferdinand Megellan"){
		result = result +1;
	}
	if (q7.value == "4") {
		result = result +1;
	}
	if (q8.value == "Elon Musk") {
		result = result +1;
	}
	if (q9.value == "Samsung") {
		result = result +1;
	}
	if (q10.value == "Horse") {
		result = result +1;
	}
	score.innerHTML = result;
}
submit.addEventListener("click" , calculate)
