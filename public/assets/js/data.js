//Make connection
var theDataUrl  = location.protocol +"//" + location.host;
var socket      = io.connect(theDataUrl);

//Query document coinmarketcap *****
var coinSymbol  = document.getElementById('coinSymbol'),
    btnSendCoin = document.getElementById('btnSendCoin'),
    output      = document.getElementById('output'),
    btnGetCMC   = document.getElementById('btnGetCMC');
    //myDataTable = ;

//Emit events coinmarketcap *****
btnGetCMC.addEventListener("click", function(){
  socket.emit('listingRequest');
});
btnSendCoin.addEventListener("click", function(){
  socket.emit('coinRequest',{
    "coinSymbol": coinSymbol.value,
    "coinID": "2616"
  });
});

//Listen for events coinmarketcap *****
socket.on('coinResponse',function(data){
  output.innerHTML += '<p><strong>' + data.symbol +':' + data.price +'</strong></p>';
});



//JP Query document coinmarketcap *****
var totalSymbol = document.getElementById('totalSymbol'),
    btnSendTotal = document.getElementById('btnSendTotal'),
    outputTotal  = document.getElementById('outputTotal'),
    btnGetTotal  = document.getElementById('btnGetTotal');

//JP-Emit events TheBSODPool *****
btnGetTotal.addEventListener("click", function(){
  socket.emit('listingRequest');
});
btnSendTotal.addEventListener("click", function(){
  socket.emit('totalRequest',{
    "totalSymbol": totalSymbol.value,
    "coinID": "2616"
  });
});

//Listen for events TheBSODPool *****
socket.on('totalRequest',function(data){
  outputTotal.innerHTML += '<p><strong>' + data.symbol +':' + data.price +'</strong></p>';
});

//dataTables
$(document).ready( function () {
  console.log("document ready!");
    $('#myDataTable').DataTable();
} );
