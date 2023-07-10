console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('submit');
	alert("Form submitted successfully")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function compliment(){
	alert('You are awesome')
}