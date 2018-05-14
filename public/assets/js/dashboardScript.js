// $( document ).ready(function() {
//     console.log( "ready!" );
//      // Jackie
var btnTest = document.querySelector("#btnTest");

btnTest.addEventListener("click", function(){
  var coinMarket = new XMLHttpRequest();

  coinMarket.open('GET', '/api/coindata');

  // coinMarket.onload = function () {
  //   var coinRequest = JSON.parse(coinMarket);
  //   console.log("coinRequest:",coinRequest);
  //   //renderHTML();
  // };
  console.log("btnTest click!",coinMarket);
});
// });
