//Make connection
var theDataUrl  = location.protocol +"//" + location.host;
var socket      = io.connect(theDataUrl);

//Assign variables to elements on page inputs and buttons
var rig_form      = document.getElementById('rig_form'),
    // INPUTS
    rig_id        = document.getElementById('rig_operator'),
    rig_name      = document.getElementById('rig_operator'),
    rig_type      = document.getElementById('rig_operator'),
    rig_operator  = document.getElementById('rig_operator'),
    // BUTTONS
    btnAddRig     = document.getElementById('btnAddRig');

//Emit events
btnAddRig.addEventListener("click", function(){
    console.log("btnAddRig click");
  socket.emit('addingARig',{
    "rig_id":       rig_id.value,
    "rig_name":     rig_name.value,
    "rig_type":     rig_type.value,
    "rig_operator": rig_operator.value
  });
});


//dataTables
$(document).ready( function () {
  console.log("Rigs document ready!");
        $('#myRigTable').DataTable();
} );
