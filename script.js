var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems;
var deleteButtons = document.getElementsByClassName("delete");


//FUNCTIONS
function addListItemListeners() {
	listItems = document.getElementsByTagName("li");
	for (li of listItems) {
		li.addEventListener("click", toggleListItem);	
		li.firstElementChild.addEventListener("click", deleteListItemAfterClick);
	}
}


function inputLength() {
	return input.value.length;
}


function createListElement() {
	//new list item
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));		
	input.value = "";

	//delete button for new list item
	var btn = document.createElement("button");
	btn.classList.add("delete");
	btn.textContent = "Delete";
	//add btn to list item
	li.appendChild(btn);

	//add list item to ul
	ul.appendChild(li);	

	//reset event listeners and li html collection
	addListItemListeners();
}


function toggleListItem(event) {
	event.target.classList.toggle("done");	
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

function deleteListItemAfterClick() {
   //console.log(event);
   //event.target.parentNode.parentNode.removeChild();
   event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}



//EVENT LISTENERS
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

addListItemListeners();
