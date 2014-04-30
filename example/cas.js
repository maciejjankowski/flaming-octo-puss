require('casper').create()

  .start('http://www.b-good.pl/en/', function() { 
  
      this.evaluate( function(img){
        __utils__.sendAJAX("http://localhost:8001/", 'POST', {'img' : img }, false);    
        }, 
        {'img' : this.captureBase64('png')} 
      ); // evaluate
      
  }) // start
  
  .run(); 
