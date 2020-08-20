  
var batal = document.getElementById('batal')
batal.addEventListener("click", ()=>{
    document.getElementById("nama").value = ""
    document.getElementById("email").value = ""
    document.getElementById("pesan").value = ""   
});
$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $("#batal").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $("#nama").value = ""
        $("#_replyto").value = ""
        $("#pesan").value = ""
    });
});