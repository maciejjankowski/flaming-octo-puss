var casper = require('casper').create({
  viewPortSize : {
    width: 1024,
    height: 768
  },
  onStepComplete : function(arg){
    // show(); // THIS IS FOR CAPTURING SCREENSHOTS AFTER A STEP IS COMPLETE
  },
  pageSettings : {
    // loadImages:  false // speeds up 
  }
});
 
 
/* 
below you can specify where casperView is listening. Make sure the port is set correctly
You can specify this in startup options:
casperjs your_script.js --observerUrl=http://localhost:2222
*/
 
var observerUrl = casper.cli.options.observerUrl || "http://localhost:8001/"; 
 
casper.start("http://o2.pl")
.run()
 
setInterval(function(){
  show(); // ALTERNATIVE WAY - casper will send a screenshot at specified intervals
}, 300);
 
function show(){
  casper.evaluate( function(img, observerUrl){
        __utils__.sendAJAX(observerUrl, 'POST', {'img' : img }, false);
      },
      casper.captureBase64('png'),
      observerUrl
  ); // evaluate
} // show
