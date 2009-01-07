/*////////////////////////////////////////////////////////////////////////////////////////

  swfIN 2.2.7  -  2009-01-07
  javascript toolkit for flash developers
  © 2005-2009 Francis Turmel  |  swfIN.nectere.ca  |  www.nectere.ca  |  francis@nectere.ca
  released under the MIT license

/*////////////////////////////////////////////////////////////////////////////////////////
if(typeof swfIN=="undefined"){var swfIN=function(b,c,d,a){this.params=[];this.flashVars=[];this.swfPath=b;this.swfID=c;this.containerDivID="div_"+c;this.width=String(d);this.height=String(a);this.scrollbarWidth=null;this.scrollbarHeight=null;this.requiredVersion=[0,0,0];this.redirectURL=null;this.redirectUseParams=false;this.xiPath=null;this.xiWidth=null;this.xiHeight=null;this.is_written=false;this.showDivName=null;this.isUsingMacMousewheel=false;swfIN._static.init()};swfIN.prototype={addParam:function(a,b){if(a!=""){this.params[a]=b
}},addVar:function(a,b){if(a!=""){this.flashVars[a]=b}},addVars:function(b){for(var a in b){if(typeof b[a]!="function"){this.addVar(a,b[a])}}},scrollbarAt:function(b,a){this.scrollbarWidth=b;this.scrollbarHeight=a;if(this.isWritten()){this.refresh()}},resize:function(b,a){this.width=b;this.height=a;if(this.isWritten()){this.refresh()}},detect:function(b,c,a){this.detectRedirect(b,c,a)},detectRedirect:function(b,c,a){this.requiredVersion=b;this.redirectURL=c;this.redirectUseParams=a||false},detectShowDiv:function(b,c,a){this.requiredVersion=b;
this.showDivName=c},useExpressInstall:function(b,c,a){this.xiPath=b;this.xiWidth=c;this.xiHeight=a},useSWFAddress:function(){if(typeof SWFAddress!="undefined"){SWFAddress.setId(this.getSWFID())}else{this._error("Can't find SWFAddress. Remove the .useSWFAddress() call if you're not using it.")}},useMacMousewheel:function(){this.isUsingMacMousewheel=true},callback:function(funk){var o=window.document[this.getSWFID()];var a=arguments;var f=funk;var expression="";for(var i=1;i<arguments.length;i++){expression+=(i==1)?"a["+i+"]":", a["+i+"]"
}return eval("o[f]("+expression+");")},write:function(){if(!swfIN.detect.isPlayerVersionValid(this.requiredVersion)&&swfIN.detect.isPlayerVersionValid(swfIN._memory.expressInstallVersion)&&this.xiPath!=null&&swfIN.utils.getQueryParam("detect")!="false"){this.addParam("scale","noScale");document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVar("MMdoctitle",document.title);this.addVar("MMplayerType",(swfIN.detect.nsPlugin())?"PlugIn":"ActiveX");this.addVar("MMredirectURL",window.location);
this.width=this.xiWidth||this.width;if(this.width<swfIN._memory.expressInstallMinSize.w){this.width=swfIN._memory.expressInstallMinSize.w}this.height=this.xiHeight||this.height;if(this.height<swfIN._memory.expressInstallMinSize.h){this.height=swfIN._memory.expressInstallMinSize.h}this.swfPath=this.xiPath;document.write(this.getHTML());this.is_written=true}else{if(swfIN.detect.isPlayerVersionValid(this.requiredVersion)||swfIN.utils.getQueryParam("detect")=="false"){document.write(this.getHTML());this.is_written=true
}else{if(this.redirectURL!=null){var a=(this.redirectUseParams)?this.redirectURL+"?required="+this.requiredVersion.join(".")+"&installed="+swfIN.detect.getPlayerVersionString():this.redirectURL;location.href=a}}}if(this.isWritten()){if(this.showDivName){swfIN.utils.$delete(this.showDivName)}this._checkForConflicts();swfIN._memory.swf_stack.push(this);this.refresh();this._formFix()}},isWritten:function(){return this.is_written},hideSEO:function(a){swfIN.utils.$delete(a)},getDivID:function(){return this.containerDivID
},getDivRef:function(){return swfIN.utils.$(this.getDivID())},getSWFID:function(){return this.swfID},getSWFRef:function(){return swfIN.utils.$(this.getSWFID())},refresh:function(){var a=this.getDivRef();a.style.width=this._calculateWidth();a.style.height=this._calculateHeight();if(this.scrollbarWidth){a.style["min-width"]=this.scrollbarWidth+"px"}if(this.scrollbarHeight){a.style["min-height"]=this.scrollbarHeight+"px"}},getHTML:function(){var f="";for(var d in this.flashVars){if(typeof this.flashVars[d]!="function"){var c=(f=="")?"":"&";
f+=c+d+"="+escape(this.flashVars[d])}}var e=[];e.quality="high";e.menu="false";e.swLiveConnect="true";e.pluginspage=swfIN._memory.player_download;e.allowScriptAccess="always";e.FlashVars=f;for(var d in this.params){if(typeof this.params[d]!="function"){e[d]=this.params[d]}}var b="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'  id='"+this.swfID+"' width='100%' height='100%' align='top' hspace='0' vspace='0'><param name='movie' value='"+this.swfPath+"'>";for(var d in e){if(typeof e[d]!="function"){b+="<param name='"+d+"' value='"+e[d]+"'>"
}}b+="<embed src='"+this.swfPath+"' width='100%' height='100%' align='top' hspace='0' vspace='0' type='application/x-shockwave-flash' name='"+this.swfID+"' ";for(var d in e){if(typeof e[d]!="function"){b+=d+"='"+e[d]+"' "}}b+="></embed></object>";var a=(this.scrollbarWidth>0&&this.scrollbarHeight>0)?"min-width:"+this.scrollbarWidth+"px; min-height:"+this.scrollbarHeight+"px":"";b="<div id='"+this.containerDivID+"' style='width:"+this._calculateWidth()+"; height:"+this._calculateHeight()+"; "+a+"'>"+b+"</div>";
return b},_formFix:function(){if(swfIN.detect.ie()){window[this.getSWFID()]=document[this.getSWFID()]}},_calculateWidth:function(){return this._sizeHelper("Width")},_calculateHeight:function(){return this._sizeHelper("Height")},_sizeHelper:function(c){var d=String(this["scrollbar"+c]);var a=String(this[c.toLowerCase()]);if(d!=null&&a.indexOf("%")>-1){var b=swfIN.detect.getBrowserSize()[c.substr(0,1).toLowerCase()]*(a.split("%")[0]/100);a=(d>b)?d:a}return(a.indexOf("%")>-1)?a:a+"px"},_checkForConflicts:function(){if(this.swfID==null){this._error("The swf's id cannot be empty")
}if(this.containerDivID==null){this._error("The container div's id cannot be empty")}if(this.swfID.indexOf(" ")>-1){this._error("The swf's id cannot contain spaces")}if(this.containerDivID.indexOf(" ")>-1){this._error("The container div's id cannot contain spaces")}if(this.getDivID()==this.getSWFID()){this._error("You cannot name swfs or divs by the same id. Please revise the ids currently in use.")}var a=swfIN._memory.swf_stack;for(var b=0;b<a.length;b++){if(a[b].getDivID()==this.getDivID()||a[b].getDivID()==this.getSWFID()||a[b].getSWFID()==this.getDivID()||a[b].getSWFID()==this.getSWFID()){this._error("You cannot name swfs or divs by the same id. Please revise the ids currently in use.")
}}},_error:function(a){alert("swfIN error!\n"+a)}};swfIN._static={init:function(){if(!swfIN._memory.is_init){if(Array.prototype.push==null){Array.prototype.push=function(a){this[this.length]=a;return this.length}}if(swfIN.detect.mac()){swfIN.utils.addEventListener(window,"DOMMouseScroll",swfIN._static.sendMousewheel);swfIN.utils.addEventListener(document,"mousewheel",swfIN._static.sendMousewheel)}swfIN.utils.addEventListener(window,"resize",swfIN._static.refreshAll);swfIN._memory.is_init=true}},refreshAll:function(){var b=swfIN._memory.swf_stack;
for(var c=0;c<b.length;c++){var a=b[c];if(a.isWritten()){a.refresh()}}},sendMousewheel:function(d){var e=0;if(d.wheelDelta){e=d.wheelDelta/40}else{if(d.detail){e=-d.detail}}if(e){var b=swfIN._memory.swf_stack;for(var c=0;c<b.length;c++){var a=b[c];if(a.isWritten()&&a.isUsingMacMousewheel){a.callback("externalMouseEvent",e)}}}}};swfIN._memory={swf_stack:[],is_init:false,player_download:"http://www.adobe.com/go/getflash/",user_agent:navigator.userAgent.toLowerCase(),expressInstallMinSize:{w:214,h:137},expressInstallVersion:[6,0,65],fullscreenModeVersion:[9,0,28],vistaVersion:[9,0,28]};
swfIN.detect={getPlayerVersion:function(){var c=[0,0,0];var d;if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description){c=a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){d=1;var b=3;while(d){try{b++;d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+b);c=[b,0,0]}catch(f){d=null}}}else{try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
}catch(f){try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");c=[6,0,21];d.AllowScriptAccess="always"}catch(f){if(c[0]==6){return c}}try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}}if(d!=null){c=d.GetVariable("$version").split(" ")[1].split(",")}}}return c},isPlayerVersionValid:function(b){var a=swfIN.detect.getPlayerVersion();if(a[0]<b[0]){return false}if(a[0]>b[0]){return true}if(a[1]<b[1]){return false}if(a[1]>b[1]){return true}if(a[2]<b[2]){return false}return true},getPlayerVersionString:function(){return swfIN.detect.getPlayerVersion().join(".")
},ns4:function(){return(document.layers!=null)},ie5_mac:function(){return(swfIN._memory.user_agent.indexOf("msie 5")!=-1&&swfIN._memory.user_agent.indexOf("mac")!=-1)},ie7:function(){return(swfIN._memory.user_agent.indexOf("msie 7")!=-1)},ie:function(){return(swfIN._memory.user_agent.indexOf("msie")!=-1)},safari:function(){return(swfIN._memory.user_agent.indexOf("applewebkit")!=-1)},opera:function(){return(window.opera)},mac:function(){return(swfIN._memory.user_agent.indexOf("mac")!=-1)},nsPlugin:function(){return(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length>0)
},getBrowserSize:function(){if(self.innerWidth){return{w:self.innerWidth,h:self.innerHeight}}else{if(document.documentElement&&document.documentElement.clientWidth){return{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}else{if(document.body){return{w:document.body.clientWidth,h:document.body.clientHeight}}else{return{w:null,h:null}}}}},getFullScreenSize:function(){return{w:screen.width,h:screen.height}},getAvailScreenSize:function(){return{w:screen.availWidth,h:screen.availHeight}
}};swfIN.utils={$:function(a){return document.getElementById(a)},$delete:function(b){var a=swfIN.utils.$(b);a.parentNode.removeChild(a)},splice:function(e,c){var b=[];for(var d=c;d<e.length;d++){b[d-c]=e[d]}return b},delegate:function(b,a){var c=function(){var e=arguments.callee.t;var d=arguments.callee.f;var f=arguments.callee.a;return d.apply(e,f)};c.t=b;c.f=a;c.a=swfIN.utils.splice(arguments,2);return c},addEventListener:function(a,c,b){if(a.addEventListener){a.addEventListener(c,b,true)}else{a.attachEvent("on"+c,b)
}},popUp:function(a,b,o,f,n,m,d){var l=swfIN.detect.getFullScreenSize();var k=swfIN.detect.getAvailScreenSize();o=(o=="full")?k.w:o;f=(f=="full")?k.h:f;n=(n=="center")?(l.w-o)/2:n;m=(m=="center")?(l.h-f)/2:m;var c=[];c.width=o;c.innerWidth=o;c.height=f;c.innerHeight=f;c.toolbar=0;c.location=0;c.directories=0;c.status=0;c.menubar=0;c.scrollbars=0;c.resizable=0;c.copyhistory=0;c.fullscreen=0;for(var e in d){if(typeof d[e]!="function"){c[e]=d[e]}}var j="";for(var e in c){if(typeof c[e]!="function"){j+=(j=="")?e+"="+c[e]:","+e+"="+c[e]
}}var g=window.open(a,b,j);g.resizeTo(o,f);g.moveTo(0,0);g.moveBy(n,m);g.focus()},getQueryParam:function(a){var b=swfIN.utils.getAllQueryParams()[a];return(b!=undefined&&b!="")?b:null},getAllQueryParams:function(){var b=[];var d=window.location.search.substring(1).split("&");for(var c=0;c<d.length;c++){var a=d[c].split("=");b[a[0]]=a[1]}return b}}};