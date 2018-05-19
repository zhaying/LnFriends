// $( document ).ready(function() {
//     console.log( "ready!" );
//      // Jackie
var civicSip = new civic.sip({ appId: 'ryQVAxWAM' });
var btnTest = document.querySelector("#btnTest");

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
$(document).ready( function () {
  console.log("dashboard document ready!");
  // civicSip.signup({ style: 'popup', scopeRequest: civicSip.ScopeRequests.BASIC_SIGNUP });
});
