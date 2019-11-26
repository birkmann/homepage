document.querySelector('html').classList.remove('no-js');

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