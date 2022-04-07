
function password1() {
	if (document.getElementById("password").value == "1234"){
	document.getElementById("check").innerHTML = "ACCESS GRANTED"
} else {
	document.getElementById("check").innerHTML = "ACCESS DENIED"
}
	
}
function moveon(){
        window.location='index.html';
    }
document.getElementById("verify").addEventListener("click", password1)
document.getElementById("moveon").addEventListener("click", moveon)