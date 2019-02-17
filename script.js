var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		}
}

function toggleDoneClass () {
	this.classList.toggle("done");
}


function clickList (){
	var items = ul.children;
	for (var i=0; i<items.length; ++i){
	items[i].addEventListener("click", toggleDoneClass);}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", clickList);

