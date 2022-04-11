
function password1() {
	if (document.getElementById("password").value == "1234"){
	document.getElementById("check").innerHTML = "ACCESS GRANTED"
	window.location="mainhub.html";
} else {
	document.getElementById("check").innerHTML = "ACCESS DENIED"
}
document.getElementById("verify").addEventListener("click", password1)
//error is not an issue