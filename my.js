function DOMLoaded(){
	
	document.addEventListener("deviceready", phonegapLoaded, false);
}

function phonegapLoaded(){
	
	$(function() {
		
		$("body").append("<h1>DEVICE is ready!</h1>");
	});
}