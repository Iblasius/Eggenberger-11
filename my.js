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
	
	//$(function() {
	//	
	//	$("body").append("<h1>DEVICE is ready!</h1>");
	//});
	navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
	);
}