//dataTables
$(document).ready( function () {
  console.log("Rigs document ready!");
  // FUNCTIONS
var  myTheRigTable = $('#myRigTable').DataTable(
      {
    "processing": true,
    "serverSide": false,
    "ajax": {url: "/api/getRigList/",
    type: 'GET',
  dataType: "jsonp"}
  });

  //Make connection
  var theDataUrl  = location.protocol +"//" + location.host;
  var socket      = io.connect(theDataUrl);

  //Assign variables to elements on page inputs and buttons
  var rig_form      = document.getElementById('rig_form'),
      // INPUTS
      rig_id        = document.getElementById('rig_id'),
      rig_name      = document.getElementById('rig_name'),
      rig_type      = document.getElementById('rig_type'),
      rig_cost      = document.getElementById('rig_cost'),
      rig_operator  = document.getElementById('rig_operator'),
      // BUTTONS
      btnAddRig           = document.getElementById('btnAddRig'),
      btnRefreshRigsList  = document.getElementById('btnRefreshRigsList');


  //Emit events
  btnAddRig.addEventListener("click", function(){
      console.log("btnAddRig click");
    socket.emit('addingARig',{
      "rig_id":       rig_id.value,
      "rig_name":     rig_name.value,
      "rig_type":     rig_type.value,
      "rig_cost":     rig_cost.value,
      "rig_operator": rig_operator.value
    });

    setTimeout(function () {
      myTheRigTable.ajax.url( "/api/getRigList/" ).load( function () {
        console.log("data tables ajax reload");
      });
    }, 500);



  });
  btnRefreshRigsList.addEventListener("click", function(){
      console.log("btnRefreshRigsList click");
      myTheRigTable.ajax.url( "/api/getRigList/" ).load( function () {
        console.log("data tables ajax reload");
      });
  //  socket.emit('getListOfRigs');
  });







  setInterval( function () {
    myTheRigTable.ajax.reload( null, false ); // user paging is not reset on reload
  }, 30000 );



    //     ;{
    //     "ajax": {
    //         url: "/api/getRigList/",
    //         type: 'GET'
    //     },
    //     "processing": true,
    //     "serverSide": true,
    //     "bPaginate": true,
    //     "sPaginationType": "full_numbers",
    //     "columns": [
    //         { "data": "rig_id" },
    //         { "data": "rig_name" },
    //         { "data": "rig_type" },
    //         { "data": "rig_cost" },
    //         { "data": "rig_operator" }
    //     ],
    //     columnDefs: [
    //         { orderable: false, targets: [ 5, 7, 8 ] } //This part is ok now
    //     ]
    // });
} );
