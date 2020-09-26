$(function () {
  $('#datetimepicker1').datetimepicker();
});  
 
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstNameInput = $("input#firstname").val();
    const lastNameInput = $("input#lastname").val();
    const descriptionlInput= $("input#description").val();
    const dateOfAppointmentInput = $("input#datetimepicker1").val(); 
    
    var values = $("input[name='pname[]']")
    .map(function(){return $(this).val();}).get();

    $(".firstname").text(firstNameInput);
    $(".lastname").text(lastNameInput);
    $(".description").text(descriptionlInput);
    $(".datetimepicker1").text(dateOfAppointmentInput);
    $("#appointment").show();

    

    event.preventDefault();
  });
});



