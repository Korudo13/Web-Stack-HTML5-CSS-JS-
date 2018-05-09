function startMe(){
	//make the element editable
	var element = document.getElementById('editMe');
	element.contentEditable = true;
	element.focus();
}

function stopMe(){
	//return the element to normal
	var element = document.getElementById('editMe');
	element.contentEditable = false;

	//show the markup in the message box.
	alert('This is what I wrote: \n' + element.innerHTML);
}


