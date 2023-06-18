let userInput = ""; // Variabile per salvare l'input dell'utente
let terminalOutput = ""; // Variabile per salvare l'output del terminale

function runProgram() {
  const inputElement = document.getElementById("terminal-input");
  userInput = inputElement.value.trim();
  
  let output;
  
  if(userInput === "clear"){
    location.reload();
  } else if (userInput === "ciao"){
    output = "ciao benvenuto nell'assistenza AnomaliA";
  }
  
  const outputElement = document.getElementById("terminal-output");
  const promptElement = document.getElementById("terminal-prompt");

  terminalOutput += `<div class="terminal-command">${promptElement.innerHTML} ${userInput}</div>`;
  terminalOutput += `<div class="terminal-command">${output}</div>`;

  outputElement.innerHTML = terminalOutput; // Aggiorna l'output del terminale con la variabile terminalOutput

  // Esegui il programma corrispondente all'input
  // Puoi utilizzare la variabile userInput per accedere all'input dell'utente

  inputElement.value = "";
  inputElement.focus();
}

function handleTerminalInput(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    runProgram();
  }
}

const inputElement = document.getElementById("terminal-input");
inputElement.addEventListener("keydown", handleTerminalInput);
