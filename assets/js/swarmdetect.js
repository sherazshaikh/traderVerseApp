var is_Custom_Video = "undefined" != typeof swarmvcustomvideo && swarmvcustomvideo;
if ("undefined" == typeof window.SWARMIFY_LOADED)
    if (is_Custom_Video) document.write('<script type="text/javascript" src="https://assets.swarmcdn.com/cross/swarmcdn-custom.js"></script>'), document.write('<link rel="stylesheet" href="/css/swarmify-0f237668-custom.css">');
    else {
        var currentScriptTag = document.currentScript,
            isAsyncLoad = currentScriptTag && currentScriptTag.async;
        if ("loading" !== document.readyState || isAsyncLoad) {
            var scriptElem = document.createElement("script");
            scriptElem.src = "https://assets.swarmcdn.com/cross/swarmcdn.js?v=38875ce6";
            var firstScript = document.getElementsByTagName("script")[0];
            firstScript.parentNode.insertBefore(scriptElem, firstScript), window.console && console.log("Swarmify - swarmdetect.js: Script Append Succeeded")
        } else document.write('<script type="text/javascript" id="swarm_script" src="https://assets.swarmcdn.com/cross/swarmcdn.js?v=38875ce6"></script>'), window.console && console.log("Swarmify - swarmdetect.js: Document Write Succeeded")
    }
window.SWARMIFY_LOADED = !0;