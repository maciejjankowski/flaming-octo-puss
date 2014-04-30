require('casper').create({
  viewPortSize : {
      width: 1024, 
      height: 768
  }
})

  .start('http://gumtree.pl', function() { 
  
      this.evaluate( function(img){
          __utils__.sendAJAX("http://localhost:8001/", 'POST', {'img' : img }, false);    
        }, 
        {'img' : this.captureBase64('png')} 
      ); // evaluate
      
      this.exit();
  
  }) // start
  
  .run(); 
