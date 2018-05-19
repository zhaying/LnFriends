// assets/js/miningPools

//dataTables
$(document).ready( function () {
  console.log("MiningPools document ready!");

  //Make connection
  var theDataUrl  = location.protocol +"//" + location.host;
  var socket      = io.connect(theDataUrl);

  //Assign variables to elements on page inputs and buttons
  var mining_pool_form  = document.getElementById('mining_pool_form'),

      // INPUTS
      mining_pool_id              = document.getElementById('mining_pool_id'),
      mining_pool_name            = document.getElementById('mining_pool_name'),
      mining_pool_url             = document.getElementById('mining_pool_url'),
      mining_pool_wallet_address  = document.getElementById('mining_pool_wallet_address'),
      mining_pool_symbol          = document.getElementById('mining_pool_symbol'),


      // BUTTONS
      btnAddMiningPool          = document.getElementById('btnAddMiningPool'),
      btnRefreshMiningPoolList  = document.getElementById('btnRefreshMiningPoolList');


    var myTheMiningPoolTable =    $('#myMiningPoolTable').DataTable(
          {
        "processing": true,
        "serverSide": false,
        "ajax": {url: "/api/getMiningPoolList/",
        type: 'GET',
      dataType: "jsonp"}
      });
      //Emit events 
      btnAddMiningPool.addEventListener("click", function(){
          console.log("btnAddMiningPool click");
        socket.emit('addingMiningPool',{
          "mining_pool_id":             mining_pool_id.value,
          "mining_pool_name":           mining_pool_name.value,
          "mining_pool_url":            mining_pool_url.value,
          "mining_pool_wallet_address": mining_pool_wallet_address.value,
          "mining_pool_symbol":         mining_pool_symbol.value
        });
      });

      btnRefreshMiningPoolList.addEventListener("click", function(){
          console.log("btnRefreshMiningPoolList click");
          myTheMiningPoolTable.ajax.url( "/api/getMiningPoolList/" ).load( function () {
            console.log("data tables ajax reload");
          });
        //socket.emit('getListOfMiningPools');
      });

      setInterval( function () {
        myTheMiningPoolTable.ajax.reload( null, false ); // user paging is not reset on reload
      }, 30000 );
} );
