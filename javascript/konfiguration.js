// Get the modal
var modal = document.getElementById("Konfiguration1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

let closeModalClasses = document.getElementsByClassName("close-modal");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

for (let i = 0; i < closeModalClasses.length; i++) {
  closeModalClasses[i].onclick = function() {
    modal.style.display = "none";
  }
}
