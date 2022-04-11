var q1 =document.getElementById("a1");

function question1() {
	if (q1.value == "Texas"){
	document.getElementById("checkq1").innerHTML = "CORRECT";
} else {
	document.getElementById("checkq1").innerHTML = "WRONG";
}
}
	document.getElementById("check1").addEventListener ("click", question1)