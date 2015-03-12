## swfIN changelog ##


### 2.4.0 `(2010-07-26)` ###

> _FIXES_
    * There's no more nested object/embed tags now, we're only using the object tag. This clears up reference ambiguity and also fixes a Chrome problem related to the `.callback()` method.




### 2.3.1 `(2009-02-05)` ###

> _CHANGES_
    * Changed the code that fixes the prototype pollution/for..in iteration problems to use .hasOwnProperty(). Smaller and more accurate. ( [Issue #9](https://code.google.com/p/swfin/issues/detail?id=#9) )




### 2.3.0 `(2009-02-05)` ###

> _NEW_
    * `.addParams()` method can now be used to pass embed parameters as objects/JSON format ([Issue #8](https://code.google.com/p/swfin/issues/detail?id=#8))
    * Express install SWF sources and small tweaks ([Issue #2](https://code.google.com/p/swfin/issues/detail?id=#2))
    * Reorganized project structure
    * cleaned up old examples and added new ones
    * `swfIN.utils.$hide()` helper to hide a div

> _FIXES_
    * Express install now works properly along with `.detectRedirect()` and `.detectShowDiv()`, and will properly fallback to either of those methods if it fails
    * If `.callback()` fails, it will now output an error to Firebug console

> _CHANGES_
    * `.detectShowDiv()` hides the div instead of destroying it to allow express install fallback
    * Express install embed does not set the scale param to "noscale" anymore, this behavior is handled by the express install SWF itself
    * Default pluginspage is now http://get.adobe.com/flashplayer/
    * Removed `swfIN.detect.safari()` detection and replaced it with `swfIN.detect.webkit()` to cover Safari and Chrome more accurately
    * Tweaked `swfIN.detect.opera()` so it properly returns a boolean
    * Added an optional count argument to the `swfIN.utils.splice()` function




### 2.2.8 `(2009-02-02)` ###

> _CHANGES_
    * swfIN errors now output to Firebug using console.error() instead of showing in an alert box




### 2.2.7 `(2009-01-07)` ###

> _FIXES_
    * Workaround to Prototype's Array and Object prototype "polluting" problem. ([Issue #9](https://code.google.com/p/swfin/issues/detail?id=#9))




### 2.2.6 `(2008-11-21)` ###

> _FIXES_
    * The `.callback()` method has been rewritten properly using eval() so it can scale to take any number or arguments.

> _CHANGES_
    * Removed the swfIN.utils.proxyCall() method and it's iframe tag. Figured out that this can be handled from Flash directly with ExternalInterface like so:
```
public static function jsProxyCall(url:String):void {
	ExternalInterface.call("function(url){ new Image().src = url; }", url);
}
```




### 2.2.5 `(2008-11-17)` ###

> _FIXES_
    * swfIN trapped the mouse wheel event uselessly on macs if you didn't call `.useMacMousewheel()`. Thanks to Jason & Louis for the report.




### 2.2.4 `(2008-08-03)` ###

> _NEW_
    * `swfIN.detect.opera()` : Opera browser detection
    * Mac mousewheel support added, will provide an AS3 class shortly. Tested successfully on OSX with Opera 9.51, Firefox 3.0.1 and Safari 3.1.2
> > > Inspired by  http://adomas.org/javascript-mouse-wheel/  and  http://blog.pixelbreaker.com/flash/as30-mousewheel-on-mac-os-x/




### 2.2.3 `(2008-06-29)` ###


> _NEW_
    * The `.callback()` method now supports return values. (Thanks to Takashi Mizohata for the suggestion and code)




### 2.2.2 `(2008-06-01)` ###

> _NEW_
    * `.scrollbarAt()` now adds the min-width and min-height style params to the div wrapper for smoother window resize behavior.




### 2.2.1 `(2008-05-20)` ###

> _NEW_
    * `swfIN.utils.proxyCall(url)` : Loads an external URL through an iframe. Useful for tracking / bypassing crossdomain policies.

> _CHANGES_
    * Switched to Yahoo! YUI Compressor to compress the toolkit




### 2.2.0 `(2007-12-21)` ###

> _NEW_
    * added the `.detectRedirect()` method to redirect to a URL if Flash player requirements are not met (same as `.detect()`)
    * added the `.detectShowDiv()` method to show a div tag if Flash player requirements are not met

> _FIXES_
    * swfIN instances are now only refreshed on stage resize if they're successfully embeded

> _CHANGES_
    * Using `.detectRedirect()` instead of `.detect()` is now the preferred way to handle detection and redirection




### 2.1.0 `(2007-09-15)` ###

> _NEW_
    * `swfIN.utils.$delete()` : Delete node by ID
    * `swfIN.utils.splice()` : Array splice utility that works with the `arguments` object
    * `swfIN.detect.safari()` : Safari browser detection

> _FIXES_
    * Automatic fix for the form + External Interface callback bug in IE

> _CHANGES_
    * SEO div removal now uses `swfIN.utils.$delete()`
    * new code for `swfIN.utils.delegate()`
    * the default pluginspage is now http://www.adobe.com/go/getflash/ (used to be http://www.macromedia.com/go/getflashplayer/ )




### 2.0.2 `(2007-09-10)` ###

> _NEW_
    * added the `.callback()` method to simplify Flash callbacks (js < - > flash). Accepts up to 15 extra arguments




### 2.0.1 `(2007-09-09)` ###

> _NEW_
    * added `.useSWFAddress()` to help register a swf in the [SWFAddress](http://www.asual.com/swfaddress/) engine




### 2.0.0 Final `(2007-09-06)` ###
> #### built from 2.0.0 RC3, not RC3-a ####

> _NEW_
    * `swfIN.utils.delegate()`
    * `swfIN.utils.addEventListener()`

> _FIXES_
    * conditional wrapping in the whole script so that it supports multiple includes on the same page without breaking




### 2.0.0 RC3-a `(2007-08-30)` ###
> #### internal branch, not released ####

> _MISC_
    * experiments to try to fix the firefox tab/resize not triggering




### 2.0.0 RC3 `(2007-08-17)` ###

> _FIXES_
    * small tweak in the embed to fix a resize/scrollbar port glitch (thanks to George Kendros for spotting this)




### 2.0.0 RC2 `(2007-08-16)` ###

> _CHANGES_
    * Renamed the quersytring methods to `swfIN.utils.getQueryParam()` and `swfIN.utils.getAllQueryParams()` (suggestion from Alec, thanks)

> _DOCS_
    * Small changes to the examples




### 2.0.0 RC1 `(2007-08-15)` ###
> #### major release, this is close to being a total rewrite ####

> _HIGHLIGHTS_
    * support for minor player detection (switched to swfObject's detection code)
    * easier express install
    * removed the old useless actions. You can now only write the embed tag inside a dynamically created div, redirect to a URL or use express install. For anything else, just use the `swfIN.detect.isPlayerVersionValid()` method in a conditional statement.
    * new alert warnings to make sure devs don't make distraction mistakes
    * SEO support with the `.hideSEO()` method
    * event handling instead of the old destructive `window.resize = refresh`
    * moved development environment to Aptana
    * Much better naming scheme and hints to static/dynamic/public/private methods and vars
    * everything is now under the swfIN namespace, so conflicts are less than likely to happen
    * this release also marks a stop to the Netscape 4 support (let's stop the insanity)
    * ... and much more. Docs coming soon to cover everything.

