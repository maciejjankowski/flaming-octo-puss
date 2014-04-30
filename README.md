Visual debugging for PhantomJS / CasperJS
=================

This little hack is using a simple technique: It grabs the screen as PhantomJS or CasperJS sees it with captureBase64('png') and then it is POSTing the image into the receiving server which then sends it via socket.io to the browser which displays it is as inline image.

Here is how it works:
![](https://dl.dropboxusercontent.com/u/19020828/casperia.PNG)


To get this working:

0. Grab the repo (and node.js if you don't have it)
1. run `npm install`
2. run `node server.js`
3. go to http://localhost:8001
4. use the code below in your phantom or casper script to update the image:

````
this.evaluate( function(img){
  __utils__.sendAJAX("http://localhost:8001/", 'POST', {'img' : img }, false);    
  }, 
  {'img' : this.captureBase64('png')} 
);
````

p.s. Remember to set the viewport size otherwise you can get the responsive, squeezed page.
