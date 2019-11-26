document.querySelector('html').classList.remove('no-js');
document.querySelector('html').classList.add('js');

function onReady(callback) {
	var intervalId = window.setInterval(function() {
		if (document.getElementsByTagName('body')[0] !== undefined) {
			window.clearInterval(intervalId);
			callback.call(this);
		}
	}, 250);
}

onReady(function() {
	document.querySelector('body').classList.add('loaded');
});

var el = document.querySelector('.nav-toggle');
el.onclick = function() {
	document.querySelector('body').classList.toggle('open');
	// document.querySelector('.burger').classList.toggle('open');
}

var el = document.querySelector('.nav-close');
el.onclick = function() {
	document.querySelector('body').classList.remove('open');
	// document.querySelector('.burger').classList.toggle('open');
}