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

// alert dialog dismissed
    function alertDismissed() {
        // do something
    }

function phonegapLoaded(){
	
	$(function() {
		
		$("body").append("<h1>DEVICE is ready!</h1>");
		$("body").append("<button class='ui-button' onClick='getPic()'></button>");
	});
	//navigator.notification.alert(
    //'You are the winner!',  // message
    //alertDismissed,         // callback
    //'Game Over',            // title
    //'Done'                  // buttonName
	//);
}

function getPic(){

	navigator.camera.getPicture(onSuccess, onFail, {
		quality: 40,
		destinationType: Camera.DestinationType.FILE_URI,
		targetWidth: 400,
		targetHeight: 400
		)};
}

function onSuccess(imageURI){
	$("body").append("<img src='" + imageURI + "'>");
}

function onFail(message){
	alert("Das Foto konnte nicht geladen werden: " + message);
}