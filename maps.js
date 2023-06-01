console.log("Test yandex panorama v0.1: OK.")
ymaps.ready(init);
var x0 = 55.790927;
    y0 = 49.114453;
function init() {
	if (!ymaps.panorama.isSupported) {
		console.log("API maps error.");
	}
	console.log("ymaps: OK");
	ymaps.panorama.locate([x0,y0]).done(
	isPanoramaFound,
	errorHandled()
	);
}

function isPanoramaFound() {
	console.log("isPanoramasFound: Callid.");
	
}
function errorHandled() {
	console.log("errorHandled: Callid.");
	
}
