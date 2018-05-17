//Make connection
var theDataUrl  = location.protocol +"//" + location.host;
var socket      = io.connect(theDataUrl);

//Query document coinmarketcap *****
var coinSymbol  = document.getElementById('coinSymbol'),
    btnSendCoin = document.getElementById('btnSendCoin'),
    output_currrencies      = document.getElementById('output_currrencies'),
    output_tickers      = document.getElementById('output_tickers'),
    output_total      = document.getElementById('output_total'),
    btnGetCMC   = document.getElementById('btnGetCMC'),
btnGetCurrencies   = document.getElementById('btnGetCurrencies');
    //myDataTable = ;

//Emit events coinmarketcap *****
btnGetCurrencies.addEventListener("click", function(){
    socket.emit('getCurrencies');
});
btnGetTicker.addEventListener("click", function(){
  socket.emit('listingRequest');
});
btnSendCoin.addEventListener("click", function(){
    console.log("btnSendCoin click");
  socket.emit('coinRequest',{
    "currency_symbol": currency_symbol.value
  });
});

//Listen for events coinmarketcap *****
socket.on('coinResponse',function(data){
    output_tickers.innerHTML += '<p><strong>' + data.symbol +':' + data.price +'</strong></p>';
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
