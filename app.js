"use strict"

function changeClick() {
	const input = document.querySelector(".input").value;
	if (!input) {
		return;
	}
	document.querySelector(".panel").innerText = input;
	document.querySelector(".input").value = "";
}