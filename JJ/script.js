var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");
var binlist = document.getElementById("bin");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
function createBinElement(){
	var binimg = document.createElement("IMG");
	binimg.setAttribute("class","binicon");
	binimg.setAttribute("src","https://cdn3.iconfinder.com/data/icons/cleaning-icons/512/Trash_Can-512.png");
	binimg.setAttribute("alt","bin");
	binimg.setAttribute("height","20px");
	binimg.setAttribute("width", "20px");
	var libin =document.createElement("li");
	libin.setAttribute("class",ul.lastElementChild.innerText);
	libin.appendChild(binimg);
	binlist.appendChild(libin);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		createBinElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		createBinElement();
	}
}

function toggleDoneClass () {
	this.classList.toggle("done");
}

function removeListAfterClickBin (){
	this.parentNode.removeChild(this);
	var linkedclass = this.className;
	var items = ul.children;
	for(var i=0;i<items.length;i++)
	if (items[i].innerText === linkedclass){
	items[i].parentNode.removeChild(items[i]);
	}
}

function clickList (){
	var items = ul.children;
	for (var i=0; i<items.length; ++i){
	items[i].addEventListener("click", toggleDoneClass);}
}

function clickBin (){
	bins = binlist.children;
	for (var i=0; i<bins.length; ++i){
	bins[i].addEventListener("click", removeListAfterClickBin);}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", clickList);

binlist.addEventListener("click", clickBin);