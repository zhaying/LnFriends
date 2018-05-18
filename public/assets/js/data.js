//Make connection
var theDataUrl  = location.protocol +"//" + location.host;
var socket      = io.connect(theDataUrl);

//Query document coinmarketcap *****
var coinSymbol          = document.getElementById('coinSymbol'),
    btnSendCoin         = document.getElementById('btnSendCoin'),
    output_currrencies  = document.getElementById('output_currrencies'),
    output_tickers      = document.getElementById('output_tickers'),
    output_total        = document.getElementById('output_total'),
    btnGetCMC           = document.getElementById('btnGetCMC'),
    btnGetCurrencies    = document.getElementById('btnGetCurrencies'),
    wallet_address      = document.getElementById('wallet_address'),
    btnGetTotal         = document.getElementById('btnGetTotal'),
    btnGetTicker        = document.getElementById('btnGetTicker');
    //myDataTable = ;

//Emit events coinmarketcap *****
btnGetCurrencies.addEventListener("click", function(){
    socket.emit('getCurrencies');
});
// btnGetTicker.addEventListener("click", function(){
//   socket.emit('listingRequest');
// });
btnSendCoin.addEventListener("click", function(){
    console.log("btnSendCoin click");
  socket.emit('coinRequest',{
    "currency_symbol": currency_symbol.value
  });
});
btnGetTotal.addEventListener("click", function(){
    console.log("btnGetTotal click");
  socket.emit('getMiningPoolTotal',{
    "wallet_address": wallet_address.value
  });
});

//Listen for events coinmarketcap *****
socket.on('coinResponse',function(data){
    output_tickers.innerHTML += '<p><strong>' + data.symbol +':' + data.price +'</strong></p>';
});



//JP Query document coinmarketcap *****
var enter_coin        = document.getElementById('enter_coin'),
    wallet_address   = document.getElementById('wallet_address'),
    btnAddWallet = document.getElementById('btnAddWallet');

//JP-Emit events TheBSODPool *****

btnAddWallet.addEventListener("click", function(){
  // socket.emit('coinRequest',{
  //   "currency_symbol": currency_symbol.value,
  // });
  socket.emit('btnAddWallet',{
    "wallet_symbol": enter_coin.value,
    "wallet_address": wallet_address.value,
  });
});

//Listen for events TheBSODPool *****
socket.on('wallet_results',function(data){
  outputTotal.innerHTML += '<p><strong>' + data.symbol +':' + data.price +'</strong></p>';
});

//dataTables
$(document).ready( function () {
  console.log("document ready!");
    $('#myDataTable').DataTable();
} );
