// Instantiate instance of civic.sip
var civicSip = new civic.sip({ appId: 'ryQVAxWAM' });
var sendAuthCode = function sendAuthCode(jwtToken) {
  //Testing
  console.log(jwtToken);
 //Post token for server processing
 let obj = {aToken: jwtToken};

  $.ajax({
    type: "POST",
    url: "/api/civic",
    data: obj,
    success: function(data, textStatus, jqXHR) {
      if (typeof data.redirect == 'string') {
        window.location = data.redirect
      }

    },
    dataType: "json"
  });

};
// Start scope request.
var button = document.querySelector('#signupButton');
button.addEventListener('click', function () {
  civicSip.signup({ style: 'popup', scopeRequest: civicSip.ScopeRequests.BASIC_SIGNUP });
});

// Listen for data
civicSip.on('auth-code-received', function (event) {
  /*
      event:
      {
          event: "scoperequest:auth-code-received",
          response: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJqdGkiOiI2Y2EwNTEzMi0wYTJmLTQwZjItYTg2Yi03NTkwYmRjYzBmZmUiLCJpYXQiOjE0OTQyMjUxMTkuMTk4LCJleHAiOjE0OTQyMjUyOTkuMTk4LCJpc3MiOiJjaXZpYy1zaXAtaG9zdGVkLXNlcnZpY2UiLCJhdWQiOiJodHRwczovL3BoNHg1ODA4MTUuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2Iiwic3ViIjoiY2l2aWMtc2lwLWhvc3RlZC1zZXJ2aWNlIiwiZGF0YSI6eyJjb2RlVG9rZW4iOiJjY2E3NTE1Ni0wNTY2LTRhNjUtYWZkMi1iOTQzNjc1NDY5NGIifX0.gUGzPPI2Av43t1kVg35diCm4VF9RUCF5d4hfQhcSLFvKC69RamVDYHxPvofyyoTlwZZaX5QI7ATiEMcJOjXRYQ",
          type: "code"
      }
  */

  // encoded JWT Token is sent to the server
  var jwtToken = event.response;

  // Your function to pass JWT token to your server

  sendAuthCode(jwtToken);
});

civicSip.on('user-cancelled', function (event) {
  /*
      event:
      {
        event: "scoperequest:user-cancelled"
      }
  */
 });

civicSip.on('read', function (event) {
  /*
      event:
      {
        event: "scoperequest:read"
      }
  */
});

 // Error events.
 civicSip.on('civic-sip-error', function (error) {
    // handle error display if necessary.
    console.log('   Error type = ' + error.type);
    console.log('   Error message = ' + error.message);
 });
