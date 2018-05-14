//APIs to connect to:

/* coinmarketcap *****
DOCS: https://coinmarketcap.com/api/

/


EXAMPLE DATA: https://api.coinmarketcap.com/v2/ticker/2616/?convert=SPD
*/

/*
var btn = document.getElementbyId("btn");

btn.addEventListener("click", function(){
	var coinMarket = new XMLHttpRquest();

coinMarket.open('GET', 'https://coinmarketcap.com/api/');

coinMarket.onload = function () {
	var coinRequest = JSON.parse(coinMarket.responseText);
	renderHTML();
};

coinMarket.send();

});
*/

var request = require('request');

module.exports = {
	getData: function () {
		var x = request('https://api.coinmarketcap.com/v2/ticker/2616/?convert=SPD')
    req.pipe(x)
    x.pipe(resp)
	// request('https://api.coinmarketcap.com/v2/ticker/2616/?convert=SPD', function (error, response, body) {
	// 		if (error) {
	// 			console.log(error);
	// 			response.error(error);
	// 		}

	// 		//var price = JSON.parse(body);
	// 		//Display
	// 	    console.log("price:",body);
	// 	   // return body;
	// 	   return body;
    // let output = '';
    // for (let price of price) {
    //     output += `
    //     <li>
    //         <h3>${price.title}</h3>
    //     </li>
    //     `;  
    // }

		  //console.log('error:', error); // Print the error if one occurred
		  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		  //console.log('body:', body); // Print the HTML for the Google homepage.
		});
		
	},
  

};

//////Option 2 for solution Sunday May 13 

// var btn = document.getElementbyId('#btn') {

// function getData (method, url) {
// 	return new Promise(function(resolve, reject) {
// 		var xhr = new XMLHttpRequest();
// 		xhr.open(method, url);
// 		xhr.onload = function () {
// 			if (this.status >= 200 && this.status < 300) {
// 				resolve(xhr.response);
// 			} else {
// 				reject ({
// 					status: this.status,
// 					statusText: xhr.statusText
// 				});
// 			}
// 		};
// 		xhr.onerror = function () {
// 			reject ({
// 				status: this.status,
// 				statusText: xhr.statusText
// 			});
// 		};
// 		xhr.send();
// 	});
// }




// }






/*

function renderHTML(data) {
	
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();

*/

/* TheBSODPool *****

DOCS: https://bsod.pw/site/api

EXAMPLE DATA: http://api.bsod.pw/api/walletEx?address=STLmMKJSH7GLGhxcY6tj52VRfaJk4ppHSW
*/
