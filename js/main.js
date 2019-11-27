document.querySelector('html').classList.remove('no-js');
document.querySelector('html').classList.add('js');

function onReady(callback) {
	var intervalId = window.setInterval(function() {
		if (document.getElementsByTagName('body')[0] !== undefined) {
			window.clearInterval(intervalId);
			callback.call(this);
		}
	}, 500);
}

onReady(function() {
	document.querySelector('body').classList.add('loaded');
});

var el = document.querySelector('.nav-toggle');
el.onclick = function() {
	document.querySelector('body').classList.toggle('open');
}

/*
document.querySelector('nav.main a').onclick = function(ev) {
	ev.preventDefault();
	var link = this.getAttribute("href");
	setTimeout("location.href = '" + link + "';", 1000);
}
*/

document.querySelectorAll('nav.main a').forEach(function(element){
	element.addEventListener('click',function(e){
		e.preventDefault();
		var link = this.getAttribute("href");
		setTimeout("location.href = '" + link + "';", 500);
		document.querySelector('body').classList.add('leave');
	});
});