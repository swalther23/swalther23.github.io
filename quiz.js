function question1() {
	if (document.getElementById("answer1").value == "Texas"){
	document.getElementById("checkq1").innerHTML = "CORRECT";
} else {
	document.getElementById("checkq1").innerHTML = "WRONG";
}
}
	document.getElementById("check1").addEventListener ("click", question1)