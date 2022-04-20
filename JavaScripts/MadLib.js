var text = document.getElementById("Text");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");
var input6 = document.getElementById("input6");
var input7 = document.getElementById("input7");
var input8 = document.getElementById("input8");
var input9 = document.getElementById("input9");
var input10 = document.getElementById("input10");
var input11 = document.getElementById("input11");
var input12 = document.getElementById("input12");
var input13 = document.getElementById("input13");
var input14 = document.getElementById("input14");
var input15 = document.getElementById("input15");
function MadLib() {
	text.innerHTML = "Last month, I went to Disney World with " + input1.value + " We traveled for" + input2.value + " by" + input3.value + " Finally, we arrived and it was very" + input4.value + " There were" + input5.value + " people" + input6.value + " everywhere. Therewere also people dressed up in" + input7.value + " costumes" + input8.value + " I wish it had been more" + input9.value + ", but we" + input10.value + " anyway. Wealso went on a" + input11.value + " ride the called Magic" + input12.value + " nearly fell off a ride and had" + input13.value + ". Later, we went to the hotel and" + input14.value + ". Next year, I want to go to" + input15.value + " where we can";
}
document.getElementById("generate").addEventListener("click", MadLib)