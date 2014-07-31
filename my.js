function DOMLoaded(){
	
	//var myinterval = window.setInterval(
	//
	//	function() {
	//		if(PhoneGap.available){
	//			window.clearInterval(myinterval);
	//			phonegapLoaded();
	//		}
	//	}, 500
	//);
	document.addEventListener("deviceready", phonegapLoaded, false);
}

function phonegapLoaded(){
	
	//$(function() {
	//	
	//	$("body").append("<h1>DEVICE is ready!</h1>");
	//});
	navigator.notification.alert(
		'Hello World',
		dismissed,
	);
}