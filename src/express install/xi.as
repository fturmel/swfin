
function checkLoaded(){
	time += delay;
	
    if ( mc.startUpdate ){
		//loading successful
        clearInterval(id);
		
		mc.redirectURL = _root.MMredirectURL;
		mc.MMplayerType = _root.MMplayerType;
		mc.MMdoctitle = _root.MMdoctitle;
		mc.startUpdate();
    }else if( time > timeOut ){
		//loading failed or timed out
        clearInterval(id);
		
		expressInstallFailed();
	}
	
}

function installStatus(status){
	
	switch(status){
		case "Download.Complete":
			break;
		
		case "Download.Cancelled":
		case "Download.Failed":
			expressInstallFailed();
			break;
	}

}

function expressInstallFailed(){
	getURL("javascript:swfIN._static.expressInstallFailed();");
}


Stage.scaleMode = "noScale";
System.security.allowDomain("fpdownload.macromedia.com");

var url = "http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?" + Math.random();
var mc = createEmptyMovieClip("loaderClip", 0);
mc.loadMovie(url);

var time = 0;
var delay = 10;
var timeOut = 5000;
var id = setInterval(checkLoaded, delay);
