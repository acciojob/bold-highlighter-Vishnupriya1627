function highlight() {
    //Write your code here
	let strong = document.querySelectorAll("strong");
	strong.forEach((element)=>{
		element.style.color = "rgb(0, 128, 0)"
	})
}


function return_normal() {
    //Write your code here
	let elements = document.querySelectorAll("strong");
	elements.forEach((element)=>{
		element.style.color = "rgb(0, 0, 0)"
	})
    
}
