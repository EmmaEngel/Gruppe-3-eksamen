// Get the modal. Variablen har et unikt navn:modal
var modal = document.getElementById("Konfiguration1");

// Get the button that opens the modal. # er kun med en queryselector
var tandhjul = document.querySelector("#tandhjul")


// en slags reference til html værdien
let closeModalClasses = document.getElementsByClassName("close-modal");
// beholdere til værdierne
let modalS1 = document.querySelector(".modal-s-1");
let modalS2 = document.querySelector(".modal-s-2");

let manuelKonfiguration = document.querySelector("#manuel");


// When the user clicks on the button on first modal vindue, open the modal2. eventet specificerer noget der skal ske
tandhjul.onclick = function(event) {
  modal.style.display = "block";
  modalS1.style.display = "block";
  modalS2.style.display = "none";
}

// 
manuelKonfiguration.onclick = function() {
modalS1.style.display = "none";
modalS2.style.display = "block";
}

// Når man klikker på siden uden for modal'en lukkes modal'en
window.onclick = function(event) {
  // If statement der tjekker om man på modal 1 eller modal 2
  // hvis man er på modal 1 eller modal 2 og trykker på 
  // siden udenfor modal'en lukkes modal'en
  // || = eller
  // && = og
  if(event.target === modal || event.target === modalS2) {
    modal.style.display = "none";
  }
}




// For loop, der itererer igennem alle classer med close-modal classen. et control statement.
// når der klikkes på et af de elementer lukkes modal'en. length betyder kun til antallet af classes i denne kontekst.
for (let i = 0; i < closeModalClasses.length; i++) {
  // let i = iterator variablen, som holder styr på hvor langt man er i ens iteration
  closeModalClasses[i].onclick = function() {
    modal.style.display = "none";
  }
}
