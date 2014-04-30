var socket = io.connect("http://localhost:8001");
socket.on('connect', function(socket){
  console.info("connected");
});

socket.on('img', function (data) {
  $('#img').attr('src', "data:image/jpeg;base64, " + data);
});



