'use strict';

	

let doThis = function()
{
	let x = document.getElementById('abc');
	x.innerHTML = 'HelloWorld!';
}

window.addEventListener("load",  doThis);