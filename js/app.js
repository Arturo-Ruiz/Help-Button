const helpButton = document.querySelector("#help-button");

let clicked = false;
let flipped = false;

helpButton.onclick = () => {
	clicked ^= 1;
	flipped ^= 1 & clicked;

	const nextClass      = flipped ? "kf3" : "kf1";
	helpButton.className = clicked ? "kf2" : nextClass;
};
