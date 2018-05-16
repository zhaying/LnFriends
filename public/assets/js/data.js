//Make connection
var theDataUrl  = location.protocol +"//" + location.host;
var socket      = io.connect(theDataUrl);

//Query document
var coinSymbol  = document.getElementById('coinSymbol'),
    btnSendCoin = document.getElementById('btnSendCoin'),
    output      = document.getElementById('output'),
    btnGetCMC   = document.getElementById('btnGetCMC');

//Emit events
btnGetCMC.addEventListener("click", function(){
  socket.emit('listingRequest');
});
btnSendCoin.addEventListener("click", function(){
  socket.emit('coinRequest',{
    "coinSymbol": coinSymbol.value,
    "coinID": "2616"
  });
});

//Listen for events
socket.on('coinResponse',function(data){
  output.innerHTML += '<p><strong>' + data.symbol +':' + data.price +'</strong></p>';
});
