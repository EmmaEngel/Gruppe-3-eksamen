// Hent popuppen
var modal = document.getElementById("EmyModal");

// Hent knappen der åbner popuppen
var btn = document.getElementById("EmyBtn");

// Hent <span> elementet der lukker popuppen
var span = document.getElementsByClassName("Eclose")[0];

// Når brugeren klikker på knappen, åben popuppen
btn.onclick = function() {
  modal.style.display = "block";
}

// Når brugeren klikker på <span> (x), Luk popuppen
span.onclick = function() {
  modal.style.display = "none";
}

// Når brugeren klikker nogen steder ude for popuppen, Luk den
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
