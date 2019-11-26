document.querySelector('html').classList.remove('no-js');

window.onload = function(){
	document.querySelector('body').classList.add('loaded');
}, 250;