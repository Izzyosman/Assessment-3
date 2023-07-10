let color = document.getElementById("color")

color.addEventListener("click", handleColor)

function handleColor(evt) {
	evt.preventDefault();
	
	// console.log('submit');
	alert("pink")
}

let place = document.getElementById("place")

place.addEventListener("click", handleplace)

function handleplace(evt) {
	evt.preventDefault();
	
	// console.log('submit');
	alert("Italy")
}


let ritual = document.getElementById("ritual")

ritual.addEventListener("click", handleritual)

function handleritual(evt) {
    evt.preventDefault();

    // console.log('submit');
    alert("nightime skincare routine")
}
