//Make connection
var theDataUrl  = location.protocol +"//" + location.host;
var socket      = io.connect(theDataUrl);

//Assign variables to elements on page inputs and buttons
var wallet_form      = document.getElementById('wallet_form'),

    // INPUTS
    wallet_address   = document.getElementById('wallet_address'),
    wallet_symbol    = document.getElementById('wallet_symbol'),

    // BUTTONS
    btnAddWallet          = document.getElementById('btnAddWallet'),
    btnRefreshWalletList  = document.getElementById('btnRefreshWalletList');

//Emit events
btnAddWallet.addEventListener("click", function(){
    console.log("btnAddWallet click");
  socket.emit('addingWallet',{
    "wallet_address":    wallet_address.value,
    "wallet_symbol":     wallet_symbol.value
  });
});

btnRefreshWalletList.addEventListener("click", function(){
    console.log("btnRefreshWalletList click");
  socket.emit('getListOfWallets');
});

//dataTables
$(document).ready( function () {
  console.log("Wallets document ready!");
        $('#myWalletTable').DataTable(
          {
        "processing": true,
        "serverSide": false,
        "ajax": {url: "/api/getWalletList/",
        type: 'GET',
      dataType: "jsonp"}
      });
} );
