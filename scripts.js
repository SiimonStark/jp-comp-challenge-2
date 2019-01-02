function openSlideMenu() {
	document.getElementById('side-menu').style.width = '200px';
	document.getElementById('main').style.marginLeft = '200px';
}

function closeSlideMenu() {
	document.getElementById('side-menu').style.width = '0';
	document.getElementById('main').style.margin = '0';
}

function turnGreen() {
	var open = document.getElementById('open-green').style.color = '#75cb21';
	// if (open === clicked()) {
	// 	console.log('almost working');
	// }
}