//dataTables
$(document).ready( function () {
  var theDataUrl  = location.protocol +"//" + location.host;
  var socket      = io.connect(theDataUrl);
  console.log("dashboard document ready!");


      var  myTheDashboardTable =  $('#myDashboardTable').DataTable(
          {
        "processing": true,
        "serverSide": false,
        "ajax": {url: "/api/getDashboardList/",
        type: 'GET',
      dataType: "jsonp"}
      });


// $( document ).ready(function() {
//     console.log( "ready!" );
//      // Jackie
var civicSip = new civic.sip({ appId: 'ryQVAxWAM' });
var btnTest = document.querySelector("#btnTest");

btnRefreshTickerList.addEventListener("click", function(){
    console.log("btnRefreshTickerList click");
    socket.emit('coinRequest',{
      "currency_symbol": 'SPD'
    });
    myTheDashboardTable.ajax.url( "/api/getDashboardList/" ).load( function () {
      console.log("data tables ajax reload");
    });
  // socket.emit('getListOfWallets');
});


      setInterval( function () {
        myTheDashboardTable.ajax.reload( null, false ); // user paging is not reset on reload
      }, 30000 );
// btnTest.addEventListener("click", function(){
//   var xhr = new XMLHttpRequest();
// xhr.open("POST", '/api/coindata', true);
//
// //Send the proper header information along with the request
// xhr.setRequestHeader("Content-type", "application/json");
//
// xhr.onreadystatechange = function() {//Call a function when the state changes.
//     if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
//         // Request finished. Do processing here.
//         console.log();
//     }
// }
// xhr.send("foo=bar&lorem=ipsum");
// // xhr.send('string');
// // xhr.send(new Blob());
// // xhr.send(new Int8Array());
// // xhr.send({ form: 'data' });
// // xhr.send(document);
//   console.log("btnTest click!",coinMarket);
// });
// });

  // civicSip.signup({ style: 'popup', scopeRequest: civicSip.ScopeRequests.BASIC_SIGNUP });
});
