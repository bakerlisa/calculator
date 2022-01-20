var justEqualed = false;



function calculator(event){
	var lastClickedElement = document.getElementById("answer").innerHTML.slice(-1);
	var show = event.getAttribute("data-tag");

	if(justEqualed == true ){	
		if(show == '/' || show == '*' || show == '+' || show == '-' || show == '%' || show === ''){
			justEqualed = false;
		}else{	
			var getElement = '';
			document.getElementById("answer").innerHTML = '';	
			justEqualed = false;
		}	
	}else{
		var getElement = document.getElementById("answer").innerHTML;
	}	
	

	if(lastClickedElement == '/' || lastClickedElement == '*' || lastClickedElement == '+' || lastClickedElement == '-' || lastClickedElement == '%' || lastClickedElement === '' ){
		lastClickedElementVal = true;
	}else{
		lastClickedElementVal = false;
	}

	if(show == '/' || show == '*' || show == '+' || show == '-' || show == '%' || show === ''){
		showVal = true;
	}else{
		showVal = false;
	}
	
	if((showVal == true) && (lastClickedElementVal == true)){
	}else{
		document.getElementById('answer').innerHTML += show;	
	}
				
	return justEqualed;
}

//if you end with an operator 

function equals(event){
	var lastClickedElement = document.getElementById("answer").innerHTML.slice(-1);
	var getElement = document.getElementById("answer").innerHTML;
	if(lastClickedElement == '/' || lastClickedElement == '*' || lastClickedElement == '+' || lastClickedElement == '-' || lastClickedElement == '%' || lastClickedElement === '' ){

	}else{	
		justEqualed = true;
		var total = eval(getElement);
		document.getElementById('answer').innerHTML = total;
		return justEqualed;
	}	

	
}

function clearAll(event){
	var getElement = document.getElementById("answer").innerHTML;
	justEqualed = false;
	getElement.innerHTML = "";
	document.getElementById('answer').innerHTML = '';	

	return justEqualed;
}

//make object oriented - make sure you're thinking about objects in the right way

