function mostraTestoLetteraPerLettera(testo, velocita) {
  var index = 0;
  var contenitore = document.getElementById("name_contenitor");
  contenitore.innerHTML = ""; // Pulizia del contenitore

  function mostraLettera() {
    if (index <= testo.length) {
      var testoMostrato = testo.substring(0, index);
      contenitore.innerHTML = testoMostrato + "|";

      index++;
      setTimeout(mostraLettera, velocita);
    } else {
      // Quando il testo completo è stato mostrato, chiama cancellaTestoLetteraPerLettera
      setTimeout(function() {
        cancellaTestoLetteraPerLettera(testo, velocita);
      }, 3000);
      // Aggiungi l'effetto di blink al carattere "|" durante i tre secondi in cui viene mostrata la frase per intero
      if (index === testo.length) {
        setTimeout(function() {
          toggleBlink();
        }, 3000 - velocita);
      }
    }
  }

  function toggleBlink() {
    var carattere = contenitore.innerHTML.slice(-1);
    if (carattere === "|") {
      contenitore.innerHTML = contenitore.innerHTML.slice(0, -1);
    } else {
      contenitore.innerHTML += "|";
    }

    setTimeout(toggleBlink, 500);
  }

  mostraLettera();
}

function cancellaTestoLetteraPerLettera(testo, velocita) {
  var index = testo.length;
  var contenitore = document.getElementById("name_contenitor");

  function cancellaLettera() {
    if (index >= 0) {
      var testoCancellato = testo.substring(0, index);
      contenitore.innerHTML = testoCancellato;

      index--;
      setTimeout(cancellaLettera, velocita);
    } else {
      // Quando il testo è stato cancellato, verifica quale testo mostrare successivamente
      var nuovoTesto = "";
      if (testo === "AnomaliA") {
        nuovoTesto = "L'informatica che nessuno ti dice";
      } else {
        nuovoTesto = "AnomaliA";
      }

      setTimeout(function() {
        mostraTestoLetteraPerLettera(nuovoTesto, velocita);
      }, 500);
    }
  }

  cancellaLettera();
}

// Utilizzo delle funzioni
var testoDaMostrare = "AnomaliA";
var velocitaMostraLettera = 100; // Millisecondi tra una lettera e l'altra
var velocitaCancellaLettera = 75; // Millisecondi tra una lettera e l'altra

mostraTestoLetteraPerLettera(testoDaMostrare, velocitaMostraLettera);
