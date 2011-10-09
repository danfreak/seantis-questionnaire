/*
function loadScript(src, callback) {
    var head=document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    
    script.onload = callback;
    script.src = src;
    head.appendChild(script);
}

function isjQueryLoaded() {
    return (typeof jQuery !== 'undefined');
}

function tryLoadChain() {
    var chain = arguments;
    if (!isjQueryLoaded()) {
        if (chain.length) {
            loadScript(
                chain[0],
                loadDependent()
            );
        }
    }
}




//load jQuery if not already loaded
tryLoadChain('https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js');
*/
function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

function isjQueryLoaded() {
    return (typeof jQuery !== 'undefined');
}

if(isjQueryLoaded()){
	jQl.loadjQ("https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js")
}
if(!jQuery.ui) {
	jQl.loadjQ('https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js', function(){
		loadjscssfile('/static/js/q-date.js', 'js');
	})
}
else{
	jQl.loadjQ('/static/js/q-date.js');
}
