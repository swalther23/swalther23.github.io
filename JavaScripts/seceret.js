var enteredPass; 
function password1() {
	enteredPass = document.getElementById("password").value;
	if (enteredPass == "1234"){
	document.getElementById("check").innerHTML = "ACCESS GRANTED"
	window.location="mainhub.html";
} else {
	document.getElementById("check").innerHTML = "The Password " + document.getElementById("password").value + " was the wrong password";
}
}
document.getElementById("verify").addEventListener("click", password1)