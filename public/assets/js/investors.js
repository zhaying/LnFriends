//Make connection
var theDataUrl  = location.protocol +"//" + location.host;
var socket      = io.connect(theDataUrl);

//Assign variables to elements on page inputs and buttons
var investor_form      = document.getElementById('investor_form'),

    // INPUTS
    investor_first_name   = document.getElementById('investor_first_name'),
    investor_last_name    = document.getElementById('investor_last_name'),
    investor_company_name = document.getElementById('investor_company_name'),
    investor_user_name    = document.getElementById('investor_user_name'),
    investor_user_type    = document.getElementById('investor_user_type'),
    investor_phone        = document.getElementById('investor_phone'),

    // BUTTONS
    btnAddInvestor          = document.getElementById('btnAddInvestor'),
    btnRefreshInvestorList  = document.getElementById('btnRefreshInvestorList');

//Emit events
btnAddInvestor.addEventListener("click", function(){
    console.log("btnAddInvestor click");
  socket.emit('addingAnInvestor',{
    "first_name":    investor_first_name.value,
    "last_name":     investor_last_name.value,
    "company_name":  investor_company_name.value,
    "user_name":     investor_user_name.value,
    "user_type":     investor_user_type.value,
    "phone":         investor_phone.value
  });
});
btnRefreshInvestorList.addEventListener("click", function(){
    console.log("btnRefreshInvestorList click");
  socket.emit('getListOfInvestors');
});

//dataTables
$(document).ready( function () {
  console.log("Investors document ready!");
        $('#myInvestorTable').DataTable(
          {
        "processing": true,
        "serverSide": false,
        "ajax": {url: "/api/getInvestorList/",
        type: 'GET',
      dataType: "jsonp"}
      });
} );
